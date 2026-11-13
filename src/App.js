import Header from './components/Header.js';
import Hero from './components/Hero.js';
import TrustBanner from './components/TrustBanner.js';
import Services from './components/Services.js';
import DiscountBanner from './components/DiscountBanner.js';
import WhyChooseUs from './components/WhyChooseUs.js';
import CustomerReviews from './components/CustomerReviews.js';
import InstagramReviews from './components/InstagramReviews.js';
import ContactSection from './components/ContactSection.js';
import ServicesIntro from './components/ServicesIntro.js';
import ServicesPageHeader from './components/ServicesPageHeader.js';
import ContactPage from './components/ContactPage.js';
import WorkProcess from './components/WorkProcess.js';
import HomeUrgentHelp from './components/HomeUrgentHelp.js';
import HomeLocation from './components/HomeLocation.js';
import AppreciatedCustomers from './components/AppreciatedCustomers.js';
import ContactLocation from './components/contact/ContactLocation.js';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const isServicesIndex = path === '/services';
  const isHome = path === '/';
  const isContact = path === '/contact';
  document.title = `${isServicesIndex ? 'Our Services | ' : isContact ? 'Contact Us | ' : ''}Plumbing Express Solutions | Plumbing done right.`;
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{isHome ? <><Hero /><TrustBanner /><Services /><DiscountBanner /><WhyChooseUs /><CustomerReviews /><InstagramReviews /><WorkProcess /><HomeUrgentHelp /><HomeLocation /></> : isContact ? <ContactPage /> : isServicesIndex ? <div className="services-index"><ServicesPageHeader /><Services showHeading={false} /><ServicesIntro /><WorkProcess /><HomeUrgentHelp servicePage /><ContactLocation showMap={false} /><AppreciatedCustomers /></div> : <section className="service-detail section-wrap"><h1>Page not found</h1><p>Please return to the Home page.</p><a className="book-button" href="/">Back to Home</a></section>}<ContactSection /></main></>;
}
