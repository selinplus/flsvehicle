<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-flex  align-center>
        <v-jumbotron
              :gradient="gradient"
              dark
            >
          <v-container fill-height>
            <v-layout align-center>
                <v-flex text-xs-center>
                  <h3 class="display-3">特色服务</h3>
                  <span class="subheading">1、。。。。。。。</span>
                  <span class="subheading">2、。。。。。。。</span>
                  <span class="subheading">3、。。。。。。。</span>
                  <v-divider class="my-3"></v-divider>
                  <div class="title mb-3">最新的资讯</div>
                </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
      </v-flex>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
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
