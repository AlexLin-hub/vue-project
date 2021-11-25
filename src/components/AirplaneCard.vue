<template>
  <div>
    <v-card class="pa-6" height="500">
      <v-img aspect-ratio="1.5" :src="airplane['img']"></v-img>
      <h2 class="text-center my-3">{{ airplane["name"] }}</h2>
      <p>
        {{ airplane["description"] }}
      </p>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    airplane: { type: Object, default: () => {} },
  },
};
</script>

<style scoped>
</style>