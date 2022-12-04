<template>
  <div>
    <v-dialog v-model="dialog" max-width="300px">
      <template v-slot:activator="{ on }">
        <v-icon v-on="on" color="red" class="ms-2">mdi-delete</v-icon>
      </template>
      <v-card class="pt-1 pb-5" color="ashColor ">
        <v-card-text class="subtitle-1 mb-0 mt-6 text-center red--text"
          >Delete this video :
          <span font-weight-bold> {{ post.postCaption }} </span> ?</v-card-text
        >

        <v-card-text v-if="error" class="error--text font-weight-bold">{{
          error
        }}</v-card-text>
        <v-card-actions justify="center">
          <v-row justify="center">
            <v-btn small color=" mx-2 error" depressed @click="close">No</v-btn>
            <v-btn
              small
              color=" mx-2 success"
              depressed
              :loading="button_loading"
              @click="
                button_loading = true;
                deleteMethod(post.id);
              "
              >Yes</v-btn
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      timeout="3000"
      right
      top
      :color="snackbarColor"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import { deleteDoc, doc } from "@firebase/firestore";
import { videoCollection } from "@/firebase";
import { deleteObject, getStorage, ref } from '@firebase/storage';
export default {
  props: {
    post: {
      required: true,
    },
  },
  data() {
    return {
      valid: true,
      dialog: false,
      button_loading: false,
      show_alert: false,
      error: null,
      snackbar: false,
      snackbarColor: "",
      text: "",
    };
  },
  methods: {
    deleteMethod(id) {
      const docRef = doc(videoCollection, id);
      deleteDoc(docRef)
        .then(() => {
          const storage = getStorage();
          const desertRef = ref(storage, `videos/${id}.mp4`);
          deleteObject(desertRef)
            .then(() => {
              (this.snackbar = true),
                (this.snackbarColor = "green"),
                (this.text = "Deleted Sucessfully"),
                console.log("deleted image");
              this.dialog = false;

              this.$emit("updatePost");
            })
            .catch((error) => {
              console.log(error);
            });
        })

        .catch((e) => {
          console.log(e);
        });
    },
    close() {
      this.error = null;
      this.dialog = false;
    },
  },
};
</script>
