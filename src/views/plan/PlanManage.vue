<template>
  <div id="plan-manage-container">
    <div id="plan-toolbox">
      <el-button-group>
        <el-tooltip content="Multi-selection" placement="top">
          <el-button @click="enableSelection = !enableSelection" type="primary" icon="el-icon-finished"></el-button>
        </el-tooltip>

        <el-tooltip content="New Plan" placement="top">
          <el-button @click="startNewPlan" type="primary" icon="el-icon-document-add"> </el-button>
        </el-tooltip>

        <el-tooltip content="Delete" placement="top">
          <el-button type="danger" icon="el-icon-delete"> </el-button>
        </el-tooltip>
      </el-button-group>
    </div>
    <el-dialog title="New Plan" v-model="popupNewPlan">
      <new-plan @create-plan="submitPlan" @cancel-plan="cancelPlan"></new-plan>
    </el-dialog>
    <el-table :data="planData" stripe @row-click="openPlan">
      <el-table-column v-if="enableSelection" type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="Name" sortable></el-table-column>
      <el-table-column prop="startTime" label="Start Time" sortable>
        <template #default="scope">
          {{ dateFormatter(scope.row.startTime) }}
        </template>
      </el-table-column>
      <el-table-column prop="endTime" label="End Time" sortable>
        <template #default="scope">
          {{ dateFormatter(scope.row.endTime) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { planData } from '@/schema/PlanData'
import { dateFormatter } from '@/utils/index'
import { IPlan } from '@/models/Plan'
import { useRouter } from 'vue-router'
import NewPlanForm from '@/components/plan/NewPlanForm.vue'
export default defineComponent({
  components: {
    'new-plan': NewPlanForm
  },
  setup () {
    const router = useRouter()
    const enableSelection = ref(false)
    const popupNewPlan = ref(false)
    const openPlan = function (row: IPlan) {
      router.push({ path: `/plan/${row.id}` })
    }
    const submitPlan = function (newPlan: IPlan) {
      console.log('received', newPlan)
      popupNewPlan.value = false
    }
    const cancelPlan = function () {
      popupNewPlan.value = false
    }
    const startNewPlan = function () {
      popupNewPlan.value = true
    }
    return {
      enableSelection,
      planData,
      dateFormatter,
      openPlan,
      startNewPlan,
      cancelPlan,
      popupNewPlan,
      submitPlan
    }
  }
})
</script>

<style lang="scss" scoped></style>
