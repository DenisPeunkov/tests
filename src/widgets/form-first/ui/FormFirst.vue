<template>
  <FormWrapper title="Вход в систему">
    <FormGenerator 
      v-model="formData" 
      :form-defenition="formDefenitionData" 
      submit-button="Войти"
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
  login: '',
  password: '',
  domain: 'gmail.com',
  remember: false,
})

const formDefenitionData = [
  {
    type: 'text',
    name: 'login',
    label: 'Логин',
    placeholder: 'Введите логин',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Введите пароль',
  },
  {
    type: 'select',
    name: 'domain',
    label: 'Домен',
    placeholder: 'Выберите домен',
    options: [
      { value: 'gmail.com', label: 'Gmail' },
      { value: 'yandex.ru', label: 'Yandex' },
      { value: 'mail.ru', label: 'Mail.ru' },
    ],
  },
  {
    type: 'checkbox',
    name: 'remember',
    label: 'Запомнить меня',
  },
]
</script>
