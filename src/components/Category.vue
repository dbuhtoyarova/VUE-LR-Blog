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
  data: () => ({
    categories: [
      {"id":"1","title":"Lifestyle","alias":"lifestyle"},
      {"id":"2","title":"Food","alias":"food"},
      {"id":"3","title":"Nature","alias":"nature"},
      {"id":"4","title":"Photography","alias":"photography"}
    ],
  })

}
</script>

<style scoped>

</style>