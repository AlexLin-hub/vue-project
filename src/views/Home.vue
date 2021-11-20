<template>
  <v-container>
    <v-row>
      <v-col><h1 class="text-center">HI! 歡迎你！</h1></v-col>
    </v-row>

    <!-- 觀看區 -->
    <v-row class="rounded-xl blue lighten-4 pa-3">
      <v-col cols="12"><h2>這是你目前輸入的值</h2></v-col>
      <v-col class="rounded-xl blue lighten-3" cols="3"
        >輸入匡
        <strong>{{
          sandbox["textField"] || "請在下方操作區操作"
        }}</strong></v-col
      >
      <v-col class="rounded-xl blue lighten-3" cols="3"
        >選項 <strong>{{ sandbox["checkbox"] }}</strong></v-col
      >
    </v-row>

    <!-- 操作區 -->
    <v-row>
      <v-col cols="12">
        <h2>操作區</h2>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="sandbox['textField']" label="輸入匡" outlined />
      </v-col>
      <v-col cols="3">
        <v-checkbox v-model="sandbox['checkbox']" label="選項" />
      </v-col>
      <v-col cols="3">
        <v-btn color="error" depressed v-on:click="youAndMe()">不要按我</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn color="error" depressed v-on:mouseover="youAndMe()">不要在我上面</v-btn>
      </v-col>
      <v-col cols="12" class="text-end">
        <v-btn color="primary" v-on:click="goPath()">前往操作</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      sandbox: {
        textField: "",
        checkbox: false,
      },
    };
  },
  methods: {
    goPath() {
      this.$router.push({ name: "Sandbox" });
    },
    youAndMe(){
        alert("老爺不要！")
    }
  },
};
</script>

<style scoped>
</style>