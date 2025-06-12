"use client"

import { Link } from "react-router-dom"
import "./AboutUs.css"

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Dinesh Laal's Shop</h1>
          <p>Serving generations with quality and trust for over 180 years</p>
        </div>
      </div>

      <div className="about-container">
        <section className="about-section">
          <div className="about-section-content">
            <h2>Our Story</h2>
            <p>
              With a history spanning more than 180 years and four generations, Dinesh Laal's Shop is one of Nepal's
              oldest and most trusted family-run businesses. It began as a home-based operation, founded in the name of
              Jaki Gopal (JG), offering cleaned and packed goods with home delivery—a rare service for its time.
            </p>
            <p>
              The shop's values were built by generations of hard work and integrity. In 2048 B.S., Dinesh Laal joined
              his father in running the store. Over the past 25 years, he has taken full responsibility and continued to
              uphold its rich legacy—even as his brothers moved abroad.
            </p>
            <p>
              Today, the shop remains known for its unmatched quality: local rice from Nala and Panauti, traditionally
              made ghee passed down through three generations, and mustard oil pressed from pure Nepali seeds. Many of
              these items are still prepared in-house, with family members personally sourcing and producing the goods.
              This is more than a grocery shop—it's a heritage of trust, purity, and local pride.
            </p>
          </div>
          <div className="about-section-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-12%20at%2017.54.19_7fbe2e50.jpg-yrAA83mHsJJdC4NLdp3w3Vfv7OrD6q.jpeg"
              alt="Dinesh Laal in his shop"
            />
          </div>
        </section>

        <section className="about-section reverse">
          <div className="about-section-content">
            <h2>Our Mission</h2>
            <p>
              At Dinesh Laal's Shop, our mission is rooted in more than just selling groceries — it is about preserving
              a legacy. We are committed to offering products that are not only fresh and local but also carry the
              richness of Nepal's agricultural tradition and cultural heritage.
            </p>
            <p>
              Our goal is to provide every household with honest, authentic, and health-conscious food. From hand-milled
              grains and pure ghee to traditional mustard oil and heirloom rice, we focus on delivering food that people
              can trust and feel proud to serve at their tables.
            </p>
            <p>
              We work closely with millers, and local producers to ensure that everything we offer is ethically sourced
              and environmentally responsible. By supporting local supply chains, we not only ensure quality but also
              help strengthen our community and encourage sustainable growth across generations.
            </p>
          </div>
          <div className="about-section-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-12%20at%2017.54.24_38908018.jpg-XQwMnOB8yZk0z3B7F0odiUfnzAz7W7.jpeg"
              alt="Store shelves with traditional products"
            />
          </div>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Quality</h3>
              <p>
                Every item is selected or produced with care—from hand-milled grains to pure oils. Our customers trust
                us for uncompromised quality, every time.
              </p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Community</h3>
              <p>
                We've served generations of families in Kathmandu and beyond. Supporting local producers and offering
                real value to our customers is part of our identity.
              </p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Trust</h3>
              <p>
                Our name carries the trust of four generations. Customers know that what we offer is honest, tested, and
                true to its roots.
              </p>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>Service</h3>
              <p>
                From personalized advice to doorstep delivery, we provide customer care that's been part of our culture
                since day one.
              </p>
            </div>
          </div>
        </section>

        <section className="about-gallery">
          <h2>Our Store</h2>
          <div className="about-gallery-grid">
            <div className="about-gallery-item">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-12%20at%2013.02.39_98fb68e4.jpg-QLZZ8PbPBzXrAIojqbhgO9KjUqvcn0.jpeg"
                alt="Complete store interior view"
              />
            </div>
            <div className="about-gallery-item">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-12%20at%2017.54.23_5674b4e9.jpg-HnBn0BaPaViafedJjpTpN7C4lFqF09.jpeg"
                alt="Organized grocery shelves"
              />
            </div>
            <div className="about-gallery-item">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-12%20at%2017.54.28_ccab0cd6.jpg-3TQaxHW2cO9AXqKJvxszK6LPOCOHwh.jpeg"
                alt="Traditional lentils and pulses in sacks"
              />
            </div>
            <div className="about-gallery-item">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-12%20at%2017.54.29_ba96b856.jpg-BJSstzO6Hh2qS62KBM2EAL00iJ1Y2W.jpeg"
                alt="Variety of beans and legumes storage"
              />
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-cta-content">
            <h2>Visit Us Today</h2>
            <p>
              Located in the heart of Kathmandu, Dinesh Laal's Shop is open seven days a week. Stop by and experience a
              legacy of quality, heritage, and hospitality.
            </p>
            <div className="about-cta-buttons">
              <Link to="/products" className="about-cta-button primary">
                Shop Now
              </Link>
              <Link to="/contact" className="about-cta-button secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs
