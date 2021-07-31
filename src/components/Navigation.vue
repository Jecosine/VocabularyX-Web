<template>
  <div id="navigation-container">
    <div id="navigation-wrapper">
      <div id="nav-collapse-icon">
        <el-button
          class="larger"
          type="text"
          size="medium"
          @click="triggerCollapse"
          :icon="isCollapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        ></el-button>
      </div>
      <div id="nav-logo-container"></div>
      <div id="nav-app-title">VocabularyX</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'navigation',
  setup (props, { emit }) {
    const isCollapsed = ref(false)
    const triggerCollapse = () => {
      isCollapsed.value = !isCollapsed.value
      emit('collapse', isCollapsed.value)
    }
    return {
      isCollapsed,
      triggerCollapse
    }
  }
})
</script>

<style scoped></style>
