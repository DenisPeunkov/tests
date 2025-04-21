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
        :autocomplete="getAutocompleteValue(props.inputType, props.name)"
      />
    </template>
  </FieldLayout>
</template>
<script setup>
import FieldLayout from './FieldLayout.vue';
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
  autocomplete: {
    type: String,
    default: ''
  }
})

const model = defineModel()

const getAutocompleteValue = (type, name) => {
  if (props.autocomplete) {
    return props.autocomplete
  }
  if (type === 'password') {
    return 'current-password'
  }
  if (type === 'email') {
    return 'email'
  }
  if (name.toLowerCase().includes('name')) {
    return 'name'
  }
  return 'off'
}

</script>
<style lang="scss" scoped>
.input {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
}
</style>
  
