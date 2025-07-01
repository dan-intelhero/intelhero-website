#!/bin/bash

# Test script for early access email functionality
# Run this script to test the API endpoint locally

echo "Testing IntelHero Early Access API..."
echo

# Test with a valid email
echo "Testing with valid email..."
curl -X POST http://localhost:3001/api/early-access \
  -F "email=test@example.com" \
  -H "Content-Type: multipart/form-data"

echo
echo

# Test with invalid email
echo "Testing with invalid email..."
curl -X POST http://localhost:3001/api/early-access \
  -F "email=invalid-email" \
  -H "Content-Type: multipart/form-data"

echo
echo

echo "Check your terminal logs for email notification status."
echo "If RESEND_API_KEY is configured, an email should be sent to dan@intelhero.com"
