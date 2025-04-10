#!/bin/bash
echo "Starting NFL Analytics Backend Server..."
echo ""
echo "This will generate the Prisma client and start the development server"
echo ""

echo "Generating Prisma client..."
npx prisma generate

echo ""
echo "Starting development server..."
echo "Press Ctrl+C to stop the server."
echo ""

npm run dev