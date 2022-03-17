<template>
  <v-container>
    <div v-if="loading" class="text-center my-10">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <v-row v-else>
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
            <v-btn icon @click="delete_post(post.id)">
              <v-icon color="grey lighten-1">mdi-delete</v-icon>

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

        <ValidationObserver ref="obs" v-slot="{ invalid}">

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ dialogTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col>
                    <ValidationProvider
                        name="title"
                        rules="required|max:50|min:5"
                        v-slot="{ errors, valid }"
                    >
                      <v-text-field
                          label="Название*"
                          v-model="model.title"
                          required
                          :counter="50"
                          :error-messages="errors"
                          :success="valid"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <ValidationProvider
                        name="category_id"
                        rules="required"
                        v-slot="{ errors, valid }"
                    >
                      <v-select
                          v-model="model.category_id"
                          :items="categories"
                          item-value="id"
                          item-text="title"
                          label="Категория"
                          :error-messages="errors"
                          :success="valid"
                      ></v-select>
                    </ValidationProvider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <ValidationProvider
                        name="content"
                        rules="required|max:300|min:10"
                        v-slot="{ errors, valid }"
                    >
                      <v-textarea
                          label="Содержимое*"
                          v-model="model.content"
                          required
                          :counter="300"
                          :error-messages="errors"
                          :success="valid"
                      ></v-textarea>
                    </ValidationProvider>
                  </v-col>
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
                  :disabled="invalid"
              >
                {{ mode }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </ValidationObserver>
      </v-dialog>
    </template>
  </v-container>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  name: "Post",
  components: {ValidationObserver, ValidationProvider},
  data() {
    return {
      mode: '',
      dialog: false,
      model: {},
      loading: false,
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
    this.loading = true;
    this.$store.dispatch('GET_CATEGORIES').then(() => {
      this.$store.dispatch('GET_POSTS').then(() => {
        this.loading = false;
      });
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
    async save() {
      const isValid = await this.$refs.obs.validate();
      if (isValid) {
        this.$store.dispatch('ADD_POST', this.model).then(() => {
          this.reset();
        });
      }
    },
    async update() {
      const isValid = await this.$refs.obs.validate();
      if (isValid) {
        this.$store.dispatch('UPDATE_POST', this.model).then(() => {
          this.reset();
        });
      }
    },
    reset() {
      this.dialog = false;
      this.model = {
        title: '',
        category_id: '',
        content: '',
      };
      this.$refs.obs.reset();
    }
  }
  ,
}
</script>

<style scoped>

</style>