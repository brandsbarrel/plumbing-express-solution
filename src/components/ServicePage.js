import CallButton from './CallButton.js';
import { business } from '../data.js';

export default function ServicePage({ service }) {
  return <section className="service-detail section-wrap" aria-labelledby="service-page-title">
    <nav className="service-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/services">Services</a><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span></nav>
    <div className="service-detail-content">
      <img className="service-detail-icon" src={`/assets/service-${service.id}.webp`} alt="" width="140" height="140" />
      <div><p className="service-detail-eyebrow">Our Services</p><h1 id="service-page-title">{service.title}</h1><p className="service-detail-description">{service.description}</p><p className="service-detail-enquiry">Contact Plumbing Express Solutions to discuss your {service.title.toLowerCase()} needs for your home or business.</p><div className="service-detail-actions"><CallButton /><a className="book-button" href={`mailto:${business.email}?subject=${encodeURIComponent(`${service.title} enquiry`)}`}>Enquire about this service</a></div></div>
    </div>
  </section>;
}
