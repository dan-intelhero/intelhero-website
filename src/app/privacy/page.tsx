export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IH</span>
              </div>
              <span className="text-white font-bold text-xl">IntelHero</span>
            </div>
            <a
              href="/"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
            >
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                IntelHero Scout is designed with privacy in mind. We collect minimal information necessary to provide our service:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Browser extension usage data (anonymous)</li>
                <li>• Search queries (processed locally, not stored)</li>
                <li>• Email addresses for newsletter subscriptions (optional)</li>
                <li>• Basic analytics data to improve the extension</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                The information we collect is used to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Provide and improve the IntelHero Scout extension</li>
                <li>• Send newsletter updates (only if subscribed)</li>
                <li>• Analyze usage patterns to enhance functionality</li>
                <li>• Provide customer support when requested</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Data Storage and Security</h2>
              <p className="text-gray-300 mb-4">
                Your privacy and data security are our top priorities:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Search data is processed locally in your browser</li>
                <li>• No sensitive browsing data is transmitted to our servers</li>
                <li>• Newsletter data is stored securely with industry-standard encryption</li>
                <li>• We do not sell or share your personal information with third parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Browser Extension Permissions</h2>
              <p className="text-gray-300 mb-4">
                IntelHero Scout requires certain browser permissions to function:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• <strong>activeTab</strong>: To search content on the current tab</li>
                <li>• <strong>contextMenus</strong>: To add right-click search options</li>
                <li>• <strong>storage</strong>: To save your preferences locally</li>
                <li>• <strong>tabs</strong>: To open search results in new tabs</li>
              </ul>
              <p className="text-gray-300 mt-4">
                These permissions are used solely for the extension's functionality and not for data collection.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Services</h2>
              <p className="text-gray-300 mb-4">
                IntelHero Scout may integrate with third-party search engines and services. Each service has its own privacy policy:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Google Search</li>
                <li>• DuckDuckGo</li>
                <li>• GitHub</li>
                <li>• Stack Overflow</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Unsubscribe from our newsletter at any time</li>
                <li>• Request deletion of your email address from our records</li>
                <li>• Uninstall the browser extension at any time</li>
                <li>• Contact us with privacy-related questions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update this privacy policy from time to time. We will notify users of any significant changes by updating the date at the top of this policy and, where appropriate, providing additional notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-4 mt-4">
                <p className="text-white">Email: privacy@intelhero.com</p>
                <p className="text-white">Website: https://intelhero.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
