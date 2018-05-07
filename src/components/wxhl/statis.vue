<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card>
        <v-toolbar color="teal" dark>
          <v-toolbar-title>个人日程统计</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-select
          :items="states"
          v-model="e1"
          label="Select"
          single-line
          auto
          prepend-icon="map"
          hide-details
          ></v-select>
        </v-toolbar>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        e1: null,
        states: [
          '月度',
          '季度',
          '半年',
          '年度'
        ]
      }
    }
  }
</script>