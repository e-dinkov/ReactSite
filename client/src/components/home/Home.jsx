import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Timeless Luxury, Modern Precision</h1>
          <p>
            Discover premium watches from world‑class brands. Crafted for
            elegance, designed for performance.
          </p>
          <div className="hero-buttons">
            <Link to="/catalog" style={{ textDecoration: "none" }}>
              <button className="primary">Explore Collection</button>
            </Link>
            
            <button className="secondary">Learn More</button>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>Luxury Brands</h3>
          <p>Rolex, Omega, Patek Philippe, and more.</p>
        </div>
        <div className="feature-card">
          <h3>Authenticity Guaranteed</h3>
          <p>Every watch is certified and verified.</p>
        </div>
        <div className="feature-card">
          <h3>Worldwide Shipping</h3>
          <p>Fast and secure delivery across the globe.</p>
        </div>
      </section>
    </>
  );
}
