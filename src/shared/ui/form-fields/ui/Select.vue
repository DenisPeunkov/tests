<template>
  <FieldLayout>
    <template #label>
      <label :for="props.name">{{ props.label }}</label>
    </template>
    <template #field>
      <select class="select" v-model="model" :id="props.name">
        <option v-for="option in props.options" :value="option.value" :key="option.value" >
          {{ option.label }}
        </option>
      </select>
    </template>
  </FieldLayout>
</template>
<script setup>
import FieldLayout from './FieldLayout.vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
})
const model = defineModel()
</script>
<style lang="scss" scoped>
.select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>