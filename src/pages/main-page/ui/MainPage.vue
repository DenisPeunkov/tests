<template>
  <PageWrapper title="Все формы">
    <FormFirst />
    <FormSecond />
    <FormWithCustomFields />
  </PageWrapper>
</template>

<script setup>
import { FormFirst } from '@/widgets/form-first/';
import { FormSecond } from '@/widgets/form-second/';
import { FormWithCustomFields } from '@/widgets/form-with-custom-fields/';
import { PageWrapper } from '@/shared/ui/page-wrapper';
</script>
