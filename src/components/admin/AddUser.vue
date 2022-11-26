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
      <div class="px-15">
        <v-data-table :headers="headers" :items="desserts">
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
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            v-model="user.name"
                            label="Name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="user.email"
                            label="Email"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="user.password"
                            label="Password"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
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
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data: () => ({
    dialog: false,
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
    desserts: [
      {
        si_no: "1",
        name: "Sarath",
        email: "sarathbnm@gmail.com",
        password: "Sarath871@",
      },
      {
        si_no: "2",
        name: "Sarath",
        email: "sarathbnm@gmail.com",
        password: "Sarath871@",
      },
      {
        si_no: "3",
        name: "Sarath",
        email: "sarathbnm@gmail.com",
        password: "Sarath871@",
      },
    ],
    user: {
      name: "",
      email: "",
      password: "",
    },
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

    save() {
     let f=false
     if(f){
      this.btn_loading = true;
      const auth = getAuth();
      console.log(auth);
      let email = this.phone;
      let password = this.password;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          this.btn_loading=false
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          this.errorFromApi=errorMessage
          this.btn_loading=false
          // ..
        });
     }
      this.close();
    },
  },
};
</script>

<style>
  .v-data-table>.v-data-table__wrapper .v-data-table__mobile-table-row {
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
