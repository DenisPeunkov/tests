<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(field, index) in props.formDefenition" :key="index">
      <slot v-if="field.type === 'email' || field.type === 'password' || field.type === 'text' || field.type === 'checkbox'" :name="field.name" :field="field" :model="model">
        <Input
          v-model="model[field.name]"
          :inputType="field.type"
          :name="field.name"
          :label="field.label"
          :placeholder="field.placeholder"
        />
      </slot>
      <slot v-if="field.type === 'select'" :name="field.name" :field="field" :model="model">
        <Select 
          v-model='model[field.name]' 
          :options="field.options" 
          :placeholder="field.placeholder" 
          :label="field.label"
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
          :label="field.label"
        />
      </slot>
    </div>
    <slot name="controls">
      <div class="controls">
        <Button type="primary">{{ props.submitButton }}</Button>
        <Button type="info" @click.prevent="handleCancel">Отмена</Button>
      </div>
    </slot>
  </form>
</template>
<script setup>
import { Input, Select, TextArea } from '@/shared/ui/form-fields'
import { useFormState } from '../lib/useFormState.ts'
import { Button } from '@/shared/ui/button'

const model = defineModel()
const {updateInitialState, resetToInitial} = useFormState(model)
const props = defineProps({
  formDefenition: {
    type: [Object, Array],
    required: true,
  },
  onSubmit: {
    type: Function,
    required: true,
  },
  onCancel: {
    type: Function,
    required: true,
  },
  submitButton: {
    type: String,
    default: 'Сохранить',
  }
})

const handleSubmit = () => {
  updateInitialState()
  props.onSubmit()
}
const handleCancel = () => {
  resetToInitial()
  props.onCancel()
}
</script>
<style lang="scss" scoped>
.controls{
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>