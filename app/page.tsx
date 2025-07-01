'use client';

import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import { trackButtonClick, trackSignup, trackPageVisit } from './lib/gtag';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // Track page visit when component mounts
    trackPageVisit('home');
  }, []);

  const handleScoutClick = () => {
    trackButtonClick('scout_chrome_store');
  };

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
    trackButtonClick('scout_video_play');
  };

  const handleEarlyAccessSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (response.ok) {
        trackSignup();
        setSubmitMessage(data.message);
        form.reset();
      } else {
        setSubmitMessage(data.error || 'Oops! There was a problem. Please try again.');
      }
    } catch {
      setSubmitMessage('Oops! There was a problem. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
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
          {/* Video Preview - Centered and 2/3 size */}
          <div className={styles.scoutVideoContainer}>
            <div className={styles.videoPreviewWrapper} onClick={handleVideoClick}>
              <Image
                src="/promo1.png"
                alt="Scout Extension Demo - Click to Play"
                width={800}
                height={450}
                className={styles.videoPreview}
              />
              <div className={styles.playButton}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="30" fill="rgba(0, 0, 0, 0.7)" />
                  <polygon points="24,18 24,42 42,30" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Scout Information - Side by side layout below video */}
          <div className={styles.scoutInfoSection}>
            <div className={styles.scoutImageWrapper}>
              <Image
                src="/scout-screenshot.png"
                alt="Scout Extension Screenshot"
                width={400}
                height={300}
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
                <a 
                  href="https://chromewebstore.google.com/detail/intelhero-scout/biakpjmflecnjfjmbnnhbagmjijpmbop" 
                  className={styles.scoutStoreLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleScoutClick}
                >
                  Get it on Chrome Extension Store
                </a>
                {/* <a href="#" className={styles.scoutStoreLink} target="_blank" rel="noopener noreferrer">
                  Get it on Edge Add-ons
                </a> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Modal - Inline for now */}
        {isVideoModalOpen && (
          <div 
            className={styles.modalOverlay} 
            onClick={() => setIsVideoModalOpen(false)}
          >
            <div 
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeButton} 
                onClick={() => setIsVideoModalOpen(false)}
              >
                ×
              </button>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/3q2JyguBlno?autoplay=1`}
                  title="Scout Extension Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={styles.modalVideo}
                />
              </div>
            </div>
          </div>
        )}
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
              width={400}
              height={400}
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
            <form className={styles.earlyAccessForm} onSubmit={handleEarlyAccessSubmit} method="POST">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={styles.earlyAccessInput}
                required
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className={styles.earlyAccessButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing Up...' : 'Request Early Access'}
              </button>
              {submitMessage && (
                <p className={submitMessage.includes('Thanks') ? styles.successMessage : styles.errorMessage}>
                  {submitMessage}
                </p>
              )}
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
              width={50}
              height={50}
              className={styles.footerMascot}
            />
            <span className={styles.footerTitle}>IntelHero</span>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
          </div>
          <div className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} IntelHero. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
