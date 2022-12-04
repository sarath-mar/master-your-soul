<template>
  <div class="mb-5 pa-5">
    <div class="content-data">
      <div class="">
        <!-- <span class="what-we-first">User Videos</span> -->
      </div>

      <!-- <div class="divider"><p class="text-center"></p></div> -->
      <h1 class="text-center">
        <!-- Masterclass I'll Share With You The Secrets On -->
      </h1>
      <div class="px-3">
        <v-toolbar flat color="white">
          <!-- <v-toolbar-title>My CRUD</v-toolbar-title> -->
          <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" class="dialog" max-width="80vh">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
                >Add Video</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="title"
                        label="Title"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="description"
                        label="Description"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        accept="video/*"
                        placeholder="Pick an mp4 video"
                        v-model="file"
                        prepend-icon="mdi-video"
                        label="Video"
                        @change="handleFileUpload"
                        show-size
                        counter
                        multiple
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12">
                      <video
                        class="video-player"
                        id="video-preview"
                        controls
                        autoplay
                        muted
                        v-show="file !== ''"
                      >
                        <source
                          class="video-src"
                          type="video/mp4 mp4 m4v f4v f4p"
                        />
                        <source
                          class="video-src"
                          type=" video/mp4 mp4 m4v f4v f4p"
                        />
                        <source class="video-src" type="video/ogg ogv" />
                        <source class="video-src" type="video/webm webm" />
                        <source class="video-src" type="video/x-flv flv" />
                        Your browser does not support HTML video.
                      </video>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <p v-if="errorFromApi" class="red--text text-center mb-0">
                {{ errorFromApi }}
              </p>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" :loading="btn_loading" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <admin-video :updateData="updateData" />
        <!-- </template> -->
        <!-- <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template> -->
        <!-- </v-data-table> -->
      </div>
    </div>
  </div>
</template>
<script>
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { updateDoc, doc, addDoc } from "@firebase/firestore";
// import {} from "@firebase/firestore";
import AdminVideo from "./AdminVideo.vue";
import { videoCollection } from "@/firebase";
// import { ref } from "vue";
export default {
  components: { AdminVideo },
  data: () => ({
    dialog: false,
    updateData:false,
    btn_loading:false,
    errorFromApi: "",
    file: "",
    fileSrc: "",

    title: "",
    description: "",
    file: "",
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    // this.initialize();
  },

  methods: {
    handleFileUpload(event) {
      console.log(event, "eventt...........");
      console.log(this.video, "eventt...........");
      if (event.length) {
        this.file = event[0];
      }
      this.previewVideo();
    },
    previewVideo() {
      let video = document.getElementById("video-preview");
      let reader = new FileReader();

      console.log(reader.result);
      reader.readAsDataURL(this.file);
      console.log(this.file);
      reader.addEventListener("load", function () {
        video.src = reader.result;
        // source
        this.fileSrc = reader.result;
        console.log("filalllll", this.fileSrc);
      });
    },
    getEncodedVideoString(type, file) {
      return `data:video/${type};base64,${base64_encode(
        file_get_contents(file)
      )}`;
      //  return 'data:video/' . $type . ';base64,' . base64_encode(file_get_contents($file));
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    
    async save() {
      this.errorFromApi = "";
      this.btn_loading = true;
      let data = await addDoc(videoCollection, {
        title: this.title,
        description: this.description,
      });
      if (data && this.file) {
        let postUrl = "";
        var storageRef = ref(getStorage(), `videos/${data.id}.mp4`);
        // const metadata = {
        //   contentType: "application/pdf",
        // };

        uploadBytes(storageRef, this.file)
          .then(async (snapshot) => {
            console.log("Uploaded a pdf document or file!");
            console.log(snapshot);
            postUrl = await getDownloadURL(storageRef);
            if (postUrl) {
              let docRef = doc(videoCollection, data.id);
              await updateDoc(docRef, {
                postUrl,
              })
                .then(() => {
                  this.dialog = false;
                  this.button_loading = false;
                  console.log("added finally");
                  this.updateData=true
                  // this.$emit("updatePost");
                })
                .catch(() => {
                  this.button_loading = false;
                });
            }
          })
          .catch(() => {
            this.button_loading = false;
          });
      }
    },
  },
};
</script>

<style>
.video-player {
  width: 100%;
}
.what-we {
  /* background-color: #39b54a; */
  /* min-height: 100vh;
    width: 100vw;
    display: flex; */
  /* flex-direction: column;
    align-items: center;
    justify-content: center; */
  color: black;
}
.content-data {
  width: 100%;
}
.what-we-first {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  color: #39b54a;
}
.we-do-for {
  font-size: 3rem;
  color: black;
}
.description {
  padding: 10px;
  font-size: 1.5rem;
  /* line-height: 1.1; */
}
.divider p {
  display: inline-block;
  height: 2px;
  width: 150px;
  background-color: rgba(0, 0, 0, 0.1);
}
*,
::before,
::after {
  box-sizing: inherit;
}
ul {
  list-style: none;
}
.list-data p {
  font-size: 1rem;
  font-weight: 600;
  color: #39b54a;
}
v-card {
  background-color: #39b54a !important;
}
.dialog {
  width: 60vw;
}
/* #39B54A */
</style>
