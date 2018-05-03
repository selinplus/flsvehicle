<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="true"
    class="elevation-1"
  >
    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.username }}</td>
      <td class="text-xs-right">{{ props.item.deptName }}</td>
      <td class="text-xs-right">{{ props.item.position }}</td>
      <td class="text-xs-right">{{ props.item.level }}</td>
      <td class="text-xs-right"><v-icon>{{ props.item.avator }}</v-icon></td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: '用户信息',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: '姓名', value: 'username' },
          { text: '部门', value: 'deptName' },
          { text: '职位', value: 'position' },
          { text: '级别', value: 'level' },
          { text: '电话', value: 'mobile' }
        ],
        items: [
          {
            value: false,
            username: '张宇',
            deptName: '省厅办公室',
            position: '主任',
            level: '正处级',
            mobile: '13000300000',
            avator: 'fas fa-male'
          },
          {
            value: false,
            username: '张宇',
            deptName: '省厅办公室',
            position: '主任',
            level: '正处级',
            mobile: '13000300000',
            avator: 'fas fa-male'
          },
          {
            value: false,
            username: '张宇',
            deptName: '省厅办公室',
            position: '主任',
            level: '正处级',
            mobile: '13000300000',
            avator: 'fas fa-male'
          },
          {
            value: false,
            username: '周厚敏',
            deptName: '财务处',
            position: '处长',
            level: '正处级',
            mobile: '13000800000',
            avator: 'fas fa-female'
          },
          {
            value: false,
            username: '码耘',
            deptName: '办公室',
            position: '副主任',
            level: '副处级',
            mobile: '13001300000',
            avator: 'fas fa-female'
          },
          {
            value: false,
            username: '丁石三',
            deptName: '规划处',
            position: '处长',
            level: '正处级',
            mobile: '13001000000',
            avator: 'fas fa-male'
          },
          {
            value: false,
            username: '孙甜',
            deptName: '人事科',
            position: '科员',
            level: '科员',
            mobile: '13000600000',
            avator: 'fas fa-female'
          },
          {
            value: false,
            username: '汪峰',
            deptName: '信息中心',
            position: '科长',
            level: '正科级',
            mobile: '13000400000',
            avator: 'fas fa-male'
          },
          {
            value: false,
            username: '刘翔',
            deptName: '省厅计划处',
            position: '副主任',
            level: '副处级',
            mobile: '13000500000',
            avator: 'fas fa-male'
          }
        ]
      }
    }
  }
</script>