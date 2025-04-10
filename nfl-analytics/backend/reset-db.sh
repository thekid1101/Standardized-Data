#!/bin/bash
echo "Resetting database..."
rm -f prisma/dev.db

echo "Pushing schema..."
npx prisma db push

echo "Generating client..."
npx prisma generate

echo "Database reset complete."