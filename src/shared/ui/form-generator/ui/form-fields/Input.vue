<template>  
  <div class="input">
    <label :for="props.name">{{ props.name }}</label>
    <input 
      :type="props.inputType" 
      v-model="model"      
      :id="props.name" 
      :placeholder="props.placeholder"
    />
  </div>
</template>
<script setup>
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
  })

  const model = defineModel()

</script>
  