<template>
  <FormWrapper title="Оставить отзыв">
    <FormGenerator 
      v-model="formData" 
      :form-defenition="formDefenitionData" 
      submit-button="Отправить"
      @submit="handleSubmit" 
      @cancel="handleCancel" 
    /> 
  </FormWrapper>
</template>
<script setup>
import {reactive} from 'vue';
import { FormGenerator } from '@/shared/ui/form-generator/';
import { FormWrapper } from '@/shared/ui/form-wrapper/';

const handleSubmit = () => {
  console.log('submit', formData)
}
const handleCancel = () => {
  console.log('cancel')
}
const formData = reactive({
  email: '',
  message: '',
})

const formDefenitionData = [
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Введите email',
  },
  {
    type: 'textarea',
    name: 'message',
    label: 'Сообщение',
    placeholder: 'Введите сообщение',
    rows: 15,
  },
]
</script>
