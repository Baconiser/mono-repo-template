// Type-safe generated API client (recommended)
export { 
  createApiClient, 
  apiClient, 
  TypeSafeApiClient 
} from './generated-client.js'
export type { 
  ApiPaths, 
  UserResponse,
  CreateUser,
  UpdateUser
} from './generated-client.js'

// Manual API client (fallback)
export { ManualApiClient } from './manual-client.js'

// Create a type-safe client instance as default export
import { TypeSafeApiClient } from './generated-client.js'
export const typeSafeApiClient = new TypeSafeApiClient() 