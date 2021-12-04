<template>
  <div>
    <!-- 新增已經切12份的箱子 -->
    <v-container fluid class="px-10 py-8">
      <!-- 列 -->
      <v-row>
        <!-- 欄 -->
        <v-col
          v-for="(airplane, index) in airplanes"
          :key="`airplane_${index}`"
          cols="12"
          md="4"
          sm="6"
        >
          <airplane-card :airplane="airplane" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AirplaneCard from "../components/AirplaneCard";
export default {
  components: {
    AirplaneCard,
  },
  data() {
    return {
      airplanes: [
        {
          id: "a321-neo",
          name: "Airbus A321neo",
          description:
            "空中巴士A320neo系列（英語：Airbus A320neo family）是目前由歐洲空中巴士集團所發展中的A320ceo系列機種的改進版本。",
          img: require("../assets/img/A321neo.jpg"),
          date: "2021/11/05",
          where: "TPE-NRT",
        },
        {
          id: "a350-900",
          name: "Airbus A350-900",
          description:
            "A350-900客機擁有飛行更舒適、更安靜且更低油耗的優點，可提供令您耳目一新的飛行感受。",
          img: require("../assets/img/A350-900.jpg"),
          date: "2021/12/05",
          where: "TPE-NRT",
        },
        {
          id: "a321-neo",
          name: "Airbus A321neo",
          description:
            "空中巴士A320neo系列（英語：Airbus A320neo family）是目前由歐洲空中巴士集團所發展中的A320ceo系列機種的改進版本。",
          img: require("../assets/img/A321neo.jpg"),
          date: "2021/12/05",
          where: "NRT-TPE",
        },
        {
          id: "a350-1000",
          name: "Airbus A350-1000",
          description:
            "空中巴士A350 XWB（Airbus A350 XWB），是歐洲飛機製造商空中巴士所研發的長程雙引擎廣體客機系列。",
          img: require("../assets/img/A350-1000.jpg"),
          date: "2021/12/06",
          where: "MFM-TPE",
        },
        {
          id: "a350-1000",
          name: "Airbus A350-1000",
          description:
            "空中巴士A350 XWB（Airbus A350 XWB），是歐洲飛機製造商空中巴士所研發的長程雙引擎廣體客機系列。",
          img: require("../assets/img/A350-1000.jpg"),
          date: "2021/12/06",
          where: "TPE-MFM",
        },
        {
          id: "a350-900",
          name: "Airbus A350-900",
          description:
            "A350-900客機擁有飛行更舒適、更安靜且更低油耗的優點，可提供令您耳目一新的飛行感受。",
          img: require("../assets/img/A350-900.jpg"),
          date: "2021/12/07",
          where: "TPE-MFM",
        },
        {
          id: "a350-1000",
          name: "Airbus A350-1000",
          description:
            "空中巴士A350 XWB（Airbus A350 XWB），是歐洲飛機製造商空中巴士所研發的長程雙引擎廣體客機系列。",
          img: require("../assets/img/A350-1000.jpg"),
          date: "2021/12/07",
          where: "MFM-TPE",
        },
        {
          id: "a350-900",
          name: "Airbus A350-900",
          description:
            "A350-900客機擁有飛行更舒適、更安靜且更低油耗的優點，可提供令您耳目一新的飛行感受。",
          img: require("../assets/img/A350-900.jpg"),
          date: "2021/12/08",
          where: "NRT-MFM",
        },
        {
          id: "a350-1000",
          name: "Airbus A350-1000",
          description:
            "空中巴士A350 XWB（Airbus A350 XWB），是歐洲飛機製造商空中巴士所研發的長程雙引擎廣體客機系列。",
          img: require("../assets/img/A350-1000.jpg"),
          date: "2021/12/09",
          where: "TPE-NRT",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>