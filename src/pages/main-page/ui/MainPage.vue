<template>
  <div>
    <h1>Main Page</h1>
  </div>
  <FormGenerator v-model="formData" :form-defenition="formDefenitionData" @submit="handleSubmit" @cancel="handleCancel" /> 
</template>

<script setup>
import { reactive } from 'vue'
import { FormGenerator } from '@/shared/ui/form-generator'

const handleSubmit = () => {
  console.log('submit', formData)
}
const handleCancel = () => {
  console.log('cancel')
}

const formData = reactive({
  name: '',
  email: '',
  password: '',
  accept: false,
  select: '',
  textarea: '',
})

const formDefenitionData = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'Enter your name',

  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
  {
    type: 'checkbox',
    name: 'accept',
    label: 'accept',
    placeholder: 'Enter your password',
  },
  {
    type: 'select',
    name: 'select',
    label: 'select',
    placeholder: 'Enter your select',
    options: [
      {
        value: 'option1',
        label: 'Option 1',
      },
      {
        value: 'option2',
        label: 'Option 2',
      },
    ],
  },
  {
    type: 'textarea',
    name: 'textarea',
    label: 'textarea',
    placeholder: 'Enter your text',
    rows: 5,
    cols: 33,
  },
]
</script>