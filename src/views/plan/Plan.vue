<template>
  <div>
    <div id="plan-title">{{currentPlan.name}}</div>
    <el-table :data="sections" stripe @row-click="openSection">
      <el-table-column v-if="enableSelection" type="selection" width="55"> </el-table-column>
      <el-table-column prop="index" label="Name" sortable></el-table-column>
      <el-table-column prop="duration" label="Duration" sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Plan } from '@/models/Plan'
import { ISection } from '@/models/Section'
import { sectionData } from '@/schema/PlanData'
import { defineComponent, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id as string
    const currentPlan = reactive(new Plan())
    currentPlan.id = id
    // get plan data
    currentPlan.name = `Plan ${id}`
    const sections = sectionData
    const openSection = function (row: ISection) {
      router.push({path: `/section/${row.id}`})
    }
    return {
      currentPlan,
      sections,
      openSection
    }
  }
})
</script>
<style lang="scss" scope>
#plan-title {
  margin: 1rem 0;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: bolder;
}
</style>
