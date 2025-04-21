<template>
  <div class="field" :class="{ 'field_checkbox': props.isCheckbox }">
    <div class="field__label">
      <slot name="label"></slot>
    </div>
    <div class="field__content">
      <slot name="field"></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  isCheckbox: {
    type: Boolean,
    default: false,
  }
})
</script>
<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
  &__label {
    font-size: 16px;
    color: #424242;
  }
  &__content {
    padding: 0 5px;
  }
  &_checkbox {
    flex-direction: row;
    align-items: center;
  }
}
</style>