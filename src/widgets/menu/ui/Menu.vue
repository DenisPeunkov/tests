<template>
  <nav class="menu">
    <a
      v-for="item in menuItems"
      :key="item.route"
      :class="item.route === route.name ? 'menu__item menu__item_active' : 'menu__item'"
      @click.prevent="clickHandler(item.route)"
      href="#"
      role="menuitem"
      >{{ item.title }}</a
    >
  </nav>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/app/router'
import { menuItems } from '../model/menu-items'

const route = useRoute()
const clickHandler = (routeName: string) => {
  router.push({ name: routeName })
}
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: row;
  gap: 2px;
  &__item {
    cursor: pointer;
    padding: 5px 10px;
    text-decoration: none;
    color: var(--cs-main-gray);
    &_active {
      color: var(--cs-menu-active);
      border-bottom: 2px solid #409eff;
    }
  }
  &__item:hover {
    background-color: var(--cs-menu-hover);
    transition: background-color 0.2s ease-in-out;
  }
}
</style>
