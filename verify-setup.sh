#!/bin/bash

echo "🔍 Verifying Monorepo Template Setup..."
echo "========================================="

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install pnpm first."
    exit 1
fi

echo "✅ pnpm is installed"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "⚠️  Dependencies not installed. Running pnpm install..."
    pnpm install
fi

echo "✅ Dependencies are installed"

# Build shared packages
echo "📦 Building shared packages..."

cd packages/vue-components
if pnpm build > /dev/null 2>&1; then
    echo "✅ Vue components package built successfully"
else
    echo "❌ Vue components package build failed"
fi

cd ../..

# Build API
echo "🚀 Building API..."
cd apps/api
if pnpm build > /dev/null 2>&1; then
    echo "✅ API built successfully"
else
    echo "❌ API build failed"
fi

cd ../..

# Build Frontend
echo "🎨 Building Frontend..."
cd apps/frontend
if pnpm build > /dev/null 2>&1; then
    echo "✅ Frontend built successfully"
else
    echo "❌ Frontend build failed"
fi

cd ..

echo ""
echo "🎉 Setup Verification Complete!"
echo ""
echo "To start development:"
echo "1. Start API: cd apps/api && pnpm dev"
echo "2. Start Frontend: cd apps/frontend && pnpm dev"
echo ""
echo "URLs:"
echo "- Frontend: http://localhost:3000"
echo "- API: http://localhost:3001"
echo "- API Docs: http://localhost:3001/api/docs" 