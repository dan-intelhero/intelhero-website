// Vercel API Route: /api/scout/header.js
// Deploy this to your intelhero.com Vercel project

export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Set CORS headers for extension access
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Set cache headers (cache for 1 hour)
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    
    // Sample content - modify this to change what Scout users see
    const headerContent = {
      version: "1.0",
      updated: new Date().toISOString(),
      header: {
        tagline: {
          text: "Copy/paste is so 2024. IntelHero is 2025.",
          link: "https://intelhero.com/early-access"
        }
      }
    };

    // You can add conditional logic here based on:
    // - Time of day
    // - Current date (for special announcements)
    // - Query parameters (for A/B testing)
    // - Geographic location (req.geo in Vercel)
    
    // Example: Different messages based on date
    const now = new Date();
    const isLaunchWeek = now >= new Date('2025-07-15') && now <= new Date('2025-07-22');
    
    if (isLaunchWeek) {
      headerContent.header.tagline = {
        text: "🚀 IntelHero is live! Monitor what matters.",
        link: "https://intelhero.com/launch"
      };
    }

    // Example: Holiday messages
    const month = now.getMonth();
    const day = now.getDate();
    
    if (month === 11 && day === 31) { // New Year's Eve
      headerContent.header.tagline = {
        text: "New year, smarter searches. Happy 2026!",
        link: "https://intelhero.com/2026-goals"
      };
    }

    return res.status(200).json(headerContent);
    
  } catch (error) {
    console.error('Scout header API error:', error);
    
    // Return a fallback response on error
    return res.status(200).json({
      version: "1.0",
      updated: new Date().toISOString(),
      header: {
        tagline: {
          text: "Copy/paste is so 2024.",
          link: null
        }
      }
    });
  }
}

// Example usage scenarios:

/* 
## Basic Text Update
{
  "version": "1.0",
  "header": {
    "tagline": {
      "text": "New sites added to Scout!",
      "link": null
    }
  }
}

## Promotional Link
{
  "version": "1.0", 
  "header": {
    "tagline": {
      "text": "Try IntelHero monitoring free",
      "link": "https://intelhero.com/free-trial"
    }
  }
}

## Beta Invitation
{
  "version": "1.0",
  "header": {
    "tagline": {
      "text": "Join the IntelHero beta waitlist",
      "link": "https://intelhero.com/beta"
    }
  }
}

## Feature Announcement
{
  "version": "1.0",
  "header": {
    "tagline": {
      "text": "Scout v0.8 with AI search coming soon",
      "link": "https://intelhero.com/scout-ai"
    }
  }
}
*/
