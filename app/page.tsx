export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-gray text-primary flex flex-col">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 bg-header border-b border-custom flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-dark-teal rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IH</span>
          </div>
          <span className="text-xl font-bold text-primary">IntelHero</span>
        </div>
        <div className="flex items-center space-x-6">
          <a
            href="#privacy"
            className="text-light-teal hover:text-dark-teal font-medium transition-colors"
          >
            Privacy
          </a>
          <a
            href="#download"
            className="text-light-teal hover:text-dark-teal font-medium transition-colors"
          >
            Download Scout
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center bg-background flex-1 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Search Faster with IntelHero Scout
        </h1>
        <p className="text-xl mb-8 text-secondary max-w-2xl mx-auto">
          The ultimate multi-site search browser extension that transforms your web
          research workflow. Search across Google, YouTube, Reddit, Wikipedia, and
          more with a single query.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <a
            href="#download"
            className="bg-light-teal hover:bg-dark-teal text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get Scout Free
          </a>
          <a
            href="#learn-more"
            className="bg-secondary-gray hover:bg-header text-primary px-8 py-4 rounded-lg font-semibold border border-custom transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 bg-background">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary text-center">
          Powerful Features for Researchers
        </h2>
        <p className="text-lg mb-12 text-secondary text-center max-w-2xl mx-auto">
          Everything you need to supercharge your web search and research workflow
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-card rounded-lg border border-custom shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Multi-Site Search
            </h3>
            <p className="text-secondary">
              Search across multiple sites simultaneously with a single query. No
              more opening multiple tabs.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-custom shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Smart URL Detection
            </h3>
            <p className="text-secondary">
              Paste any search URL and Scout automatically detects the pattern to
              create custom search sites.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-custom shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Keyboard Shortcuts
            </h3>
            <p className="text-secondary">
              Lightning-fast access with single-letter shortcuts. Type 'a' for
              Google, 'b' for YouTube, and more.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-custom shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Context Menu Search
            </h3>
            <p className="text-secondary">
              Right-click any selected text on any webpage to search across all
              your configured sites.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-custom shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">Dark Mode</h3>
            <p className="text-secondary">
              Modern, eye-friendly dark theme that seamlessly adapts to your
              system preferences.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-custom shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Sync Across Devices
            </h3>
            <p className="text-secondary">
              Keep your settings and custom sites synchronized across all your
              devices automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-6 py-16 text-center bg-background">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Ready to Transform Your Search Experience?
        </h2>
        <p className="text-lg mb-8 text-secondary max-w-2xl mx-auto">
          Join thousands of users who have already supercharged their web
          research workflow with IntelHero Scout.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <a
            href="#chrome"
            className="bg-light-teal hover:bg-dark-teal text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Install for Chrome
          </a>
          <a
            href="#edge"
            className="bg-light-teal hover:bg-dark-teal text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Install for Edge
          </a>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="container mx-auto px-6 py-16 text-center bg-background">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Stay Updated
        </h2>
        <p className="text-lg mb-6 text-secondary">
          Get notified about new features and updates
        </p>
        <form
          action="#subscribe"
          method="POST"
          className="max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-custom rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-light-teal"
            required
          />
          <button
            type="submit"
            className="w-full bg-light-teal hover:bg-dark-teal text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-dark-teal text-white py-6 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">IH</span>
            <span className="font-semibold">IntelHero Scout</span>
          </div>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#support" className="hover:underline">
              Support
            </a>
          </div>
          <div>
            <p className="text-sm">&copy; 2025 IntelHero. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
