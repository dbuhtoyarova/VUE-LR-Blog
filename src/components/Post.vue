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
          <template v-slot="progress">
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
            <v-btn icon @click="edit(post)">
              <v-icon color="grey lighten-1">mdi-pencil</v-icon>
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-btn
        color="primary"
        fixed
        bottom
        right
        fab
        @click="create"

    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <template>
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
      >

        <v-card>
          <v-card-title>
            <span class="text-h5">{{ dialogTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-text-field
                    label="Название*"
                    v-model="model.title"
                    required
                ></v-text-field>
              </v-row>
              <v-row>
                <v-select
                    v-model="model.category_id"
                    :items="categories"
                    item-value="id"
                    item-text="title"
                    label="Категория"
                ></v-select>
              </v-row>
              <v-row>
                <v-textarea
                    label="Содержимое*"
                    v-model="model.content"
                    required
                ></v-textarea>
              </v-row>
            </v-container>
            <small>* Обязательно для заполнения</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Закрыть
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="mode === 'Добавить' ? save() : update()"
            >
              {{ mode }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-container>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      mode: '',
      dialog: false,
      model: {},
    };
  },
  computed: {
    posts() {
      return this.$store.getters.POSTS;
    },
    dialogTitle() {
      return `${this.mode} пост`;
    },
    categories() {
      return this.$store.getters.CATEGORIES;
    },
  },
  mounted() {
    this.reset();
    this.$store.dispatch('GET_CATEGORIES').then(() => {
      this.$store.dispatch('GET_POSTS');
    });
  },
  methods: {
    delete_post(id) {
      this.$store.dispatch('DELETE_POST', id);
    },
    create() {
      this.mode = 'Добавить';
      this.dialog = true;
    },
    edit(model) {
      this.mode = 'Изменить';
      this.model.title = model.title;
      this.model.category_id = model.category_id;
      this.model.content = model.content;
      this.model.id = model.id;
      this.dialog = true;
    },
    save() {
      this.$store.dispatch('ADD_POST', this.model).then(() => {
        this.reset();
      });
    },
    update() {
      this.$store.dispatch('UPDATE_POST', this.model).then(() => {
        this.reset();
      });
    },
    reset() {
      this.dialog = false;
      this.model = {
        title: '',
        category_id: '',
        content: '',
      };
    }
  },
}
</script>

<style scoped>

</style>