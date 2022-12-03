<template>
  <div class="mb-5 pa-5">
    <div class="content-data">
      <div class="">
        <span class="what-we-first">User Details</span>
        <!-- <v-spacer></v-spacer> -->
        <!-- <v-btn class="float-right ">Videos</v-btn> -->
      </div>

      <div class="divider-1"><p class="text-center"></p></div>
      <h1 class="text-center">
        <!-- Masterclass I'll Share With You The Secrets On -->
      </h1>
      <div class="px-3">
        <v-data-table :headers="headers" :items="userList">
          <template v-slot:top>
            <v-toolbar flat color="white">
              <!-- <v-toolbar-title>My CRUD</v-toolbar-title> -->
              <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    >New User</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-form ref="form" v-model="valid">
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              v-model="name"
                              label="Name"
                              :rules="nameRule"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="email"
                              label="Email"
                              :rules="emailRule"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="password"
                              label="Password"
                              :rules="passwordRule"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-container>

                    <p v-if="errorFromApi" class="red--text text-center mb-0">
                      {{ errorFromApi }}
                    </p>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                      >Cancel</v-btn
                    >
                    <v-btn
                      color="blue darken-1"
                      :loading="btn_loading"
                      text
                      :disabled="!valid"
                      @click="save"
                      >Save</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <!-- <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template> -->
        </v-data-table>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { userCollection, doc, addDoc, Timestamp } from "@/firebase";
import { query, where, getDocs, limit } from "firebase/firestore";
import { userRole, userRoles } from "@/utils/fetchUser";

export default {
  data: () => ({
    dialog: false,
    btn_loading: false,
    errorFromApi: "",
    valid: true,
    nameRule: [(v) => !!v || "Username should not be empty"],
    passwordRule: [
      (v) => !!v || "Password should not be empty",
      (v) => v.length > 6 || "Password length should be greater than 6",
    ],
    emailRule: [
      (v) => !!v || "Email should not be empty",
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
    headers: [
      {
        text: "Si No",
        align: "start",
        sortable: false,
        value: "si_no",
      },
      { text: "User Name", value: "name" },
      { text: "Email", value: "email" },
      { text: "Password", value: "password" },
      { text: "", value: "actions", align: "end" },
    ],
    userList: [
      // {
      //   si_no: "1",
      //   name: "Sarath",
      //   email: "sarathbnm@gmail.com",
      //   password: "Sarath871@",
      // },
      // {
      //   si_no: "2",
      //   name: "Sarath",
      //   email: "sarathbnm@gmail.com",
      //   password: "Sarath871@",
      // },
      // {
      //   si_no: "3",
      //   name: "Sarath",
      //   email: "sarathbnm@gmail.com",
      //   password: "Sarath871@",
      // },
    ],
    name: "",
    email: "",
    password: "",
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
      return this.editedIndex === -1 ? "New User" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.getUserData(20);
  },

  methods: {
    editItem(item) {
      // this.editedIndex = this.desserts.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialog = true;
    },

    deleteItem(item) {
      // const index = this.desserts.indexOf(item);
      // confirm("Are you sure you want to delete this item?") &&
      //   this.desserts.splice(index, 1);
    },
    async getUserData(limitData) {
      const q = query(userCollection, limit(limitData));
      //  const q = query(userCollection, where("email", "==", user.email));

      const userListData = await getDocs(q);
      if (userListData.docs.lenght);
      let index = limitData - 20;
      userListData.forEach((doc) => {
        let eachUser = {
          si_no: index + 1,
          id: doc.id,
          ...doc.data(),
        };
        this.userList.push(eachUser);
        index++;
        // console.log(doc.id, " => ", doc.data());
      });
      console.log(this.userList);
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
      let user = {};
      user.email = this.email.trim();
      user.password = this.password.trim();
      user.name = this.name.trim();
      user.createdAt = Timestamp.now();

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(async (userCredential) => {
          const userCreated = userCredential.user;
          user.uid = userCreated.uid;
          user.userType = userRoles.USER;
          let data = await addDoc(userCollection, user);
          if (!data) {
            this.errorFromApi = "Adding User Failed";
          }
          this.btn_loading = false;
          this.close();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          let split = errorCode.split("/");
          console.log(split);
          console.log(errorCode);
          console.log(errorMessage);
          console.log(split.length);
          console.log(split[1]);
          this.errorFromApi = split.length > 1 ? split[1] : errorCode;
          this.btn_loading = false;
          // this.close();

          // ..
        });
    },
  },
};
</script>

<style>
.v-data-table > .v-data-table__wrapper .v-data-table__mobile-table-row {
  margin: 10px;
  border: 1px solid #ededed;
  display: block;
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
.divider-1 p {
  display: inline-block;
  height: 2px;
  width: 160px;
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
/* #39B54A */
</style>
