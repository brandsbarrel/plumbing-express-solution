import { business } from '../data.js';

export default function ContactSection() {
  return <footer id="contact" className="design-footer" aria-labelledby="contact-title">
    <div className="footer-artwork">
      <img src="/assets/footer-complete.webp" alt="" width="941" height="1672" loading="lazy" />
      <div className="sr-only">
        <p>Get in touch</p>
        <h2 id="contact-title">Book a Service Today</h2>
        <p>Need a reliable plumber? Get in touch with Plumbing Express Solutions for fast, professional service. We’re here to help!</p>
        <p>Plumbing done right.</p>
      </div>
      <a className="artwork-link footer-phone-link" href={business.phoneHref} aria-label={`Call ${business.phone}`} />
      <a className="artwork-link footer-email-link" href={`mailto:${business.email}`} aria-label={`Email ${business.email}`} />
    </div>
  </footer>;
}
