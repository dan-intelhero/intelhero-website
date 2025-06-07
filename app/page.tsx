export default function Home() {
  return (
    <div className="min-h-screen bg-white text-blue-900 dark:bg-slate-900 dark:text-teal-500">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IH</span>
            </div>
            <span className="text-xl font-bold">IntelHero</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#scout"
              className="text-teal-500 hover:text-teal-700"
            >
              Scout
            </a>
            <a
              href="#intelhero"
              className="text-teal-500 hover:text-teal-700"
            >
              IntelHero
            </a>
            <a
              href="#signup"
              className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="scout"
        className="container mx-auto px-6 py-16 text-center"
      >
        <h1 className="text-5xl font-bold mb-6">
          Welcome to IntelHero
        </h1>
        <p className="text-xl mb-12">
          Your competitive intelligence platform and home for Scout users.
        </p>
        <a
          href="#signup"
          className="bg-teal-500 hover:bg-teal-700 text-white px-8 py-4 rounded-lg"
        >
          Join the Waitlist
        </a>
      </section>

      {/* IntelHero Overview */}
      <section
        id="intelhero"
        className="container mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold mb-6">
          What is IntelHero?
        </h2>
        <p className="text-lg mb-6">
          IntelHero automatically monitors competitor websites and alerts you to
          changes — like new blog posts, job listings, and leadership updates.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-teal-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Step 1</h3>
            <p>Connect your competitors&apos; websites.</p>
          </div>
          <div className="p-6 bg-teal-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Step 2</h3>
            <p>IntelHero monitors changes automatically.</p>
          </div>
          <div className="p-6 bg-teal-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Step 3</h3>
            <p>Receive alerts and stay ahead.</p>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section
        id="signup"
        className="container mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Join the Waitlist
        </h2>
        <p className="text-lg mb-6">
          Sign up to get early access to IntelHero and Scout tips.
        </p>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-700 text-white py-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-teal-500 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 IntelHero. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
