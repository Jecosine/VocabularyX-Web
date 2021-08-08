<template>
  <el-container>
    <el-header>
      <sidebar :isCollapse="isCollapse"></sidebar>
      <navbar @collapse="triggerCollapse"></navbar>
    </el-header>
    <el-main id="main-container">
      <el-row>
        <el-col
          :xs="{ span: 24 }"
          :sm="{ span: 24 }"
          :md="{ span: 20, offset: 2 }"
          :lg="{ span: 16, offset: 4 }"
          :xl="{ span: 14, offset: 5 }"
        >
          <router-view />
        </el-col>
      </el-row>
    </el-main>
    <el-footer id="footer-container">
      Test footer
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue'
import SideBarVue from './components/SideBar.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    navbar: Navigation,
    sidebar: SideBarVue
  },
  setup () {
    const isCollapse = ref(false)
    const triggerCollapse = function (e: boolean) {
      console.log('triggerred', e)
      isCollapse.value = !isCollapse.value
    }
    return {
      isCollapse,
      triggerCollapse
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/base.scss";
</style>
