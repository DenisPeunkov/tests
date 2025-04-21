<template>
  <div>
    <h1>Демонстрация генератора форм</h1>
  </div>
  <FormFirst />
  <FormSecond />
  <FormWithCustomFields />
</template>

<script setup>
import { FormFirst } from '@/app/widgets/form-first/';
import { FormSecond } from '@/app/widgets/form-second/';
import { FormWithCustomFields } from '@/app/widgets/form-with-custom-fields/';
</script>
