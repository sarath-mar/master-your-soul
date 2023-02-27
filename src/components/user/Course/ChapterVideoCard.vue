<template>
  <div>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" sm="4" md="4">
        <iframe
          width="100%"
          height="100%"
          :src="course.postUrl"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>
      <v-col cols="12" sm="8" md="8">
        <div class="pa-5">
          <p
            :class="$vuetify.breakpoint.smAndUp ? ' text-left ' : 'text-class'"
          >
            <!-- green pa-2 rounded-tr-xl -->
            <span class="text-title font-weight-bold">
              {{ course.title }}
            </span>
          </p>
          <p
            class="ma-0 text-body-1 font-italic"
            :class="$vuetify.breakpoint.smAndUp ? ' text-left ' : 'text-class'"
          >
            <!-- yellow pa-2 rounded-tr-xl rounded-bl-xl -->
            <span class="text-descriptin primary--text">{{ course.description }}</span>
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      required: true,
    },
  },
};
</script>

<style scoped></style>
