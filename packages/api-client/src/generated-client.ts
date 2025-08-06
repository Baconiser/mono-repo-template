import createClient from 'openapi-fetch'
import type { paths } from './generated/schema.js'

// Create type-safe client
export const createApiClient = (baseUrl: string = 'http://localhost:3001') => {
  return createClient<paths>({ baseUrl })
}

// Default client instance
export const apiClient = createApiClient()

// Export types for consumers
export type ApiPaths = paths
export type User = paths['/users']['get']['responses']['200']['content']['application/json'][0]
export type CreateUserDto = paths['/users']['post']['requestBody']['content']['application/json']  
export type UpdateUserDto = paths['/users/{id}']['put']['requestBody']['content']['application/json']

// Import the component types directly
import type { components } from './generated/schema.js'
export type UserResponse = components['schemas']['UserResponseDto']
export type CreateUser = components['schemas']['CreateUserDto']
export type UpdateUser = components['schemas']['UpdateUserDto']

// Convenience methods with full type safety
export class TypeSafeApiClient {
  private client: ReturnType<typeof createApiClient>

  constructor(baseUrl?: string) {
    this.client = createApiClient(baseUrl)
  }

  async getHealth() {
    const { data, error } = await this.client.GET('/')
    if (error) throw new Error('Failed to get health status')
    return data
  }

  async getUsers() {
    const { data, error } = await this.client.GET('/users')
    if (error) throw new Error('Failed to get users')
    return data
  }

  async getUser(id: number) {
    const { data, error } = await this.client.GET('/users/{id}', {
      params: { path: { id: id.toString() } }
    })
    if (error) throw new Error(`Failed to get user ${id}`)
    return data
  }

  async createUser(userData: CreateUser) {
    const { data, error } = await this.client.POST('/users', {
      body: userData
    })
    if (error) throw new Error('Failed to create user')
    return data
  }

  async updateUser(id: number, userData: UpdateUser) {
    const { data, error } = await this.client.PUT('/users/{id}', {
      params: { path: { id: id.toString() } },
      body: userData
    })
    if (error) throw new Error(`Failed to update user ${id}`)
    return data
  }

  async deleteUser(id: number) {
    const { data, error } = await this.client.DELETE('/users/{id}', {
      params: { path: { id: id.toString() } }
    })
    if (error) throw new Error(`Failed to delete user ${id}`)
    return data
  }
} 