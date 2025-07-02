#!/bin/bash

echo "🔍 IntelHero Email Debugging Guide"
echo "=================================="
echo

echo "1. 📊 CHECK VERCEL LOGS:"
echo "   Run this command to see real-time logs:"
echo "   vercel logs --follow"
echo

echo "2. 🌐 CHECK VERCEL DASHBOARD:"
echo "   • Go to: https://vercel.com/dashboard"
echo "   • Select your intelhero-website project"
echo "   • Click 'Functions' tab"
echo "   • Look for /api/early-access function"
echo "   • Click to see invocation logs"
echo

echo "3. ⚙️ CHECK ENVIRONMENT VARIABLES:"
echo "   • In Vercel dashboard, go to Settings → Environment Variables"
echo "   • Ensure RESEND_API_KEY is set to your actual Resend API key"
echo

echo "4. 🧪 TEST API DIRECTLY:"
echo "   Test the production API endpoint:"
echo "   curl -X POST https://your-domain.vercel.app/api/early-access \\"
echo "     -F \"email=test@example.com\" \\"
echo "     -H \"Content-Type: multipart/form-data\""
echo

echo "5. 📧 CHECK RESEND DASHBOARD:"
echo "   • Go to: https://resend.com/emails"
echo "   • Look for recent email attempts"
echo "   • Check delivery status"
echo

echo "Most likely issues:"
echo "• Missing RESEND_API_KEY environment variable in Vercel"
echo "• API key not properly set in production environment"
echo "• Form not actually submitting to the API endpoint"
