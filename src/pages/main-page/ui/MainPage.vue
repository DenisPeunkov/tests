<template>
  {{ formData }}
  <div>
    <h1>Main Page</h1>
  </div>
  <FormGenerator v-model="formData" :form-defenition="formDefenitionData" />
</template>

<script setup>
import { reactive } from 'vue'
import { FormGenerator } from '@/shared/ui/form-generator'

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
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    type: 'checkbox',
    name: 'accept',
    label: 'accept',
    placeholder: 'Enter your password',
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    type: 'select',
    name: 'select',
    label: 'select',
    placeholder: 'Enter your select',
    validation: {
      required: true,
      minLength: 3,
    },
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
    validation: {
      required: true,
      minLength: 3,
    },
    rows: 5,
    cols: 33,
  },
]
</script>