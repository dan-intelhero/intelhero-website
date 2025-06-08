import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary-gray text-primary flex flex-col">
      {/* Section 1: Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <Image
            src="/mascot.png"
            alt="IntelHero Mascot"
            width={135}
            height={153}
            className={styles.mascot}
          />
          <div className={styles.heroText}>
            <h1 className={styles.intelHeroTitle}>
              <span className={styles.intel}>Intel</span>
              <span className={styles.hero}>Hero</span>
            </h1>
            <p className={styles.tagline}>Keep track of companies you care about.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Introduce Scout */}
      <section className={styles.scoutSection}>
        <div className={styles.scoutContent}>
          <div className={styles.scoutImageWrapper}>
            <Image
              src="/scout-screenshot.png"
              alt="Scout Extension Screenshot"
              width={600}
              height={400}
              className={styles.scoutImage}
            />
          </div>
          <div className={styles.scoutInfo}>
            <h2 className={styles.scoutTitle}>Meet Scout</h2>
            <ul className={styles.scoutFeatures}>
              <li>Instantly search across Google, YouTube, Reddit, Wikipedia, and more</li>
              <li>Lightning-fast keyboard shortcuts for power users</li>
              <li>Right-click context menu for quick searches</li>
              <li>Beautiful dark mode and seamless sync across devices</li>
            </ul>
            <div className={styles.scoutLinks}>
              <a href="#" className={styles.scoutStoreLink} target="_blank" rel="noopener noreferrer">
                Get it on Chrome Extension Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Introduce IntelHero */}
      <section className={styles.intelHeroSection}>
        <div className={styles.intelHeroContent}>
          <div className={styles.intelHeroInfo}>
            <h2 className={styles.intelHeroSectionTitle}>
              Introducing IntelHero <span className={styles.tagline}>(coming soon!)</span>
            </h2>
            <p className={styles.intelHeroDescription}>
              Automated competitor monitoring made easy. IntelHero keeps you updated on everything your competitors are doing—so you never miss a beat.
            </p>
            <ul className={styles.intelHeroFeatures}>
              <li className={styles.intelHeroFeatureBox}>Management changes</li>
              <li className={styles.intelHeroFeatureBox}>Pricing updates</li>
              <li className={styles.intelHeroFeatureBox}>New blog posts</li>
              <li className={styles.intelHeroFeatureBox}>New YouTube videos</li>
              <li className={styles.intelHeroFeatureBox}>Website changes</li>
              <li className={styles.intelHeroFeatureBox}>Product launches</li>
            </ul>
          </div>
          <div className={styles.intelHeroGraphicWrapper}>
            <Image
              src="/globe.svg"
              alt="IntelHero Monitoring Graphic"
              width={260}
              height={260}
              className={styles.intelHeroGraphic}
            />
          </div>
        </div>
      </section>

      {/* Section 4: Get Early Access */}
      <section className={styles.earlyAccessSection}>
        <div className={styles.earlyAccessContent}>
          <div className={styles.earlyAccessInfo}>
            <h2 className={styles.earlyAccessTitle}>Get Early Access to IntelHero</h2>
            <p className={styles.earlyAccessDescription}>
              Be the first to try IntelHero and get notified when we launch. Sign up below for early access!
            </p>
            <form className={styles.earlyAccessForm} action="#" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={styles.earlyAccessInput}
                required
              />
              <button type="submit" className={styles.earlyAccessButton}>
                Request Early Access
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Image
              src="/mascot.png"
              alt="IntelHero Mascot"
              width={135}
              height={153}
              className={styles.footerMascot}
            />
            <span className={styles.footerTitle}>IntelHero</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="/privacy" className={styles.footerLink}>Privacy</a>
          </div>
          <div className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} IntelHero. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
