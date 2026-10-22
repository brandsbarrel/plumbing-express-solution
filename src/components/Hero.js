import { business } from '../data.js';

export default function Hero() {
  return <section id="home" className="design-hero" aria-labelledby="hero-title">
    <picture>
      <source media="(max-width: 760px)" srcSet="/assets/hero-mobile-complete.webp" width="1024" height="1536" />
      <img className="design-hero-art" src="/assets/hero-desktop-complete.webp" alt="" width="1138" height="460" fetchPriority="high" />
    </picture>
    <div className="sr-only">
      <p>Professional | Reliable | Local</p>
      <h1 id="hero-title">Reliable Plumbing Solutions Done Right</h1>
      <p>Plumbing done right.</p>
      <p>Expert plumbing services for homes and businesses. From leaks and blocked drains to hot water systems and gas fitting — we deliver fast, reliable and professional solutions.</p>
      <p>Servicing homes and business Sydney wide</p>
    </div>
    <a className="artwork-link hero-call-link" href={business.phoneHref} aria-label={`Call now ${business.phone}`} />
    <a className="artwork-link hero-book-link" href="#contact" aria-label="Book a Service" />
    <a className="artwork-link hero-email-link" href={`mailto:${business.email}`} aria-label={`Email ${business.email}`} />
  </section>;
}
