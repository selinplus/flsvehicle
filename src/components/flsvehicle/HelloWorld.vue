<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-jumbotron
              :gradient="gradient"
              dark
            >
          <v-container fill-height>
            <v-layout align-center>
                <v-flex text-xs-center>
                  <h3 class="display-3">关于我们</h3>
                  <span class="subheading">我们是车辆检测方面的专家，我们的理念是方便、安全、和谐.</span>
                  <v-divider class="my-3"></v-divider>
                  <div class="title mb-3">最新的资讯</div>
                </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
        <blockquote>
          &#8220;原型演示版&#8221;
          <footer>
            <small>
              <em>&mdash;selinplus</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      gradient: 'to top left, rgba(12,181,201, .9), rgba(25,32,72, .2)'
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
