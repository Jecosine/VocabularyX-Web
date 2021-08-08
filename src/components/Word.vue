<!--
 * @Date: 2021-07-28 17:41:12
 * @LastEditors: Jecosine
 * @LastEditTime: 2021-07-28 17:41:13
-->
<template>
  <div class="word-container">
    Word component
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'word',
  props: {
    wordId: {
      required: true,
      type: String
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>

</style>
