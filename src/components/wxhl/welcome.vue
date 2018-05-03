<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-alert type="success" dismissible v-model="alert" transition="scale-transition">
                登陆失败，请检查用户名密码.
            </v-alert>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>无线互联</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    :href="source"
                    target="_blank"
                    slot="activator"
                  >
                    <v-icon large>fas fa-video-slash</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip>                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="username" name="login" label="用户名" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" v-model ="password" name="password" label="密码" id="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      username: null,
      alert: null,
      password: null
    }),
    methods: {
      login () {
        if (!this.username === this.password === 'admiN') {
          this.alert = true
        } else {
          this.$router.push('/home')
        }
      }
    },
    props: {
      source: String
    }
  }
</script>