#!/usr/bin/env node

import { typeSafeApiClient } from './packages/api-client/dist/index.js'

async function testIntegration() {
  console.log('🔍 Testing API Client Integration...')
  console.log('=====================================')

  try {
    // Test health endpoint
    console.log('1. Testing health endpoint...')
    const health = await typeSafeApiClient.getHealth()
    console.log('✅ Health check:', health.message)

    // Test users endpoint
    console.log('\n2. Testing users endpoint...')
    const users = await typeSafeApiClient.getUsers()
    console.log(`✅ Retrieved ${users.length} users:`)
    users.forEach(user => {
      console.log(`   - ${user.name} (${user.email}) - Age: ${user.age}`)
    })

    // Test create user
    console.log('\n3. Testing create user...')
    const newUser = await typeSafeApiClient.createUser({
      name: 'Test User',
      email: 'test@example.com',
      age: 25
    })
    console.log('✅ Created user:', newUser)

    console.log('\n🎉 All tests passed! The API client is fully integrated.')
    console.log('\n📍 You can now:')
    console.log('   - Visit http://localhost:3000 to see the frontend')
    console.log('   - Click "Test API Health" button on the home page')
    console.log('   - Visit the Users page to see real API data')
    console.log('   - Add new users through the frontend')

  } catch (error) {
    console.error('❌ Test failed:', error.message)
    console.log('\nMake sure the API is running:')
    console.log('   cd apps/api && pnpm dev')
  }
}

testIntegration() 