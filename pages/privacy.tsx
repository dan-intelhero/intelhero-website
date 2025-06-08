import React from 'react';

const PrivacyPage = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#008080', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 0' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '2rem', maxWidth: '800px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', margin: '2rem 0' }}>
        <header style={{ textAlign: 'center', padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <h1 style={{ color: '#333' }}>Privacy Policy</h1>
          <p style={{ color: '#666' }}>Effective Date: June 7, 2025</p>
        </header>

        <main style={{ padding: '1rem' }}>
          <p>
            IntelHero and Scout (“we,” “us,” or “our”) value your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights.
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>1. What We Collect</h2>
          <p>
            We may collect the following types of information when you use IntelHero or Scout:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Basic Contact Information:</strong> When you join the waitlist or sign up, we collect your name (optional) and email address.</li>
            <li><strong>Extension Usage (Scout):</strong> We collect limited, anonymized usage data (e.g., how often features are used) to improve functionality. We do not collect the content of your searches or browsing activity.</li>
            <li><strong>Website Analytics:</strong> We use privacy-friendly analytics tools to understand general traffic patterns. This data is anonymized and not tied to individual users.</li>
          </ul>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>2. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Provide and improve our services</li>
            <li>Communicate with you about product updates, new features, or beta invitations</li>
            <li>Ensure the security and reliability of our platform</li>
          </ul>
          <p>
            We do not sell or share your personal information with third parties for marketing purposes.
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>3. Data Storage and Security</h2>
          <p>
            We take reasonable measures to protect your data using industry best practices. Your data is stored securely and access is restricted to authorized personnel.
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>4. Your Rights</h2>
          <p>
            You may:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Request a copy of your personal data</li>
            <li>Ask us to delete your information</li>
            <li>Opt out of any email communication at any time</li>
          </ul>
          <p>
            To make a request, contact us at <a href="mailto:dan@intelhero.com">dan@intelhero.com</a>.
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>5. Third-Party Services</h2>
          <p>
            We may use third-party services (e.g., analytics or mailing list providers) that follow their own privacy practices. We ensure that these partners adhere to data protection standards.
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>6. Updates</h2>
          <p>
            We may update this policy occasionally. Any changes will be reflected on this page with a new effective date.
          </p>

          <h2 style={{ color: '#333', marginTop: '1rem' }}>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>📧 <a href="mailto:dan@intelhero.com">dan@intelhero.com</a></p>
        </main>

        <footer style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #ccc', marginTop: '1rem' }}>
          <p style={{ color: '#666' }}>© 2025 IntelHero. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPage;
