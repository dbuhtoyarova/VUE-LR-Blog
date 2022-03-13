import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {"id":"1","title":"Lifestyle","alias":"lifestyle"},
      {"id":"2","title":"Food","alias":"food"},
      {"id":"3","title":"Nature","alias":"nature"},
      {"id":"4","title":"Photography","alias":"photography"}
    ],
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

    ],
  },
  getters: {
    CATEGORIES: state => state.categories,
    POSTS: state => state.posts,
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
