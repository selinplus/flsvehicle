<template>
    <v-app>
        <v-container fluid>
            <v-toolbar app color="indigo" dense flat>
                <v-toolbar-title v-text="title" class="white--text"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-avatar class="green" size="32">
                    <v-icon dark>account_circle</v-icon>
                </v-avatar>
                <v-btn dark icon>
                    <v-badge overlap v-model="message">
                        <span slot="badge">{{message}}</span>
                        <v-avatar
                            class="purple red--after" size="32"
                        >
                            <v-icon dark>notifications</v-icon>
                        </v-avatar>
                    </v-badge>
                </v-btn>
            </v-toolbar>
            <v-progress-linear indeterminate></v-progress-linear>
            <v-content>
                <router-view/>
            </v-content>
            <v-footer fixed app>
              <v-bottom-nav
                absolute
                :value="true"
                :active.sync="e2"
                :color="color"
              >
                  <v-menu top offset-y>
                    <v-btn  dark slot="activator">
                        <span>八角年审</span>
                        <v-icon>home</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="item in menu1" :key="item.title" @click="menuNavigator(item.to)">
                            <v-list-tile-action>
                              <v-icon v-if="item.icon" color="indigo">{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                    </v-menu>
                    <v-menu top offset-y>
                    <v-btn color="primary" dark slot="activator">
                        <span>业务办理</span>
                        <v-icon>next_week</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="item in menu2" :key="item.title" @click="menuNavigator(item.to)">
                            <v-list-tile-action>
                              <v-icon v-if="item.icon" color="indigo">{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                    </v-menu>
                    <v-menu top offset-y>
                    <v-btn color="primary" dark slot="activator">
                        <span>便民服务</span>
                        <v-icon>local_library</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="item in menu3" :key="item.title" @click="menuNavigator(item.to)">
                            <v-list-tile-action>
                              <v-icon v-if="item.icon" color="indigo">{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
              </v-bottom-nav>
            </v-footer>
        </v-container>
    </v-app>
</template>
<script>
export default {
  data () {
    return {
      message: 1,
      clipped: null,
      title: '福莱山车辆检验',
      rightDrawer: null,
      menu1: [{title: '关于我们', icon: 'invert_colors', to: '/company/about'}, {title: '服务特色', icon: 'redeem', to: '/company/special'}, {title: '客户之声', icon: 'hearing', to: '/company/voice'}, {title: '位置导航', icon: 'navigation', to: '/company/navi'}],
      menu2: [{title: '登记注册', icon: 'keyboard', to: '/business/reg'}, {title: '年审预约', icon: 'class', to: '/business/prediction'}, {title: '违章查询', icon: 'subtitles', to: '/business/illegal'}],
      menu3: [{title: '行业资讯', icon: 'info', to: '/service/info'}, {title: '检车流程', icon: 'play_for_work', to: '/service/workflow'}],
      e2: 3
    }
  },
  computed: {
    color () {
      switch (this.e2) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
      }
    }
  },
  methods: {
    menuNavigator (to) {
      console.log(to)
      this.$router.push(to)
    }
  }
}
</script>