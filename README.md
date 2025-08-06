# Monorepo Template

A comprehensive monorepo template using pnpm workspaces with:

- **Frontend**: Nuxt 3 application with TypeScript
- **API**: NestJS with Fastify and Swagger documentation
- **Shared Packages**:
  - Vue components library
  - API client (auto-generated from Swagger)
  - ESLint & Prettier configuration
  - Tailwind CSS theme and configuration

## Project Structure

```
├── apps/
│   ├── frontend/          # Nuxt 3 application
│   └── api/               # NestJS API with Fastify
├── packages/
│   ├── vue-components/    # Shared Vue components
│   ├── api-client/        # Auto-generated API client
│   ├── eslint-config/     # Shared ESLint & Prettier config
│   └── tailwind-config/   # Shared Tailwind theme
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Build shared packages:
```bash
cd packages/vue-components && pnpm build
cd packages/eslint-config && pnpm build
cd packages/tailwind-config && pnpm build
```

4. Start the API server:
```bash
cd apps/api && pnpm dev
```

5. In a new terminal, start the frontend:
```bash
cd apps/frontend && pnpm dev
```

6. Visit the applications:
   - **Frontend**: http://localhost:3000
   - **API**: http://localhost:3001
   - **API Documentation**: http://localhost:3001/api/docs

## 🔗 Frontend-API Integration

The Nuxt frontend is **fully integrated** with the NestJS API using the generated TypeScript client:

- ✅ **Home Page**: "Test API Health" button calls the real API
- ✅ **Users Page**: Loads real users from the NestJS API  
- ✅ **Add Users**: Create new users via the API
- ✅ **Type Safety**: All API calls are fully type-checked
- ✅ **Error Handling**: Proper error handling and loading states

## Generating API Client

To generate the API client from the running API:

```bash
cd packages/api-client
pnpm generate
pnpm build
```

## OpenAPI Client Generation Alternatives

The monorepo supports multiple ways to generate the API client:

### 🚀 **Option 1: openapi-typescript (Recommended)**
**No Java required!** Fast TypeScript-first generator.

```bash
cd packages/api-client
pnpm generate  # Uses openapi-typescript
pnpm build
```

**Pros:**
- ✅ No Java dependency
- ✅ Fast generation (~70ms)
- ✅ Pure TypeScript types
- ✅ Works with openapi-fetch for type-safe requests
- ✅ Smaller bundle size

### 🐳 **Option 2: Docker-based Generation**
Uses the official OpenAPI Generator in Docker.

```bash
cd packages/api-client
pnpm generate:docker  # Uses Docker
pnpm build
```

**Pros:**
- ✅ No local Java installation
- ✅ Full OpenAPI Generator features
- ✅ Consistent across environments

**Cons:**
- ❌ Requires Docker
- ❌ Slower generation

### ☕ **Option 3: Java-based Generation**
Traditional OpenAPI Generator CLI.

```bash
# First install Java
brew install openjdk@11  # macOS
# or download from https://adoptium.net/

cd packages/api-client
pnpm generate:java  # Uses Java
pnpm build
```

**Pros:**
- ✅ Full OpenAPI Generator features
- ✅ Mature and stable

**Cons:**
- ❌ Requires Java installation
- ❌ Slower than TypeScript alternatives

### 🎯 **Other Alternatives**

#### **oazapfts**
```bash
npm install -g oazapfts
oazapfts http://localhost:3001/api/docs-json client.ts
```

#### **swagger-typescript-api**
```bash
npm install -g swagger-typescript-api
swagger-typescript-api -p http://localhost:3001/api/docs-json -o ./generated --modular
```

#### **@rtk-query/codegen-openapi**
For Redux Toolkit users:
```bash
npm install @rtk-query/codegen-openapi
```

### 🏆 **Recommendation**

For this monorepo, we use **openapi-typescript** as the default because:
- Zero dependencies beyond Node.js
- Extremely fast generation
- Perfect TypeScript integration
- Works seamlessly with modern fetch APIs

## Features

### 🏗️ Architecture
- **Monorepo structure** with pnpm workspaces
- **TypeScript** throughout the entire stack
- **Shared packages** for maximum code reuse

### 🎨 Frontend (Nuxt 3)
- **Vue 3** with Composition API
- **Tailwind CSS** with shared design system
- **Auto-imported components** from shared library
- **Type-safe routing** and server-side rendering

### 🚀 Backend (NestJS + Fastify)
- **NestJS** framework with TypeScript decorators
- **Fastify** for high performance HTTP server
- **Swagger/OpenAPI** documentation auto-generation
- **SWC compiler** for ~20x faster builds than tsc
- **Class validation** with class-validator

### 📦 Shared Packages
- **Vue Components Library** - Reusable UI components with Tailwind
- **API Client** - Auto-generated from Swagger specification
- **ESLint + Prettier Config** - Consistent code style across projects
- **Tailwind Config** - Shared design tokens and theme

## Scripts

### Root level
- `pnpm build` - Build all packages
- `pnpm dev` - Start all development servers (parallel)
- `pnpm lint` - Lint all packages
- `pnpm lint:fix` - Fix linting issues
- `pnpm type-check` - Run TypeScript checks
- `pnpm clean` - Clean build artifacts

### Package level
Each package has its own scripts:
- `pnpm build` - Build the package
- `pnpm dev` - Development mode with watch
- `pnpm lint` - Lint the package
- `pnpm type-check` - TypeScript type checking

## Requirements

- Node.js ≥ 18.0.0
- pnpm ≥ 8.0.0 