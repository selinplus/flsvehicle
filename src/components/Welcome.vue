<template>
<v-container>
  <v-layout column align-center>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          src="/static/qysm.png"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">烟台福莱山机动车检测有限公司</div>
            <span class="grey--text">165，432次检测</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>合作</v-btn>
          <v-btn flat color="purple">探索</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            烟台福莱山机动车检测有限公司是一家集机动车检测、尾气检测为一体的现代化企业，拥有良好的合作团队.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>      
    </v-flex>
  </v-layout>
  <v-layout column align-center>
    <v-container>
      <router-view/>
    </v-container>
    <blockquote>
      &#8220;原型演示版&#8221;
      <footer>
        <small>
          <em>&mdash;selinplus</em>
        </small>
      </footer>
    </blockquote>
  </v-layout>
</v-container>
</template>
<script>
export default {
  data () {
    return {
      show: false,
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
