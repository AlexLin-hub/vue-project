<template>
  <div>
    <v-card class="pa-6" height="500">
      <v-img aspect-ratio="1.5" :src="airplane['img']"></v-img>
      <h2 class="text-center my-3">{{ airplane["name"] }}</h2>
      <p>
        {{ airplane["description"] }}
      </p>
      <v-chip label>航班日期:{{ airplane["date"] }}</v-chip>
      <v-chip class="ml-2" label>飛航路線:{{ airplane["where"] }}</v-chip>
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