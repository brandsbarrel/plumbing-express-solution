import { services } from '../data.js';
import SectionHeading from './SectionHeading.js';
import ServiceIcon from './ServiceIcon.js';

export default function Services({ showHeading = true }) {
  return <section id="services" className="services section-wrap" aria-labelledby={showHeading ? 'services-title' : undefined} aria-label={showHeading ? undefined : 'Our Services'}>
    {showHeading && <SectionHeading eyebrow="Our Services" description={<><strong>Professional</strong> plumbing services for all your residential and commercial needs.</>}>
      <span id="services-title">Complete <em>Plumbing</em> Solutions</span>
    </SectionHeading>}
    <div className="services-grid">
      {services.map(service => <article className={`service-card service-${service.id}`} key={service.id}>
        <ServiceIcon service={service} className="service-card-icon" />
        <div><h3>{service.title}</h3><p>{service.description}</p></div>
      </article>)}
    </div>
  </section>;
}
