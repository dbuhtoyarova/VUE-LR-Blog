<template>
  <v-container>
    <v-row>
      <v-col
          v-for="(post, i) in newPosts"
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
              {{ post.category_id }}
            </div>

            <div class="text--primary" v-html="post.content"></div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>{{ post.created_at }}</v-card-text>
          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
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
    posts: [
      {
        "id": "1",
        "category_id": "1",
        "title": "Post 1",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
        "img": "img/post-image2.jpg",
        "created_at": "2022-03-03 21:24:18",
        "keywords": "ключевики",
        "description": "описание"
      },
      {
        "id": "2",
        "category_id": "1",
        "title": "Post 2",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<\/p>",
        "img": "img\/post-image3.jpg",
        "created_at": "2022-03-03 21:29:28",
        "keywords": "",
        "description": ""
      },
      {
        "id": "3",
        "category_id": "2",
        "title": "Post 3",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<\/p>",
        "img": "img\/post-image4.jpg",
        "created_at": "2022-03-03 21:29:28",
        "keywords": "",
        "description": ""
      },
      {
        "id": "4",
        "category_id": "3",
        "title": "Post 4",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<\/p>",
        "img": "img\/post-image5.jpg",
        "created_at": "2022-03-03 21:29:28",
        "keywords": "",
        "description": ""
      },
      {
        "id": "5",
        "category_id": "3",
        "title": "Post 5",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<\/p>",
        "img": "img\/post-image6.jpg",
        "created_at": "2022-03-03 21:29:28",
        "keywords": "",
        "description": ""
      },
      {
        "id": "6",
        "category_id": "3",
        "title": "Post 6",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<\/p>",
        "img": "img\/post-image7.jpg",
        "created_at": "2022-03-03 21:29:28",
        "keywords": "",
        "description": ""
      },
      {
        "id": "7",
        "category_id": "2",
        "title": "Post 7",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<\/p>",
        "img": "img\/post-image8.jpg",
        "created_at": "2022-03-03 21:29:28",
        "keywords": "",
        "description": ""
      },
      {
        "id": "8",
        "category_id": "1",
        "title": "Post 8",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<\/p>",
        "img": "img\/post-image9.jpg",
        "created_at": "2022-03-03 21:29:28",
        "keywords": "",
        "description": ""
      },
      {
        "id": "9",
        "category_id": "1",
        "title": "Post 9",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<\/p>",
        "img": "img\/post-image2.jpg",
        "created_at": "2022-03-03 21:24:18",
        "keywords": "ключевики",
        "description": "описание"
      },
      {
        "id": "10",
        "category_id": "1",
        "title": "Posts 10",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "img": null,
        "created_at": "2022-03-10 00:00:00",
        "keywords": null,
        "description": null
      },
      {
        "id": "12",
        "category_id": "1",
        "title": "Post 12",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "img": null,
        "created_at": "2022-03-10 00:00:00",
        "keywords": "keyword",
        "description": null
      },
      {
        "id": "13",
        "category_id": "2",
        "title": "Post 13",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "img": null,
        "created_at": "2022-03-10 00:00:00",
        "keywords": null,
        "description": null
      },
      {
        "id": "14",
        "category_id": "1",
        "title": "Post 10",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "img": null,
        "created_at": "2022-10-01 00:00:00",
        "keywords": null,
        "description": null
      },
      {
        "id": "15",
        "category_id": "1",
        "title": "Post 10",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "img": null,
        "created_at": "2022-10-01 00:00:00",
        "keywords": null,
        "description": null
      },
      {
        "id": "16",
        "category_id": "1",
        "title": "Post 11",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "img": null,
        "created_at": "2022-10-01 00:00:00",
        "keywords": null,
        "description": null
      },
      {
        "id": "17",
        "category_id": "1",
        "title": "Post 12",
        "excerpt": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<\/p>",
        "img": null,
        "created_at": "2022-10-01 00:00:00",
        "keywords": null,
        "description": null
      }
    ],
  }),
  computed: {
    newPosts: function () {
      return this.posts.filter(function (post) {
        return post.img = "http://mysite/" + post.img;
      })
    }
  },
  methods: {},
}
</script>

<style scoped>

</style>