<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="4" v-for="user in users" :key="user['UID']">
          <v-card class="pa-5" min-height="30px">
            <h5>{{ user["name"] }}</h5>
            <small>{{ user["UID"] }}</small>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-alert v-if="Object.keys(result).length">
            [{{ result["returnCode"] }}] : {{ result["returnMessage"] }}
          </v-alert>
        </v-col>
        <v-col cols="12">
          <v-btn @click="doAPI()" block color="primary">API Connect</v-btn>
        </v-col>
        <v-col cols="4"
          ><v-btn @click="doAPI('create')" block color="primary"
            >新增</v-btn
          ></v-col
        >
        <v-col cols="4"
          ><v-btn @click="doAPI('update')" block color="primary"
            >修改</v-btn
          ></v-col
        >
        <v-col cols="4"
          ><v-btn @click="doAPI('delete')" block color="primary"
            >刪除</v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import userApi from "../service/User";
export default {
  async mounted() {
    await this.doAPI();
  },
  data() {
    return {
      response: {},
      users: [],
      result: {},
    };
  },
  methods: {
    async doAPI(method = "") {
      if (method) {
        if (method === "create") {
          //新增使用者
          const request = {
            name: "Alex",
            phone: "0987654321",
            gender: "M",
            email: "abc@gmail.com",
            zip: 123,
            address: "新北市瑞芳區",
          };
          await userApi.createUsers(request);
          await this.doAPI();
        } else if (method === "update") {
          const request = {
            UID: "2021121914365837",
            name: "Amy",
            phone: "0987654321",
            gender: "W",
            email: "abc@gmail.com",
            zip: 234,
            address: "新北市新店區",
          };
          await userApi.updateUsers(request);
          await this.doAPI();
          //修改使用者
        } else if (method === "delete") {
          const request = {
            UID: "2021121914365837",
          };
          await userApi.deleteUsers(request);
          await this.doAPI();
          //刪除使用者
        } else {
          console.log("參數錯誤");
        }
      } else {
        this.response = (await userApi.getUsers()).data;
        const { returnCode, returnMessage } = this.response;
        const { user } = this.response["data"] || {};
        this.users = user || [];
        this.result = Object.assign({}, { returnCode, returnMessage });
      }
    },
  },
};
</script>

<style scoped>
</style>