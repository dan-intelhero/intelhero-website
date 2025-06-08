import React from 'react';

const PrivacyPage = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#008080', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 0' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '2rem', maxWidth: '800px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', margin: '2rem 0' }}>
        <header style={{ textAlign: 'center', padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <h1 style={{ color: '#333' }}>Privacy Policy for IntelHero Scout</h1>
          <p style={{ color: '#666' }}>Effective Date: June 7, 2025</p>
        </header>

        <main style={{ padding: '1rem' }}>
          <h2 style={{ color: '#333', marginTop: '1rem' }}>1. Information We Collect</h2>
          <h3 style={{ color: '#333', marginTop: '1rem' }}>A. Information You Provide</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Waitlist Signups:</strong> When you join the IntelHero waitlist, we collect your email address and, optionally, your name.</li>
            <li><strong>User Preferences (Scout):</strong> When using the Scout extension, we store your custom search sites, shortcuts, and theme settings.</li>
          </ul>

          <h3 style={{ color: '#333', marginTop: '1rem' }}>B. Automatically Collected Information</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Usage Analytics:</strong> We collect anonymous usage statistics such as search events, feature usage, and extension version information. We do not collect the content of your searches or browsing history.</li>
            <li><strong>Install ID (Scout):</strong> A randomly generated identifier helps us understand feature usage without identifying you.</li>
            <li><strong>Search Event Timestamps:</strong> We log when searches happen (not what was searched).</li>
            <li><strong>Website Analytics:</strong> We use privacy-friendly analytics tools to monitor general traffic to our website. All data is anonymized.</li>
          </ul>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>2. How We Use Information</h2>
          <p>
            We use collected data to:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Improve the performance and features of IntelHero and Scout</li>
            <li>Understand which features are most useful</li>
            <li>Fix bugs and offer support</li>
            <li>Communicate product updates and beta invitations (if you signed up)</li>
            <li>Ensure secure and reliable service</li>
          </ul>
          <p>
            We do not sell or share your personal information for marketing purposes.
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>3. Data Storage & Security</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Scout Extension:</strong> Your preferences are stored locally in your browser. If Chrome Sync is enabled, they’re synced across devices via Google.</li>
            <li><strong>IntelHero Waitlist:</strong> Emails are securely stored in our CRM with limited access.</li>
            <li><strong>All network communications are secured via HTTPS.</strong></li>
            <li><strong>We use anonymous data collection practices and browser-based encryption.</strong></li>
          </ul>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>4. Third-Party Services</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Google Sheets:</strong> for collecting anonymous extension usage analytics</li>
            <li><strong>Favicon Services:</strong> for visual enhancement of Scout search lists</li>
            <li><strong>Email Providers:</strong> for communicating with waitlist members</li>
          </ul>
          <p>
            These partners adhere to data protection standards and do not receive personal user data.
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>5. Your Rights & Choices</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Request a copy of any personal data you’ve provided</li>
            <li>Ask us to delete your information from our records</li>
            <li>Unsubscribe from any email communications</li>
            <li>Uninstall the Scout extension to remove all local data</li>
            <li>Disable Chrome Sync at any time</li>
          </ul>
          <p>
            To make a request, contact us at 📧 <a href="mailto:dan@intelhero.com">dan@intelhero.com</a>
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>6. Children’s Privacy</h2>
          <p>
            Our services are not directed at children under 13. We do not knowingly collect personal data from children under 13 years of age.
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>7. Policy Updates</h2>
          <p>
            We may update this policy occasionally. Updates will be posted to this page with a revised effective date. We encourage you to review it periodically.
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact:
          </p>
          <p>📧 <a href="mailto:dan@intelhero.com">dan@intelhero.com</a></p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>9. Compliance</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Chrome Web Store Developer Program Policies</li>
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
          </ul>

          <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>© 2025 IntelHero. All rights reserved.</p>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPage;
