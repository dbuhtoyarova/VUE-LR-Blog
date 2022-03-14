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
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Category",
  computed: {
    categories: function () {
      return this.$store.getters.CATEGORIES;
    }

  },
  mounted() {
    this.$store.dispatch('GET_CATEGORIES');
  }

}
</script>

<style scoped>

</style>