<template>
  <el-container>
    <el-header>
      <navbar @collapse="triggerCollapse"></navbar>
    </el-header>
    <el-main></el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',
  components: {
    navbar: Navigation
  },
  setup () {
    const triggerCollapse = function (e: boolean) {
      console.log('triggerred', e)
    }
    return {
      triggerCollapse
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/base.scss";
</style>
