<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Menu } from '@/widgets/menu';
import { Divider } from '@/shared/ui/divider';
</script>

<template>
<div class="app">
  <Menu />
  <Divider />
  <div class="app__content">
  <RouterView />
  </div>
</div>
</template>

<style lang="scss" scoped>
.app {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 15px;
  &__content {
    margin-top: 20px;
    padding: 0 15px;
  }
}
</style>

