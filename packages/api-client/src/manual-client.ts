import axios, { AxiosInstance } from 'axios'

export interface User {
  id: number
  name: string
  email: string
  age: number
}

export interface CreateUserDto {
  name: string
  email: string
  age: number
}

export interface UpdateUserDto {
  name?: string
  email?: string
  age?: number
}

export class ManualApiClient {
  private client: AxiosInstance

  constructor(baseURL: string = 'http://localhost:3001') {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
    })
  }

  // Health check
  async getHealth(): Promise<{ message: string; timestamp: string }> {
    const response = await this.client.get('/')
    return response.data
  }

  // Users endpoints
  async getUsers(): Promise<User[]> {
    const response = await this.client.get('/users')
    return response.data
  }

  async getUser(id: number): Promise<User> {
    const response = await this.client.get(`/users/${id}`)
    return response.data
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const response = await this.client.post('/users', userData)
    return response.data
  }

  async updateUser(id: number, userData: UpdateUserDto): Promise<User> {
    const response = await this.client.put(`/users/${id}`, userData)
    return response.data
  }

  async deleteUser(id: number): Promise<{ message: string }> {
    const response = await this.client.delete(`/users/${id}`)
    return response.data
  }
} 