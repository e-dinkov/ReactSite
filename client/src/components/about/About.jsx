export default function About() {
    return (
      <section id="about-page">
        <div class="about-hero">
          <h1>About WatchHub</h1>
          <p>Where timeless craftsmanship meets modern innovation.</p>
        </div>

        <div class="about-content">
          <div class="about-card">
            <h2>Our Story</h2>
            <p>
              WatchHub was founded with a single mission — to bring the world’s
              finest timepieces to collectors and enthusiasts who value
              precision, heritage, and design. Every watch we offer represents
              decades of craftsmanship and innovation.
            </p>
          </div>

          <div class="about-card">
            <h2>What We Stand For</h2>
            <ul>
              <li>Authenticity & Certification</li>
              <li>Luxury Without Compromise</li>
              <li>Exceptional Customer Experience</li>
              <li>Worldwide Trusted Delivery</li>
            </ul>
          </div>

          <div class="about-card">
            <h2>Our Vision</h2>
            <p>
              We envision a world where owning a luxury watch is not just a
              purchase, but a statement of passion, achievement, and timeless
              style.
            </p>
          </div>
        </div>

        <div class="about-stats">
          <div class="stat">
            <span class="number">10K+</span>
            <span class="label">Happy Clients</span>
          </div>
          <div class="stat">
            <span class="number">50+</span>
            <span class="label">Luxury Brands</span>
          </div>
          <div class="stat">
            <span class="number">100%</span>
            <span class="label">Authentic Watches</span>
          </div>
        </div>

        <div class="about-cta">
          <h2>Join the WatchHub Experience</h2>
          <p>
            Discover a collection crafted for those who appreciate excellence.
          </p>
          <a href="/catalog" class="cta-button">
            Explore Collection
          </a>
        </div>
      </section>
    );
}