<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="drawer"
      color="indigo"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">WELCOME</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']" :append-icon="item.model ? item.admin : item['icon-alt']">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile  v-for="(child, i) in item.children" :key="i" @click="menuNavigator(child.url,child.text)">
              <v-list-tile-action v-if="child.icon">
                <v-icon color="indigo">{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="menuNavigator(item.url,item.text)" :key="item.text" :append-icon="item.model ? item.admin : item['icon-alt']">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.lgAndUp" fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">无线专网</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="搜索..."
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="/static/logo.svg"
            alt="无线专网"
          >
        </v-avatar>
      </v-btn>
      <v-btn icon large @click="logout">
        <v-icon>settings_power</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout column justify-space-between align-content-space-between>
          <transition name="slide" mode="out-in">
            <router-view class="child-view"></router-view>
          </transition>
          <v-card  v-if="init">
            <v-card-media class="black--text" height="300px" src="/static/qysm.png">
            </v-card-media>
            <v-card-title>
              <div>
                <span class="headline indigo--text">日程管理&公文流转</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">高效</v-btn>
              <v-btn flat color="orange">规范</v-btn>
              <v-btn flat color="orange">科学</v-btn>
              <v-btn flat color="orange">效率</v-btn>
            </v-card-actions>
          </v-card>
          <!-- <v-container fluid></v-container> -->
          <v-layout justify-center align-content-space-between>
            <blockquote>
              &#8220;原型演示版&#8221;
              <footer>
                <small>
                  <em>&mdash;selinplus</em>
                </small>
              </footer>
            </blockquote>
          </v-layout>
        </v-layout>
      </v-container>
    </v-content>
    <v-btn fab bottom right color="pink" dark fixed  @click.stop="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="indigo lighten-4 py-4 title"
        >
          快速增加
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="用户名"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="单位"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="姓名"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="000 0000 - 0000"
                mask="移动电话"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="备注"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">取消</v-btn>
          <v-btn flat @click="dialog = false">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      init: true,
      drawer: null,
      items: [
        { icon: 'contacts', text: '用户管理', url: '/home/user', admin: 'fa-user-shield' },
        { icon: 'business', text: '部门管理', url: '/home/dept', admin: 'fa-user-shield' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: '日程管理',
          model: true,
          children: [{
            icon: 'add', text: '发布任务', url: '/home/task' },
          {icon: 'chat_bubble', text: '日程反馈', url: '/home/callback'},
          {icon: 'perm_data_setting', text: '个人统计', url: '/home/statis'
          }]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: '公文流转',
          model: false,
          children: [
            // { icon: 'group', text: '群信息', url: '/home/task' },
            // { icon: 'queue_play_next', text: '建新群', url: '/home/task' },
            // { icon: 'group_add', text: '群成员', url: '/home/task' },
            { icon: 'note_add', text: '发起公文', url: '/home/file' },
            { icon: 'note', text: '公文反馈', url: '/home/fileback' }
          ]
        },
        {icon: 'settings', text: '设置'}
      ]
    }),
    methods: {
      logout () {
        this.$router.push('/')
      },
      menuNavigator (url, title) {
        this.init = false
        this.$router.push(url)
      }
    },
    props: {
      source: String
    }
  }
</script>
<style scoped>

.child-view {
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>