import { business } from '../../data.js';

export default function ContactCards() {
  return <section className="contact-quick-cards" aria-label="Ways to contact us">
    <article className="contact-quick-card contact-card-artwork">
      <img src="/assets/contact-call-card.jpeg" alt="Call us. Speak to our friendly team for immediate assistance. 1800 951 942." width="1448" height="1086" />
      <a href={business.phoneHref} aria-label={`Call ${business.phone}`} />
    </article>
    <article className="contact-quick-card contact-card-artwork">
      <img src="/assets/contact-email-card.jpeg" alt={`Email us. Send us an enquiry and we'll get back to you soon. ${business.email}.`} width="1446" height="1087" />
      <a href={`mailto:${business.email}`} aria-label={`Email ${business.email}`} />
    </article>
  </section>;
}
