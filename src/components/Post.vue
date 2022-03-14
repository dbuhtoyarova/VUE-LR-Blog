<template>
  <v-container>
    <v-row>
      <v-col
          v-for="(post, i) in posts"
          :key="i"
      >
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>

          <v-img
              height="250"
              :src="post.img"
          ></v-img>

          <v-card-title>{{ post.title }}</v-card-title>

          <v-card-text>
            <div class="my-1 text-subtitle-1">
              {{ post.category }}
            </div>

            <div class="text--primary" v-html="post.content"></div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>{{ post.created_at }}</v-card-text>
          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="delete_post(post.id)"
            >
              Delete
            </v-btn>
            <v-btn
                color="deep-purple lighten-2"
                text
            >
              Edit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Post",
  data: () => ({
    url: "http://mysite/",

  }),
  computed: {
    posts: function () {
      return this.$store.getters.POSTS;
    },
  },
  mounted() {
    this.$store.dispatch('GET_CATEGORIES').then(() => {
      this.$store.dispatch('GET_POSTS');
    });
  },
  methods: {
    delete_post(id) {
      this.$store.dispatch('DELETE_POST', id);
    }
  },
}
</script>

<style scoped>

</style>