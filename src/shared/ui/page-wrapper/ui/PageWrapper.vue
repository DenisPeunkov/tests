<template>
  <div class="page">
    <div class="page__title">
      <h1>{{ $props.title }}</h1>
    </div>
    <slot />
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  }
})
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>