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
  </v-card>
</template>

<script>
export default {
  name: "Category",
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
    this.reset();
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
    save() {
      this.$store.dispatch('ADD_CATEGORY', this.model).then(() => {
        this.reset();
      });
    },

    update() {
      this.$store.dispatch('UPDATE_CATEGORY', this.model).then(() => {
        this.reset();
      });
    },
    reset() {
      this.dialog = false;
      this.model = {
        title: '',
      };
    },
  },

}
</script>

<style scoped>

</style>