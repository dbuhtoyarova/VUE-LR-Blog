<template>
  <v-card
      class="mx-auto"
      max-width="300"
      tile
  >
    <v-list dense>

      <v-subheader>Категории:</v-subheader>
      <v-list-item-group
          color="primary"
      >
        <v-list-item
            v-for="(category, i) in categories"
            :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="category.title"></v-list-item-title>
            <v-list-item-subtitle v-text="category.alias"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <div>
              <v-btn icon @click="edit(category)">
                <v-icon color="grey lighten-1">mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                  icon
                  @click="delete_category(category.id)">
                <v-icon color="grey lighten-1">mdi-delete</v-icon>

              </v-btn>
            </div>
          </v-list-item-action>

        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-row justify="center" class="py-2">
      <v-btn
          color="primary"
          dark
          @click="create"
      >
        Добавить
      </v-btn>
    </v-row>
    <template>
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
      >

        <ValidationObserver ref="obs" v-slot="{ invalid }">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ dialogTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <ValidationProvider name="title" rules="required|max:50|min:5" v-slot="{ errors, valid }">
                    <v-text-field
                        label="Название*"
                        v-model="model.title"
                        required
                        :counter="50"
                        :error-messages="errors"
                        :success="valid"
                    >
                    </v-text-field>
                  </ValidationProvider>
                </v-row>
              </v-container>
              <small>* Обязательно для заполнения</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="reset"
              >
                Закрыть
              </v-btn>
              <v-btn
                  color="blue darken-1"
                  text
                  :disabled="invalid"
                  @click="mode === 'Добавить' ? save() : update()"
              >
                {{ mode }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </ValidationObserver>
      </v-dialog>
    </template>
  </v-card>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  name: "Category",
  components: {ValidationObserver, ValidationProvider},
  data() {
    return {
      mode: '',
      dialog: false,
      model: {},
    }
  },
  computed: {
    categories() {
      return this.$store.getters.CATEGORIES;
    },
    dialogTitle() {
      return `${this.mode} категорию`;
    },
  },
  mounted() {
    this.$store.dispatch('GET_CATEGORIES');
  },
  methods: {
    delete_category(id) {
      this.$store.dispatch('DELETE_CATEGORIES', id);
    },
    create() {
      this.mode = 'Добавить';
      this.dialog = true;
    },
    edit(model) {
      this.mode = 'Изменить';
      this.model.title = model.title;
      this.model.id = model.id;
      this.dialog = true;
    },
    async save() {
      const isValid = await this.$refs.obs.validate();
      if (isValid) {
        this.$store.dispatch('ADD_CATEGORY', this.model).then(() => {
          this.reset();
        });
      }
    },
    async update() {
      const isValid = await this.$refs.obs.validate();
      if (isValid) {
        this.$store.dispatch('UPDATE_CATEGORY', this.model).then(() => {
          this.reset();
        });
      }
    },
    reset() {
      this.dialog = false;
      this.model = {
        title: '',
      };
      this.$refs.obs.reset();
    }
  },

}
</script>

<style scoped>

</style>