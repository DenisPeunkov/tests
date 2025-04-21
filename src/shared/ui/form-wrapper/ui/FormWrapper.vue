<template>
    <div class="form">
      <h3 class="form__title">{{ props.title }}</h3>
      <div class="form__content">
        <slot />
    </div>
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
.form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #424242;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>