<template>
  <v-layout row>
    <v-flex xs12 sm12 >
      <v-card>
        <v-toolbar color="teal" dark>
          <v-toolbar-title>公文列表</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>check_circle</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-tile
              :key="item.title"
              avatar
              ripple
              @click="toggle(index)"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon
                  v-if="selected.indexOf(index) < 0"
                  color="grey lighten-1"
                >star_border</v-icon>
                <v-icon
                  v-else
                  color="yellow darken-2"
                >star</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        selected: [2],
        items: [
          { action: '15 分钟', headline: '紧急任务', title: '关于...的讨论', subtitle: '为了更好的完成...，做好.........工作，提出以下要求:1....2....3....' },
          { action: '2 小时', headline: '普通任务', title: '关于...的任务', subtitle: '为了更好的服务新旧动能转换重大课题，做好我局新旧动能转换重大课题的参与，提出以下具体要求：。。。' },
          { action: '6 小时', headline: '外部任务', title: '皂化角小区改造的可行性分析', subtitle: '该小区是1984年建立的，当时的实际情况是为了安置部分专业知识青年为我区服务，如今...' },
          { action: '12 小时', headline: '上级任务', title: '渤海湾海底隧道', subtitle: '这....' },
          { action: '18 小时', headline: '可选任务', title: '无线专网应用建立', subtitle: '测试无线专网运行效果' }
        ]
      }
    },

    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    }
  }
</script>