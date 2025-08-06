<template>
  <div>
    <BaseCard>
      <template #header>
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-secondary-900">Users</h1>
          <BaseButton @click="refreshUsers">
            Refresh
          </BaseButton>
        </div>
      </template>
      
      <div v-if="pending" class="text-center py-8">
        <p class="text-secondary-600">Loading users...</p>
      </div>
      
      <div v-else-if="error" class="text-center py-8">
        <p class="text-danger-600">Error loading users: {{ error }}</p>
        <BaseButton variant="danger" class="mt-4" @click="refreshUsers">
          Try Again
        </BaseButton>
      </div>
      
      <div v-else class="space-y-4">
        <div v-if="users && users.length === 0" class="text-center py-8">
          <p class="text-secondary-600">No users found.</p>
        </div>
        
        <div v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <BaseCard 
            v-for="user in users" 
            :key="user.id"
            shadow="sm"
            class="hover:shadow-md transition-shadow"
          >
            <div class="space-y-2">
              <h3 class="font-semibold text-secondary-900">{{ user.name }}</h3>
              <p class="text-sm text-secondary-600">{{ user.email }}</p>
              <p class="text-sm text-secondary-500">Age: {{ user.age }}</p>
            </div>
          </BaseCard>
        </div>
      </div>
      
      <template #footer>
        <div class="flex justify-between items-center">
          <p class="text-sm text-secondary-500">
            Data fetched from NestJS API using generated TypeScript client
          </p>
          <BaseButton variant="success" size="sm" @click="addNewUser">
            Add User
          </BaseButton>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
// Import the generated API client
import { typeSafeApiClient, type UserResponse } from '@monorepo/api-client'

const users = ref<UserResponse[]>([])
const pending = ref(false)
const error = ref<string | null>(null)

const fetchUsers = async () => {
  pending.value = true
  error.value = null
  
  try {
    // Use the generated API client
    const fetchedUsers = await typeSafeApiClient.getUsers()
    users.value = fetchedUsers
  } catch (err) {
    error.value = 'Failed to fetch users'
    console.error('Error fetching users:', err)
  } finally {
    pending.value = false
  }
}

const refreshUsers = () => {
  fetchUsers()
}

const addNewUser = async () => {
  const name = prompt('Enter user name:')
  const email = prompt('Enter user email:')
  const ageStr = prompt('Enter user age:')
  
  if (!name || !email || !ageStr) return
  
  const age = parseInt(ageStr)
  if (isNaN(age)) {
    alert('Please enter a valid age')
    return
  }

  try {
    pending.value = true
    const newUser = await typeSafeApiClient.createUser({ name, email, age })
    users.value.push(newUser)
    alert('User created successfully!')
  } catch (err) {
    alert('Failed to create user')
    console.error('Error creating user:', err)
  } finally {
    pending.value = false
  }
}

// Load users on component mount
onMounted(() => {
  fetchUsers()
})
</script> 