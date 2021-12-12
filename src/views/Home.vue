<template>
  <v-container>
    <!-- 操作區 -->
    <v-row>
      <v-col cols="4">
        <airplane-card :airplane="airplane" />
      </v-col>
      <v-col cols="12" class="text-end">
        <v-btn color="primary" v-on:click="goPath()">前往操作</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AirplaneCard from "../components/AirplaneCard";
export default {
  components: {
    AirplaneCard,
  },
  data() {
    return {
      airplane: this.$store.state.airplane,
    };
  },
  methods: {
    goPath() {
      this.$router.push({
        name: "Sandbox",
      });
    },
  },
};
</script>

<style scoped>
</style>