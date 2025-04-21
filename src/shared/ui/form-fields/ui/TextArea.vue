<template>
  <FieldLayout>
    <template #label>
      <label :for="props.name">{{ props.name }}</label>
    </template>
    <template #field>
      <textarea class="textarea" v-model="model" :id="props.name" :name="props.name" :rows="props.rows" />
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
<style lang="scss" scoped>
.textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
}
</style>
