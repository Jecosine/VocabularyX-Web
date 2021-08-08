<template>
  <transition name="sidebar">
    <div id="sidebar-container" v-if="isCollapse">
      <div class="menu-item" v-for="(menuItem, i) in menuGroup" :key="`menu-${i}`">
        {{ menuItem.name }}
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { menuGroup } from '@/schema/Menu'
export default defineComponent({
  name: 'SideBar',
  props: {
    isCollapse: {
      required: true,
      type: Boolean
    }
  },
  setup (props) {
    return {
      menuGroup
    }
  }
})
</script>

<style lang="scss" scoped>
$--sidebar-width: 20rem;
@keyframes slide-in {
  from {
    transform: translateX(-($--sidebar-width));
  }
  to {
    transform: translateX(0);
  }
}
.sidebar-enter,
.sidebar-leave-to {
  left: -$--sidebar-width;
}
.sidebar-enter-to,
.sidebar-leave {
  left: 0;
}

.sidebar-enter-active {
  animation: slide-in .3s ease;
}
.sidebar-leave-active {
  animation: slide-in .3s reverse;
}
</style>
