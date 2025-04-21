<template>
  <label :for="props.name">{{ props.name }}</label>
  <select v-model="model" :id="props.name">
    <option v-if="props.placeholder" value="" disabled>{{ props.placeholder }}</option>
    <option v-for="option in props.options" :value="option.value" :key="option.value" >
      {{ option.label }}
    </option>
  </select>
</template>
<script setup>
const props = defineProps({
  name: {
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
