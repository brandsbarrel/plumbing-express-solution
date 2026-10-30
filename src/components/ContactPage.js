import ContactHero from './contact/ContactHero.js';
import ContactCards from './contact/ContactCards.js';
import ContactEnquiry from './contact/ContactEnquiry.js';
import ContactLocation from './contact/ContactLocation.js';

export default function ContactPage() {
  return <div className="contact-page"><ContactHero /><div className="contact-page-sections section-wrap"><ContactCards /><ContactEnquiry /><ContactLocation /></div></div>;
}
