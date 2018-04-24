<template>
    <v-app>
        <v-container fluid>
            <v-toolbar app>
                <v-btn icon @click.stop="clipped = !clipped">
                    <v-icon>web</v-icon>
                </v-btn>
                <v-toolbar-title v-text="title" color="primary"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                    <v-icon>person</v-icon>
                </v-btn>
            </v-toolbar>
            <v-content>
                <router-view/>
            </v-content>
            <v-footer fixed app>
                <v-layout row child-flex nowrap>
                    <div>
                        <v-toolbar flex dark color="primary">
                            <v-menu light top offset-y>
                                <v-btn color="primary" dark slot="activator">八角年审</v-btn>
                                <v-list>
                                    <v-list-tile v-for="item in menu1" :key="item.title" @click="menuNavigator(item.title)">
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                            <v-menu top offset-y>
                                <v-btn color="primary" dark slot="activator">业务办理</v-btn>
                                <v-list>
                                    <v-list-tile v-for="item in menu2" :key="item.title" @click="menuNavigator(item.title)">
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                            <v-menu top offset-y>
                                <v-btn color="primary" dark slot="activator">便民服务</v-btn>
                                <v-list>
                                    <v-list-tile v-for="item in menu3" :key="item.title" @click="menuNavigator(item.title)">
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                        </v-toolbar>
                    </div>
                    <div style="flex-basis: 20%">
                    <v-toolbar dark>
                        <v-btn icon>
                        <v-icon>reply</v-icon>
                        </v-btn>
                    </v-toolbar>
                    </div>
                </v-layout>
                
            </v-footer>
        </v-container>
    </v-app>
</template>
<script>
export default {
  data () {
    return {
      clipped: null,
      title: '福莱山车辆检验有限公司',
      rightDrawer: null,
      menu1: [{title: '关于我们'}, {title: '服务特色'}, {title: '客户之声'}, {title: '位置导航'}],
      menu2: [{title: '登记注册'}, {title: '年审预约'}, {title: '违章查询'}],
      menu3: [{title: '行业资讯'}, {title: '检车流程'}]
    }
  },
  methods: {
    menuNavigator (title) {
      console.log(title)
    }
  }
}
</script>