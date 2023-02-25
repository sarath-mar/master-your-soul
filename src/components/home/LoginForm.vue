<template>
  <v-dialog persistent class="login-popup" max-width="350">
    <template v-slot:activator="{ on, attrs }">
      <v-btn x-large class="button" color="primary" v-bind="attrs" v-on="on">
        LOGIN
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>Login</v-toolbar>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-layout class="mt-10">
              <v-flex>
                <v-text-field
                  :rules="userNameRule"
                  v-model="phone"
                  label="Username or Email"
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
                color="primary"
                class="white--text ml-3 font-weight-light"
                @click="onSubmit"
                :loading="btn_loading"
                :disabled="!valid"
                >Log In</v-btn
              >
            </v-layout>
          </v-form>
          <p v-if="errorFromApi" class="red--text text-center">
            {{ errorFromApi }}
          </p>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
import { getDocs, query, where } from "@firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, db, userCollection, doc, setDoc, addDoc } from "../../firebase";
import { userInfoDetails } from "../../utils/fetchUser";
// import { doc, setDoc } from "@firebase/firestore";

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
    async onSubmit() {
      this.errorFromApi = "";
      localStorage.clear();
      // console.log(process.env.VUE_APP_ADMIN_ID);
      this.btn_loading = true;
      console.log(this.phone + this.password);
      // this.$store.state.signin = true;

      let email = this.phone.trim();
      let password = this.password.trim();
      const auth = getAuth(app);
      console.log(auth);
      let ADMIN_ID = ["9JYWpLhJRLSWPMpYSi5Di6lUH5i1"];
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          this.errorFromApi = "";
          let userRole = "USER";
          const user = userCredential.user;
          const q = query(userCollection, where("uid", "==", user.uid));

          const querySnapshot = await getDocs(q);
          if (querySnapshot.size === 1) {
            querySnapshot.forEach((doc) => {
              if (doc.data().userType === "ADMIN") {
                userRole = "ADMIN";
              }
              console.log(doc.userType, " => ", doc.data());
            });
          }
          console.log("querySnapshot", querySnapshot);
          let userData = {
            accessToken: user.accessToken,
            uid: user.uid,
            userRole,
          };
          //   await setDoc(doc(db, "users", "user.uid"), user);
          // await addDoc(userCollection, userData);
          //   console.log(userCredential);
          this.btn_loading = false;
          if (user.uid) {
            localStorage.setItem(
              "ACCESS_TOKEN",
              user.stsTokenManager.refreshToken
            );
            localStorage.setItem("USER_DETAILS", userData);
            localStorage.setItem("USER_ROLE", userRole);
            let sample = userInfoDetails();
            console.log("...............................");
            console.log(sample);
            userRole === "ADMIN"
              ? this.$router.replace({ path: "/admin" })
              : userRole === "USER"
              ? this.$router.replace({ path: "/courses" })
              : this.$router.replace({ path: "/404-error" });
          } else {
            this.errorFromApi = "Not a valid user";
            localStorage.clear();
          }
          // localStorage.setItem("ROLE_OF_USER", "ADMIN");
          // this.$session.start();

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          localStorage.clear();
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
.login-popup {
  width: 60px;
}
</style>
