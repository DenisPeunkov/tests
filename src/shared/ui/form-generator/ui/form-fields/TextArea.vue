<template>
  <label :for="props.name">{{ props.name }}</label>
  <textarea v-model="model" :id="props.name" :name="props.name" :rows="props.rows" :cols="props.cols">
  </textarea>
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
  rows: {
    type: Number,
    required: true,
  },
  cols: {
    type: Number,
    required: true,
  },
})
const model = defineModel()
</script>
