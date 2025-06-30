// Scout Dynamic Header API Endpoint
// Deployed on Vercel for intelhero.com

export default function handler(req, res) {
  // Set CORS headers for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only allow GET requests for actual content
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Set cache headers (cache for 1 hour)
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
    
    // Header content for Scout extension
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

    // Optional: Add dynamic content based on date/time
    const now = new Date();
    const isLaunchWeek = now >= new Date('2025-07-15') && now <= new Date('2025-07-22');
    
    if (isLaunchWeek) {
      headerContent.header.tagline = {
        text: "🚀 IntelHero is live! Monitor what matters.",
        link: "https://intelhero.com/launch"
      };
    }

    // Return the content
    return res.status(200).json(headerContent);
    
  } catch (error) {
    console.error('Scout API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
