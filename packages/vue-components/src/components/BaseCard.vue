<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="px-6 py-4 border-b border-secondary-200">
      <slot name="header" />
    </div>
    <div class="p-6">
      <slot />
    </div>
    <div v-if="$slots.footer" class="px-6 py-4 border-t border-secondary-200 bg-secondary-50">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'md' | 'lg' | 'xl'
}

const props = withDefaults(defineProps<Props>(), {
  shadow: 'md',
  rounded: 'lg'
})

const cardClasses = computed(() => {
  const baseClasses = 'bg-white border border-secondary-200'
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  }
  
  const roundedClasses = {
    none: '',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  }
  
  return [
    baseClasses,
    shadowClasses[props.shadow],
    roundedClasses[props.rounded]
  ].join(' ')
})
</script> 