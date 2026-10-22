import { benefits } from '../data.js';
import SectionHeading from './SectionHeading.js';

export default function WhyChooseUs() {
  return <section className="why-us section-wrap" aria-labelledby="why-title"><SectionHeading eyebrow="Why Choose Us" description="We’re committed to delivering high-quality plumbing services with a focus on reliability, professionalism and customer satisfaction."><span id="why-title">Your Trusted <em>Local</em> Plumbing Experts</span></SectionHeading><div className="benefits-grid">{benefits.map(benefit => <article className={`benefit-card benefit-${benefit.id}`} key={benefit.id}><img className="benefit-photo" src={`/assets/benefit-${benefit.id}.webp`} alt="" loading="lazy" /><div className="benefit-copy"><img className="benefit-icon" src={`/assets/icon-${benefit.id}.webp`} alt="" width="110" height="110" loading="lazy" /><div><h3>{benefit.title}</h3><p>{benefit.description}</p></div></div></article>)}</div></section>;
}
