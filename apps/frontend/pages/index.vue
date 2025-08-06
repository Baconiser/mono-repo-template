<template>
  <div>
    <BaseCard>
      <template #header>
        <h1 class="text-2xl font-bold text-secondary-900">
          Welcome to Monorepo Template
        </h1>
      </template>
      
      <div class="space-y-6">
        <p class="text-secondary-600">
          This is a comprehensive monorepo template featuring:
        </p>
        
        <ul class="list-disc pl-6 space-y-2 text-secondary-700">
          <li>Nuxt 3 frontend with TypeScript</li>
          <li>NestJS API with Fastify and Swagger</li>
          <li>Shared Vue components library</li>
          <li>Auto-generated API client</li>
          <li>Shared ESLint & Prettier configuration</li>
          <li>Shared Tailwind CSS theme</li>
        </ul>
        
        <div class="flex space-x-4">
          <BaseButton @click="handlePrimaryClick">
            Test API Health
          </BaseButton>
          <BaseButton variant="secondary" @click="handleSecondaryClick">
            Secondary Button
          </BaseButton>
          <BaseButton variant="success" size="sm">
            Success Button
          </BaseButton>
        </div>
        
        <div class="max-w-md">
          <BaseInput
            v-model="inputValue"
            label="Example Input"
            placeholder="Type something..."
          />
          <p v-if="inputValue" class="mt-2 text-sm text-secondary-600">
            You typed: {{ inputValue }}
          </p>
        </div>
      </div>
      
      <template #footer>
        <div class="flex justify-between items-center">
          <span class="text-sm text-secondary-500">
            Built with ❤️ using pnpm workspaces
          </span>
          <NuxtLink 
            to="/users" 
            class="text-primary-600 hover:text-primary-700 font-medium"
          >
            View Users →
          </NuxtLink>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
// Import API client for health check demo
import { typeSafeApiClient } from '@monorepo/api-client'

const inputValue = ref('')

const handlePrimaryClick = async () => {
  try {
    const health = await typeSafeApiClient.getHealth()
    alert(`API Health Check: ${health.message}`)
  } catch (error) {
    alert('API is not available')
  }
}

const handleSecondaryClick = () => {
  alert('Secondary button clicked!')
}
</script> 