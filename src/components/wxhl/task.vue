<template>
  <v-container justify-space-between>
    <v-stepper v-model="e6" vertical>
        <v-stepper-step step="1" :complete="e6 > 1">
        启动日程
        <small>填写基础信息</small>
        </v-stepper-step>
        <v-stepper-content step="1">
        <v-card color="light-green lighten-4" class="mb-5" >
            <v-card-text>
                <v-container fluid>
                    <v-layout row justify-center>
                        <div class="headline indigo--text">任务基本信息 </div>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
        <v-btn color="primary" @click.native="e6 = 2">下一步</v-btn>
        </v-stepper-content>
        <v-stepper-step step="2" :complete="e6 > 2">
            选择部门或人员
            <small>可多选</small>
        </v-stepper-step>
        <v-stepper-content step="2">
            <v-card color="light-green lighten-3" class="mb-5" height="200px">
                <v-card-text>
                    <v-container fluid>
                        <v-layout row justify-center>
                            <div class="headline indigo--text">部门及人员列表</div>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
            <v-btn color="primary" @click.native="e6 = 3">下一步</v-btn>
        </v-stepper-content>
        <v-stepper-step step="3" :complete="e6 > 3">设置提醒方式</v-stepper-step>
        <v-stepper-content step="3">
            <v-card color="light-green lighten-2" class="mb-5" height="200px">
                <v-card-text>
                    <v-container fluid>
                        <v-layout row justify-center>
                            <div class="headline indigo--text">多选组件</div>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
            <v-btn color="primary" @click.native="e6 = 4">下一步</v-btn>
        </v-stepper-content>
        <v-stepper-step step="4">重新查看任务细节</v-stepper-step>
        <v-stepper-content step="4">
            <v-card color="light-green lighten-1" class="mb-5" height="200px">
                <v-card-text>
                    <v-container fluid>
                        <v-layout row justify-center>
                            <div class="headline indigo--text">汇总以上信息 </div>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
            <v-btn color="primary" @click.native="e6 = 1">提  交</v-btn>
        </v-stepper-content>
    </v-stepper>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        e6: 1
      }
    }
  }
</script>