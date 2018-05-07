<template>
  <v-container>
    <v-stepper v-model="e1">
        <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">基础</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">群及人员</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 3" step="3">提醒</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4">确认</v-stepper-step>      
        </v-stepper-header>
        <v-stepper-items>
        <v-stepper-content step="1">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click.native="e1 = 2">下一步</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
            <v-card color="grey lighten-2" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click.native="e1 = 3">下一步</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
            <v-card color="grey lighten-3" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click.native="e1 = 4">下一步</v-btn>
        </v-stepper-content>
                <v-stepper-content step="4">
            <v-card color="grey lighten-4" class="mb-5" height="200px"></v-card>
            <v-btn color="primary" @click.native="e1 = 5">下一步</v-btn>
        </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        e1: 0
      }
    }
  }
</script>