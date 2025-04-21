<template>  
  <FieldLayout :isCheckbox="props.inputType === 'checkbox'">
    <template #label>
      <label :for="props.name">{{ props.name }}</label>
    </template>
    <template #field>
      <input 
        class="input"
        :type="props.inputType" 
        v-model="model"      
        :id="props.name" 
        :placeholder="props.placeholder"
      />
    </template>
  </FieldLayout>
</template>
<script setup>
import FieldLayout from '../FieldLayout.vue';
  const props = defineProps({
    inputType: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  })

  const model = defineModel()

</script>
<style lang="scss" scoped>
.input {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
}
</style>
  
