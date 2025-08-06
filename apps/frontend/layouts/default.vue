<template>
  <div class="min-h-screen bg-secondary-50">
    <nav class="bg-white shadow-sm border-b border-secondary-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-primary-600">
              Monorepo Template
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink 
              to="/" 
              class="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/users" 
              class="text-secondary-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Users
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <slot />
      </div>
    </main>
  </div>
</template> 