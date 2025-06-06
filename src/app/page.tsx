'use client';

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Newsletter signup error:', err);
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IH</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">IntelHero</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Privacy
            </Link>
            <a
              href="#download"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Download Scout
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Search Faster with{" "}
            <span className="text-blue-600 dark:text-blue-400">IntelHero Scout</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            The ultimate multi-site search browser extension that transforms your web research workflow. 
            Search across Google, YouTube, Reddit, Wikipedia, and more with a single query.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center justify-center"
            >
              Get Scout Free
            </a>
            <a
              href="#features"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Researchers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to supercharge your web search and research workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Site Search",
                description: "Search across multiple sites simultaneously with a single query. No more opening multiple tabs.",
                color: "blue"
              },
              {
                title: "Smart URL Detection", 
                description: "Paste any search URL and Scout automatically detects the pattern to create custom search sites.",
                color: "green"
              },
              {
                title: "Keyboard Shortcuts",
                description: "Lightning-fast access with single-letter shortcuts. Type 'a' for Google, 'b' for YouTube, and more.",
                color: "purple"
              },
              {
                title: "Context Menu Search",
                description: "Right-click any selected text on any webpage to search across all your configured sites.",
                color: "red"
              },
              {
                title: "Dark Mode",
                description: "Modern, eye-friendly dark theme that seamlessly adapts to your system preferences.",
                color: "yellow"
              },
              {
                title: "Sync Across Devices",
                description: "Keep your settings and custom sites synchronized across all your devices automatically.",
                color: "indigo"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
                <div className={`w-12 h-12 bg-${feature.color}-100 dark:bg-${feature.color}-900 rounded-lg flex items-center justify-center mb-6`}>
                  <div className={`w-6 h-6 bg-${feature.color}-600 dark:bg-${feature.color}-400 rounded`}></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Search Experience?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of users who have already supercharged their web research workflow with IntelHero Scout.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://chrome.google.com/webstore"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center justify-center"
            >
              Install for Chrome
            </a>
            <a
              href="https://microsoftedge.microsoft.com/addons"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 px-10 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center justify-center"
            >
              Install for Edge
            </a>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get notified about new features and updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-medium transition-colors"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
              {message && (
                <p className={`text-sm text-center ${message.includes('Thank you') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">IH</span>
              </div>
              <span className="font-bold">IntelHero Scout</span>
            </div>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <a href="mailto:support@intelhero.com" className="text-gray-300 hover:text-white">
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 IntelHero. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
