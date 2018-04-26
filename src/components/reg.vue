<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-form v-model="valid">
          <v-text-field
            label="名称"
            v-model="name"
            required
          ></v-text-field>
          <v-text-field
            label="密码"
            v-model="password"
            required
            type="password"
          ></v-text-field>
          <v-text-field
            label="确认密码"
            v-model="passwordConfirm"
            required
            type="password"
          ></v-text-field>
          <v-text-field
            label="电话"
            v-model="phone"
            required
          ></v-text-field>
          <v-text-field
            label="车辆照片"
            v-model="photo"
            required
            type="file"
          ></v-text-field>
        </v-form>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      valid: null,
      name: null,
      password: null,
      passwordConfirm: null,
      photo: null,
      phone: null,
      gradient: 'to top left, rgba(12,81,01, .9), rgba(25,32,72, .2)'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
