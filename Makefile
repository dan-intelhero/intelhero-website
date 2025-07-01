# Makefile for IntelHero Website
# Description: Build automation for the Next.js application

.PHONY: dev build start clean install help

# Development server
dev:
	@echo "🚀 Starting development server..."
	npm run dev

# Help command to show available targets
help:
	@echo "Available commands:"
	@echo "  make dev     - Start the development server"
	@echo "  make help    - Show this help message"
