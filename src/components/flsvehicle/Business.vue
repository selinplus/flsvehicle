<template>
  <v-container fluid>
    <v-slide-x-transition mode="out-in">
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
    </v-slide-x-transition>
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
