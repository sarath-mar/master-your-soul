<template>
  <v-container>
    <v-card
      rounded="lg"
      outlined
      max-height="400px"
      max-width="500px"
      class="mx-auto my-16 pa-10 pa-sm-14"
      color="white"
      elevation="4"
    >
      <v-layout justify-center>
        <!-- <h1>LOG IN</h1> -->
        <p>Welcome to {{ projectName }}</p>
      </v-layout>
      <v-form ref="form" v-model="valid">
        <v-layout class="mt-10">
          <v-flex>
            <v-text-field
              :rules="userNameRule"
              v-model="phone"
              label="Username"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <v-text-field
              :rules="passwordRule"
              v-model="password"
              label="Password"
              required
              @click:append="show1 = !show1"
              dense
              :append-icon="
                show1 ? 'mdi-eye black--text' : 'mdi-eye-off black--text'
              "
              :type="show1 ? 'text' : 'password'"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout justify-center class="ms-n3">
          <v-btn
            depressed
            color="ashColor"
            class="white--text ml-3 font-weight-light"
            @click="onSubmit"
            :loading="btn_loading"
            :disabled="!valid"
            >Log In</v-btn
          >
        </v-layout>
      </v-form>
      <p v-if="errorFromApi" class="red--text text-center mt-6">
        {{ errorFromApi }}
      </p>
    </v-card>
  </v-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

export default {
  components: {},
  data() {
    return {
      phone: "",
      password: "",
      btn_loading: false,
      show1: false,
      errorFromApi: null,
      valid: true,
      style: {
        borderStyle: { border: "0px solid black !important" },
      },
      userNameRule: [(v) => !!v || "Username should not be empty"],
      passwordRule: [(v) => !!v || "Password should not be empty"],
    };
  },
  methods: {
    onSubmit() {
      this.errorFromApi = "";
      // console.log(process.env.VUE_APP_ADMIN_ID);
      this.btn_loading = true;
      console.log(this.phone + this.password);
      // this.$store.state.signin = true;

      let email = this.phone;
      let password = this.password;
      const auth = getAuth(app);
      console.log(auth);
      let ADMIN_ID = ["9JYWpLhJRLSWPMpYSi5Di6lUH5i1"];
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          this.errorFromApi = "";
          const user = userCredential.user;
          console.log(user.uid);
          this.btn_loading = false;
          if (user.uid) {
            if (user.uid.includes(ADMIN_ID)) {
              localStorage.setItem("ROLE_OF_USER", "ADMIN");
              this.$router.replace({ path: "/admin" });
            } else {
              localStorage.setItem("ROLE_OF_USER", "ADMIN");
              this.$router.replace({ path: "/verify-video" });
            }
          }
          // localStorage.setItem("ROLE_OF_USER", "ADMIN");
          // this.$session.start();

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          this.errorFromApi = "Incorrect username or password";
          this.btn_loading = false;
        });
      // console.log(this.phone + this.password);
      // // this.$store.state.signin = true;
      // let email = this.phone;
      // let password = this.password;
      // const auth = getAuth();
      // signInWithEmailAndPassword(auth, email, password)
      //   .then((userCredential) => {
      //     // Signed in
      //     const user = userCredential.user;
      //     console.log(user);
      //     this.btn_loading = false;
      //     localStorage.setItem("ROLE_OF_USER", "ADMIN");
      //     // this.$session.start();
      //     this.$router.replace({ path: "/admin" });
      //     // ...
      //   })
      //   .catch((error) => {
      //     // const errorCode = error.code;
      //     const errorMessage = error.message;
      //     console.log(errorMessage);
      //     this.errorFromApi = errorMessage;
      //     this.btn_loading = false;
      //   });
      //   userSignIn(this.phone, this.password).then(data => {
      //     if (data) {
      //       // console.log(data);
      //       if (data === true) {
      //         this.btn_loading = false;
      //         if (isDietitian()) {
      //           this.$router.replace({ path: "appointments" });
      //         } else {
      //           this.$router.replace({ path: "dashboard" });
      //         }
      //       } else if (data.includes("NOT_FOUND")) {
      //         this.errorFromApi = this.$t("user.signIn.invalidLogin");
      //         this.btn_loading = false;
      //       }
      //     }
      //   });
      // }
    },
  },
};
</script>

<style>
/* .inputPhone input[type="number"] {
  -moz-appearance: textfield;
}
.inputPhone input::-webkit-outer-spin-button,
.inputPhone input::-webkit-inner-spin-button {
  -webkit-appearance: none;
} */
</style>
