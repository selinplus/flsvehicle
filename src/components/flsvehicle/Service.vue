<template>
  <v-container fluid>
    <v-slide-x-transition mode="out-in">
      <v-flex justify-center>
        <v-layout row align-center>
          <v-flex text-xs-center>
            <v-stepper v-model="e1">
                <v-stepper-header>
                  <v-stepper-step step="1" :complete="e1 > 1">第一步</v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step step="2" :complete="e1 > 2">第二步</v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step step="3">第三步</v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card color="cyan darken-2" class="mb-5" height="300px">
                      <v-flex xs12>
                      <v-card color="cyan darken-2" class="white--text">
                        <v-container fluid grid-list-lg>
                          <v-layout column>
                            <v-flex xs12>
                              <div>
                                <div class="headline">原则</div>
                                <div>勤奋、高效</div>
                              </div>
                            </v-flex>
                            <v-flex xs12>
                              <v-card-media
                                src="/static/1452357771.jpg"
                                height="125px"
                                contain
                              ></v-card-media>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card>
                    </v-flex>
                  </v-card>
                  <v-btn color="primary" @click.native="e1 = 2">下一步</v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-card color="amber darken-2" class="mb-5" height="300px">
                    <v-flex xs12>
                      <v-card color="amber darken-2" class="white--text">
                        <v-container fluid grid-list-lg>
                          <v-layout column>
                            <v-flex xs12>
                              <div>
                                <div class="headline">态度</div>
                                <div>专业、科学</div>
                              </div>
                            </v-flex>
                            <v-flex xs12>
                              <v-card-media
                                src="/static/20170626161841_950.jpg"
                                height="125px"
                                contain
                              ></v-card-media>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card>
                    </v-flex>
                  </v-card>
                  <v-btn color="primary" @click.native="e1 = 3">下一步</v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <v-card color="brown darken-2" class="mb-5" height="300px">
                    <v-flex xs12>
                      <v-card color="brown darken-2" class="white--text">
                        <v-container fluid grid-list-lg>
                          <v-layout column>
                            <v-flex xs12>
                              <div>
                                <div class="headline">目标</div>
                                <div>共赢、未来</div>
                              </div>
                            </v-flex>
                            <v-flex xs12>
                              <v-card-media
                                src="/static/blob8568978.png"
                                height="125px"
                                contain
                              ></v-card-media>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card>
                    </v-flex>
                  </v-card>
                  <v-btn color="primary" @click.native="e1 = 1">下一步</v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-flex>
        </v-layout>
        <v-flex align-center>
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
        </v-flex>
      </v-flex>
    </v-slide-x-transition>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      e1: 1,
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
