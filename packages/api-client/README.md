# @monorepo/api-client

Auto-generated TypeScript API client for the monorepo API.

## Usage

```typescript
import { MonorepoApiClient, apiClient } from '@monorepo/api-client'

// Using the default instance
const users = await apiClient.usersControllerFindAll()

// Creating a custom instance
const customClient = new MonorepoApiClient('https://api.production.com')
const user = await customClient.usersControllerFindOne({ id: '1' })
```

## Generating the Client

The API client can be generated using multiple approaches:

### Option 1: TypeScript Generator (Recommended - No Java Required)
```bash
# Make sure API is running on http://localhost:3001
pnpm generate  # Uses openapi-typescript
pnpm build
```

### Option 2: Docker-based Generation
```bash
# Requires Docker
pnpm generate:docker
pnpm build
```

### Option 3: Java-based Generation
```bash
# Requires Java
pnpm generate:java
pnpm build
```

## Development

```bash
# Generate client from API
pnpm generate

# Build the package
pnpm build

# Watch mode for development
pnpm dev
``` 