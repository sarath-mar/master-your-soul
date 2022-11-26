<template>
  <nav >
    <!-- <div v-if="$vuetify.breakpoint.mobile" >
      <v-toolbar  :height="navBarHeight">
        <v-toolbar-title class="text-uppercase  grey--text">
          <img
            src="../../../public/image/logo.png"
            class="mt-3"
            width="110px"
            alt=""
          />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-toolbar>
      <v-navigation-drawer app v-model="drawer" absolute temporary>
        <v-layout justify-end>
          <v-icon @click="close" class="black--text">mdi-close</v-icon>
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
    <div v-else class="mt-16">
      <v-card  class="mb-5 primary ">
        <v-app-bar
          fixed
          rounded
          color="white"
          class="grey--text"
          dark
          elevate-on-scroll
          
          :height="navBarHeight"
        >
          <v-layout wrap class="mt-4">
            <v-flex xs12 sm6>
              <v-toolbar-title>
                <img
                  src="../../../public/image/logo.png"
                  class="mt-1"
                  width="110px"
                  alt=""
                />
              </v-toolbar-title>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm6>
              <v-layout class="mx-10 mt-7" justify-end  >
                <div v-for="item in items" :key="item.title">
                  <span v-if="item.title == 'Gallery'">
                    <div class="text-center">
                      <v-menu open-on-hover offset-y>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            icon
                            class="mx-5 grey--text font-weight-light"
                            :class="{
                              'font-weight-bold': galleryPath.includes(
                                $route.path
                              ),
                            }"
                            v-bind="attrs"
                            v-on="on"
                          >
                            Gallery
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item
                            v-for="(item, index) in item.data"
                            :key="index"
                          >
                            <router-link
                              style="text-decoration: none"
                              :to="item.route"
                            >
                              <v-list-item-title
                                class="mx-5 grey--text font-weight-light"
                                :class="{
                                  'font-weight-bold':
                                    $route.path === item.route,
                                }"
                                >{{ item.title }}</v-list-item-title
                              >
                            </router-link>
                          </v-list-item>
                          
                        </v-list>
                        
                      </v-menu>
                    </div>
                  </span>

                  <span v-else>
                    <router-link style="text-decoration: none" :to="item.route">
                      <v-btn
                        class="mx-5 grey--text font-weight-light"
                        :class="{
                          'font-weight-bold': $route.path == item.route,
                        }"
                        icon
                      >
                        {{ item.title }}
                      </v-btn>
                    </router-link>
                  </span>
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-7"
          class="overflow-y-auto"
          max-height="600"
        >
        </v-sheet>
      </v-card>
    </div>
    <div class="logout mx-3" v-if="showLogoutButton">
      
      <v-tooltip bottom >
          <template v-slot:activator="{ on }">
            <v-spacer></v-spacer>
            <v-btn   @click="logout" v-on="on" icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
          </template>
          <span>Log Out</span>
        </v-tooltip>
    </div> -->

    <div>
      <v-toolbar   flat absolute class="toolbar" :height="navBarHeight">
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
      </v-navigation-drawer>
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
.logout {
  display: flex;
  align-items: flex-end;
}
.toolbar {
  background-color: transparent !important;
  width: 100vw;
  
 
}
.theme--light.v-btn.v-btn--icon {
  color: white;
}
</style>
