import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import DiscountBanner from './components/DiscountBanner.js';
import WhyChooseUs from './components/WhyChooseUs.js';
import ContactSection from './components/ContactSection.js';
import ServicePage from './components/ServicePage.js';
import { services } from './data.js';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const service = services.find(item => path === `/services/${item.id}`);
  const isServicesIndex = path === '/services';
  const isHome = path === '/';
  document.title = `${service ? `${service.title} | ` : isServicesIndex ? 'Our Services | ' : ''}Plumbing Express Solutions | Plumbing done right.`;
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{isHome ? <><Hero /><Services /><DiscountBanner /><WhyChooseUs /></> : service ? <><ServicePage service={service} /><Services /></> : isServicesIndex ? <div className="services-index"><Services /></div> : <section className="service-detail section-wrap"><h1>Page not found</h1><p>Please choose a service or return to the Home page.</p><a className="book-button" href="/">Back to Home</a></section>}<ContactSection /></main></>;
}
