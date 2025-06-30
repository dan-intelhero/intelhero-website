# Scout Message Management Guide
## How to Update IntelHero Messages for Scout Users

### 🎯 **Overview**
Scout v1.0.0 includes a dynamic header system that allows you to push real-time messages to all Scout users through the intelhero.com API. Messages appear in the Scout popup header and can include clickable links.

---

## 📝 **Quick Reference**

### **Current System:**
- **API Endpoint**: `https://intelhero.com/api/scout/header`
- **File Location**: `/api/scout/header.js` in intelhero.com project
- **Update Method**: Edit API file → Git push → Auto-deploy
- **User Visibility**: 1-24 hours (depending on cache)

### **Message Format:**
```javascript
{
  "version": "1.0",
  "updated": "2025-06-29T...",
  "header": {
    "tagline": {
      "text": "Your message here (max 60 chars)",
      "link": "https://intelhero.com/your-link" // or null
    }
  }
}
```

---

## 🔄 **Step-by-Step Update Process**

### **Step 1: Edit the API File**
In your **intelhero.com project**, open `/api/scout/header.js` and find this section:

```javascript
// Header content for Scout extension
const headerContent = {
  version: "1.0",
  updated: new Date().toISOString(),
  header: {
    tagline: {
      text: "Copy/paste is so 2024. IntelHero is 2025.",  // ← CHANGE THIS
      link: "https://intelhero.com/early-access"            // ← CHANGE THIS
    }
  }
};
```

### **Step 2: Update Your Message**
Replace the `text` and `link` values:

```javascript
text: "🚀 Your new message here!",
link: "https://intelhero.com/your-page"  // or null for no link
```

### **Step 3: Deploy Changes**
```bash
# In your intelhero.com project directory
git add api/scout/header.js
git commit -m "Update Scout message: [describe change]"
git push
```

### **Step 4: Verify Deployment**
1. **Wait 1-2 minutes** for Vercel to deploy
2. **Test API**: Visit `https://intelhero.com/api/scout/header`
3. **Confirm**: You should see your new message in the JSON response

### **Step 5: Monitor Rollout**
- **New users**: See message immediately
- **Existing users**: See message within 1-24 hours (due to caching)
- **Disabled users**: Users who turned off "IntelHero updates" won't see any messages

---

## 📋 **Message Templates**

### **🚀 Product Launch**
```javascript
text: "🚀 IntelHero is live! Monitor what matters.",
link: "https://intelhero.com/launch"
```

### **📢 Feature Announcement**
```javascript
text: "📢 New Scout sites added - check them out!",
link: "https://intelhero.com/scout-updates"
```

### **🎉 Promotion**
```javascript
text: "🎉 Try IntelHero monitoring free for 30 days",
link: "https://intelhero.com/free-trial"
```

### **💡 Simple Tip (No Link)**
```javascript
text: "Scout keeps getting better every day",
link: null
```

### **🎄 Holiday/Seasonal**
```javascript
text: "Happy holidays from the Scout team! 🎄",
link: "https://intelhero.com/holiday-2025"
```

### **🔥 Urgent Update**
```javascript
text: "⚠️ Important Scout update available",
link: "https://intelhero.com/scout-urgent"
```

---

## ⚡ **Advanced Features**

### **Time-Based Messages**
You can add logic for different messages based on time/date:

```javascript
// Time-based logic
const now = new Date();
const hour = now.getHours();
const isWorkday = now.getDay() >= 1 && now.getDay() <= 5;

if (isWorkday && hour >= 9 && hour <= 17) {
  headerContent.header.tagline = {
    text: "Stay productive with Scout! 💼",
    link: "https://intelhero.com/productivity"
  };
} else if (hour >= 18 || hour <= 8) {
  headerContent.header.tagline = {
    text: "Good evening! Scout is here when you need it",
    link: null
  };
}
```

### **Date-Based Campaigns**
```javascript
// Holiday messages
const month = now.getMonth();
const day = now.getDate();

if (month === 11 && day === 25) {
  headerContent.header.tagline = {
    text: "Merry Christmas from Scout! 🎄",
    link: "https://intelhero.com/holiday"
  };
}

// Launch week special
const isLaunchWeek = now >= new Date('2025-07-15') && now <= new Date('2025-07-22');
if (isLaunchWeek) {
  headerContent.header.tagline = {
    text: "🚀 IntelHero launch week - 50% off!",
    link: "https://intelhero.com/launch-special"
  };
}
```

---

## 🛡️ **Best Practices**

### **Content Guidelines:**
- ✅ **Keep text under 60 characters** (fits in Scout popup)
- ✅ **Use emojis sparingly** (1-2 max for visual appeal)
- ✅ **Test all links** before deploying
- ✅ **Use HTTPS URLs only**
- ✅ **Consider user timezones** for time-sensitive messages

### **Update Frequency:**
- ✅ **Don't change too often** (max 1-2 times per week)
- ✅ **Plan seasonal campaigns** in advance
- ✅ **Coordinate with marketing** for product launches
- ✅ **Monitor user feedback** through reviews

### **Emergency Procedures:**

#### **Quick Revert to Default:**
```javascript
text: "Copy/paste is so 2024. IntelHero is 2025.",
link: "https://intelhero.com/early-access"
```

#### **Disable Messages (Emergency):**
```javascript
text: "Copy/paste is so 2024.",
link: null
```

---

## 🔍 **Troubleshooting**

### **Common Issues:**

#### **Message Not Updating:**
1. Check if API endpoint returns new content: `https://intelhero.com/api/scout/header`
2. Wait up to 24 hours for cache expiration
3. Verify Vercel deployment completed successfully

#### **Link Not Working:**
1. Test URL directly in browser
2. Ensure URL uses HTTPS
3. Check for typos in link field

#### **Message Too Long:**
1. Text appears truncated in Scout popup
2. Keep under 60 characters including emojis
3. Use shorter, punchier messaging

### **Testing Messages:**
Before deploying to production, you can:
1. **Test locally** using the local test server
2. **Use staging environment** if available
3. **Test with small user group** first

---

## 📊 **Monitoring & Analytics**

### **What to Monitor:**
1. **API Response Time**: Should be <1 second
2. **Error Rate**: Should be <5%
3. **User Engagement**: Click-through rates on links
4. **Chrome Web Store Reviews**: User feedback about messages

### **Success Metrics:**
- **Message Visibility**: Users seeing updated content
- **Click-Through Rate**: Users clicking message links
- **User Retention**: No increase in extension uninstalls
- **Store Rating**: Maintaining 4+ star rating

---

## 🚀 **Future Enhancements (Phase 2)**

The current system provides a foundation for:
- **Notification banners** below header
- **Rich content** with images and styling
- **User segmentation** based on usage patterns
- **A/B testing** different message variations
- **Analytics dashboard** for message performance

---

## 📞 **Support & Questions**

### **Quick Help:**
- **API not responding**: Check Vercel deployment status
- **Messages not updating**: Wait 24 hours or clear Scout cache
- **User complaints**: Review message content and frequency

### **Technical Details:**
- **Cache TTL**: 24 hours (configurable in Scout code)
- **Background Refresh**: Every 4 hours
- **Timeout**: 3 seconds for API requests
- **Fallback**: Default Scout tagline if API fails

---

## 🎯 **Why Not scout-messages.json?**

**Current Approach: Dynamic API Endpoint**
- ✅ **Real-time updates** without code changes
- ✅ **Server-side logic** for time/date-based messages
- ✅ **Better caching control** with HTTP headers
- ✅ **Analytics capability** (can log requests)
- ✅ **Scalable** for future enhancements

**vs. Static JSON File:**
- ❌ **Requires code deployment** for every change
- ❌ **No server-side logic** capability
- ❌ **Limited caching control**
- ❌ **No analytics** on message views
- ❌ **Less flexible** for complex campaigns

The API approach gives you much more power and flexibility for messaging campaigns while maintaining the same user experience!

---

**🎉 You now have direct communication with all Scout users through the dynamic header system! Use it wisely to engage, inform, and delight your user base.**
