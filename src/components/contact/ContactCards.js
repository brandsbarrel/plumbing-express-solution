import { business } from '../../data.js';
import Icon from '../Icon.js';

export default function ContactCards() {
  return <section className="contact-quick-cards" aria-label="Ways to contact us">
    <article className="contact-quick-card"><span className="contact-pink-icon"><Icon name="phone" /></span><h2>Call Us</h2><p>Speak to our friendly team<br /> for immediate assistance.</p><a href={business.phoneHref}>{business.phone}<span aria-hidden="true">›</span></a></article>
    <article className="contact-quick-card"><span className="contact-pink-icon"><Icon name="mail" /></span><h2>Email Us</h2><p>Send us an enquiry and<br /> we’ll get back to you soon.</p><a className="contact-card-email" href={`mailto:${business.email}`}>{business.email}<span aria-hidden="true">›</span></a></article>
    <article className="contact-quick-card"><span className="contact-pink-icon"><Icon name="pin" /></span><h2>Service Areas</h2><p>We service homes and businesses across Sydney and surrounding areas.</p><a href="#our-location">View Our Service Areas<span aria-hidden="true">›</span></a></article>
  </section>;
}
