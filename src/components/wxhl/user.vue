<template>
  <v-container column justify-space-between align-content-space-between>
    <v-data-table :headers="headers" :items="items" :loading="true" class="elevation-4"
      :rows-per-page-item="perPageItem"
      rows-per-page-text = "每页行数:"
      app
    >
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right"><v-icon>{{ props.item.avator }}</v-icon></td>
        <td class="text-xs-right">{{ props.item.deptName }}</td>
        <td class="text-xs-right">{{ props.item.position }}</td>
        <td class="text-xs-right">{{ props.item.level }}</td>
        <td class="text-xs-right">{{ props.item.mobile }}</td>
      </template>
    </v-data-table>
     <v-dialog v-model="dialog" width="800px">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-list two-line>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">电话</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>130-0000-0000</v-list-tile-title>
                  <v-list-tile-sub-title>移动电话</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>chat</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>(0535) 555-6789</v-list-tile-title>
                  <v-list-tile-sub-title>办公</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>chat</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider inset></v-divider>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">mail</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                  <v-list-tile-sub-title>私人</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
                  <v-list-tile-sub-title>工作</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset></v-divider>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">location_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>环山路88号</v-list-tile-title>
                  <v-list-tile-sub-title>山东烟台 芝罘区</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
             <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat @click="dialog = false">关闭</v-btn>
              </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        perPageItem: [5, 10, 25, { 'text': '所有', 'value': -1 }],
        headers: [
          {
            text: '姓名',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: '性别', value: 'avator' },
          { text: '部门', value: 'deptName' },
          { text: '职位', value: 'position' },
          { text: '级别', value: 'level' },
          { text: '电话', value: 'mobile' }
        ],
        items: [
          {
            value: false,
            name: '李晓东',
            deptName: '办公室',
            position: '主任',
            level: '正处级',
            mobile: '13000300000',
            avator: 'fa-male'
          },
          {
            value: false,
            name: '钱歉意',
            deptName: '办公室',
            position: '主任',
            level: '正处级',
            mobile: '13000300000',
            avator: 'fa-male'
          },
          {
            value: false,
            name: '吴宇',
            deptName: '办公室',
            position: '主任',
            level: '正处级',
            mobile: '13000300000',
            avator: 'fa-male'
          },
          {
            value: false,
            name: '周厚敏',
            deptName: '财务处',
            position: '处长',
            level: '正处级',
            mobile: '13000800000',
            avator: 'fa-female'
          },
          {
            value: false,
            name: '码耘',
            deptName: '办公室',
            position: '副主任',
            level: '副处级',
            mobile: '13001300000',
            avator: 'fa-female'
          },
          {
            value: false,
            name: '丁石三',
            deptName: '规划处',
            position: '处长',
            level: '正处级',
            mobile: '13001000000',
            avator: 'fa-male'
          },
          {
            value: false,
            name: '孙甜',
            deptName: '人事处',
            position: '科员',
            level: '科员',
            mobile: '13000600000',
            avator: 'fa-female'
          },
          {
            value: false,
            name: '汪峰',
            deptName: '信息中心',
            position: '科长',
            level: '正科级',
            mobile: '13000400000',
            avator: 'fa-male'
          },
          {
            value: false,
            name: '刘翔',
            deptName: '计划处',
            position: '副主任',
            level: '副处级',
            mobile: '13000500000',
            avator: 'fa-male'
          }
        ]
      }
    }
  }
</script>
<style>
.media{
  height: 100%;
  margin: 0;
}
</style>
