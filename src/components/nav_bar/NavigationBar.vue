<template>
  <nav>
    <div>
      <!-- <v-toolbar   flat absolute class="toolbar" :height="navBarHeight">
        <v-toolbar-title class="text-uppercase grey--text">
          <img
            src="../../../public/image/logo.png"
            class="mt-6"
            width="110px"
            alt=""
          />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon class="mr-5 " @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-toolbar>
      <v-navigation-drawer  v-model="drawer" floating absolute right temporary>
        <v-layout justify-end>
          <v-icon @click="close" class="white">mdi-close</v-icon>
        </v-layout>
        <v-list dense rounded class="mt-10">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> -->
      <div class="nav-bar">
        <div>
          <img
            src="../../../public/image/logo.png"
            class="mt-6"
            width="110px"
            alt=""
          />
        </div>
        <div>
          <v-app-bar-nav-icon
            class="mr-5 nav-icon"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-navigation-drawer
            v-model="drawer"
            floating
            absolute
            right
            temporary
          >
            <v-layout justify-end>
              <v-icon @click="close" class="white">mdi-close</v-icon>
            </v-layout>
            <v-list dense rounded class="mt-10">
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.route"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    drawer: false,
    navBarHeight: "80px",
    projectFirstName: "MASTER YOUR SOUL",
    projectSecondName: "",
    showLogoutButton: false,
    roleData: localStorage.getItem("ROLE_OF_USER"),
    items: [
      { title: "Home", icon: "mdi-home", route: "/" },
      { title: "About", icon: "mdi-home", route: "/admin" },
      { title: "Post", icon: "mdi-home", route: "/post" },
      { title: "Videos", icon: "mdi-video", route: "/videos" },
      //  {
      //     title: "Gallery",
      //     icon: "mdi-image",
      //     route: "/gallery",
      //     data: [
      //       { title: "Photo Category", icon: "mdi-image", route: "/gallery" },
      //       {
      //         title: "Video Gallery",
      //         icon: "mdi-video",
      //         route: "/video-gallery",
      //       },
      //       {
      //         title: "Image Gallery",
      //         icon: "mdi-image",
      //         route: "/all-gallery",
      //       },
      //       {
      //         title: "Published Works",
      //         icon: "mdi-image",
      //         route: "/published-works",
      //       },
      //     ],
      //   },
    ],
  }),
  watch: {
    roleData: {
      handler(item) {
        if (item.includes[("ADMIN", "USER")]) {
          showLogoutButton = true;
        } else {
          showLogoutButton = false;
        }
      },
      deep: true,
    },
  },
  methods: {
    close() {
      this.drawer = false;
    },
    logout() {
      localStorage.removeItem("ROLE_OF_USER");
      this.$router.replace({ path: "/login" });
    },
  },
};
</script>
<style>
.nav-bar {
  position: fixed;
  width: 100vw; 
  display: flex;
  align-items: center;
  background-color:rgb(19, 19, 19);
  justify-content: space-between;
  height: 80px;
}
.logout {
  display: flex;
  align-items: flex-end;
}
.toolbar {
  background-color: red !important;
  /* width: 100vw; */
}
.theme--light.v-btn.v-btn--icon {
  color: white;
}
.nav-icon{
  background-color: rgba(73, 69, 69, 0.932);
}
</style>
