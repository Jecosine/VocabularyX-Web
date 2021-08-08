<template>
  <div id="newform-container">
    <el-form :model="newPlan" label-width="5rem">
      <el-form-item label="Name">
        <el-input v-model="newPlan.name"></el-input>
      </el-form-item>
      <el-form-item label="Plan Period">
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          range-separator="to"
          start-placeholder="Start Date"
          end-placeholder="End Date">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createPlan">Create Plan</el-button>
        <el-button type="plain" @click="cancelPlan">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Plan } from '@/models/Plan'
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup (props, { emit }) {
    const newPlan = reactive(new Plan())
    const dateRange = ref([new Date(), new Date()])
    const createPlan = function () {
      newPlan.startTime = dateRange.value[0]
      newPlan.endTime = dateRange.value[1]
      emit('create-plan', newPlan)
      console.log(newPlan)
    }
    const cancelPlan = function () {
      emit('cancel-plan')
    }
    return {
      newPlan,
      dateRange,
      createPlan,
      cancelPlan
    }
  }
})
</script>

<style scoped>

</style>
