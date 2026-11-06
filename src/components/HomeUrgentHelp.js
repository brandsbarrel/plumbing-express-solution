import { business } from '../data.js';

export default function HomeUrgentHelp() {
  return <section className="home-urgent-help section-wrap" aria-labelledby="home-urgent-title"><div className="home-urgent-artwork"><img src="/assets/home-urgent-help.webp" alt="" width="1443" height="1090" loading="lazy" /><div className="sr-only"><p>Need urgent plumbing help?</p><h2 id="home-urgent-title">We’re just a phone call away.</h2><p>Fast response. Professional service. Available 24/7.</p></div><a className="artwork-link home-urgent-call" href={business.phoneHref} aria-label={`Call now ${business.phone}`} /></div></section>;
}
