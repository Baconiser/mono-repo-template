<template>
  <div>
    <label v-if="label" :for="inputId" class="block text-sm font-medium text-secondary-700 mb-1">
      {{ label }}
    </label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="inputClasses"
      @input="handleInput"
    />
    <p v-if="error" class="mt-1 text-sm text-danger-600">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: string
  type?: 'text' | 'email' | 'password' | 'number'
  label?: string
  placeholder?: string
  disabled?: boolean
  error?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = `input-${Math.random().toString(36).substr(2, 9)}`

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const inputClasses = computed(() => {
  const baseClasses = 'block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 disabled:bg-secondary-50 disabled:text-secondary-500'
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  }
  
  const errorClasses = props.error ? 'border-danger-300 focus:border-danger-500 focus:ring-danger-500' : ''
  
  return [
    baseClasses,
    sizeClasses[props.size],
    errorClasses
  ].join(' ')
})
</script> 