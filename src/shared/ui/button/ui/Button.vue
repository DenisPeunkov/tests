<template>
  <button class="button" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => ({
  'button_type_primary': props.type === 'primary',
  'button_type_info': props.type === 'info',
}))
</script>


<style lang="scss" scoped>
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  &_type{
    &_primary {
      background-color: #409eff;
      color: #fff;
    }
    &_info {
      background-color: #fff;
      color: #424242;
      border: 1px solid #ccc;
    }
  }
}
</style>
