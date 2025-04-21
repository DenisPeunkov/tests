<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(field, index) in props.formDefenition" :key="index">
      <slot v-if="field.type === 'email' || field.type === 'password' || field.type === 'text' || field.type === 'checkbox'" :name="field.name" :field="field" :model="model">
        <Input
          v-model="model[field.name]"
          :inputType="field.type"
          :name="field.name"
          :placeholder="field.placeholder"
        />
      </slot>
      <slot v-if="field.type === 'select'" :name="field.name" :field="field" :model="model">
        <Select 
          v-model='model[field.name]' 
          :options="field.options" 
          :placeholder="field.placeholder" 
          :name="field.name"
        />
      </slot>
      <slot v-if="field.type === 'textarea'" :name="field.name" :field="field" :model="model">
        <TextArea 
          v-model='model[field.name]' 
          :placeholder="field.placeholder" 
          :name="field.name" 
          :rows="field.rows" 
          :cols="field.cols"
        />
      </slot>
    </div>
  </form>
</template>
<script setup>
import Input from './form-fields/Input.vue'
import Select from './form-fields/Select.vue'
import TextArea from './form-fields/TextArea.vue'

const model = defineModel()
const props = defineProps({
  formDefenition: {
    type: [Object, Array],
    required: true,
  },
})

const handleSubmit = () => {
  console.log('submit', model)
}
</script>
