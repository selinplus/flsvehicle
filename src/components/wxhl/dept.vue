<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card>
        <v-toolbar color="teal" dark>
          <v-toolbar-title>部门管理</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-group
            v-for="item in items"
            v-model="item.active"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="subdept">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            action: 'fa-folder',
            title: 'A部门',
            items: [
              {
                title: 'A-部门', action: 'fa-folder'
              }
            ]
          },
          {
            action: 'fa-folder',
            title: 'B部门',
            active: true,
            items: [
              {
                title: 'B-1部门', action: 'fa-file'
              },
              {
                title: 'B-2部门', action: 'fa-file'
              },
              {
                title: 'B-3部门', action: 'fa-file'
              }
            ]
          },
          {
            action: 'fa-folder',
            title: 'C部门',
            items: [
              {
                title: 'C-1部门', action: 'fa-file'
              },
              {
                title: 'C-2部门', action: 'fa-file'
              },
              {
                title: 'C-3部门', action: 'fa-file'
              }
            ]
          },
          {
            action: 'fa-folder',
            title: 'D部门',
            items: [
              {
                title: 'D-1部门', action: 'fa-file'
              },
              {
                title: 'D-2部门', action: 'fa-file'
              }
            ]
          },
          {
            action: 'fa-folder',
            title: 'E部门',
            items: [
              {
                title: 'E-1部门', action: 'fa-file'
              },
              {
                title: 'E-2部门', action: 'fa-file'
              }
            ]
          }
        ]
      }
    },
    methods: {
      subdept () {
        console.log('32ed12')
      }
    }
  }
</script>