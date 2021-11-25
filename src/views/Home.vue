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
      airplane: {
        name: "Airbus A321neo",
        description:
          "空中巴士A320neo系列（英語：Airbus A320neo family）是目前由歐洲空中巴士集團所發展中的A320ceo系列機種的改進版本。",
        img: require("../assets/img/A321neo.jpg"),
      },
    };
  },
  methods: {
    goPath() {
      this.$router.push({ name: "Sandbox" });
    },
  },
};
</script>

<style scoped>
</style>