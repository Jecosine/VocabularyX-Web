<template>
  <div class="wli-container" @dblclick="editItem">
    <el-autocomplete
      class="inline-input"
      v-model="currentValue"
      :fetch-suggestions="querySearch"
      placeholder=""
      :trigger-on-focus="false"
      v-if="editMode"
      @keydown.enter="confirmItem"
      @keydown.esc="cancelItem"
    ></el-autocomplete>
    <span class="item-content" v-else>{{ currentValue }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'WordListItem',
  setup (props, { emit }) {
    const editMode = ref(false)
    const currentValue = ref('')
    const oldValue = ref('')
    const editItem = function () {
      editMode.value = true
    }
    const cancelItem = function () {
      currentValue.value = oldValue.value
      editMode.value = false
      emit('cancel', currentValue)
    }
    const querySearch = function () {
      return [
        'abandon',
        'abandon'
      ]
    }
    const confirmItem = function () {
      oldValue.value = currentValue.value
      editMode.value = false
      emit('confirm', currentValue)
    }
    return {
      editMode,
      currentValue,
      oldValue,
      editItem,
      cancelItem,
      querySearch,
      confirmItem
    }
  }
})
</script>

<style lang="scss" scoped>
$--wlitem-height: 2rem;
.wli-container {
  position: relative;
  width: 100%;
  height: $--wlitem-height;
  .item-content {
    position: absolute;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    height: $--wlitem-height;
    line-height: $--wlitem-height;
  }
}

</style>
