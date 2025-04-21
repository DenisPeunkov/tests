<template>
  <FormWrapper title="Форма с кастомными полями">
    <FormGenerator 
      v-model="formData" 
      :form-defenition="formDefenitionData" 
      submit-button="Отправить"
      @submit="handleSubmit" 
      @cancel="handleCancel" 
    >
      <template #name="{ field, model }">
        <div class="custom-input">
          <label :for="field.name" class="custom-input__label">{{ field.label }}</label>
          <div class="custom-input__wrapper">
            <span class="custom-input__icon">👤</span>
            <input 
              :id="field.name"
              v-model="model[field.name]"
              :type="field.type"
              :placeholder="field.placeholder"
              class="custom-input__field"
            />
          </div>
        </div>
      </template>
      <template #controls>
        <Button type="warning">Сохранить</Button>
      </template>
    </FormGenerator> 
  </FormWrapper>
</template>
<script setup>
import {reactive} from 'vue';
import { FormGenerator } from '@/shared/ui/form-generator/';
import { FormWrapper } from '@/shared/ui/form-wrapper/';
import {Button} from '@/shared/ui/button/';

const handleSubmit = () => {
  console.log('submit', formData)
}
const handleCancel = () => {
  console.log('cancel')
}
const formData = reactive({
  name: '',
  description: '',
})

const formDefenitionData = [
  {
    type: 'text',
    name: 'name',
    label: 'Имя',
    placeholder: 'Введите имя', 
  },
  {
    type: 'textarea',
    name: 'description',
    label: 'Описание',
    placeholder: 'Введите описание',
    rows: 15,
  },
]
</script>

<style lang="scss" scoped>
.custom-input {
  margin-bottom: 1.5rem;
  
  &__label {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
    color: #2c3e50;
  }
  
  &__wrapper {
    display: flex;
    align-items: center;
    border: 2px solid #3498db;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &:focus-within {
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
    }
  }
  
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    background-color: #f1f5f9;
    height: 100%;
  }
  
  &__field {
    flex: 1;
    padding: 12px;
    border: none;
    outline: none;
    
    &::placeholder {
      color: #94a3b8;
    }
  }
}
</style>
