import { ref, watch, toRaw } from 'vue'
import type { Ref } from 'vue'

interface FormStateReturn<T> {
  initialState: Ref<T | {}>
  resetToInitial: () => boolean
  hasChanges: () => boolean
  updateInitialState: () => void
}

export function useFormState<T extends Record<string, any>>(modelValue: Ref<T>): FormStateReturn<T> {
  const initialState = ref<T | {}>({}) as Ref<T | {}>
  
  const saveInitialState = (): void => {
    initialState.value = structuredClone(toRaw(modelValue.value))
  }
  
  saveInitialState()
  
  watch(() => modelValue.value, (newValue, oldValue) => {
    if (JSON.stringify(toRaw(newValue)) !== JSON.stringify(toRaw(oldValue))) {
      saveInitialState()
    }
  }, { deep: true })
  
  const resetToInitial = (): boolean => {
    if (initialState.value && Object.keys(initialState.value).length > 0) {
      const typedInitialState = initialState.value as T
      
      Object.keys(typedInitialState).forEach(key => {
        const propertyKey = key as keyof T
        modelValue.value[propertyKey] = typedInitialState[propertyKey]
      })
      return true
    }
    return false
  }
  
  const hasChanges = (): boolean => {
    return JSON.stringify(toRaw(modelValue.value)) !== JSON.stringify(initialState.value)
  }
  
  const updateInitialState = (): void => {
    saveInitialState()
  }
  
  return {
    initialState,
    resetToInitial,
    hasChanges,
    updateInitialState
  }
}