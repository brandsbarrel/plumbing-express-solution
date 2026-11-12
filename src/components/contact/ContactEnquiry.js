import { useState } from 'react';
import { business } from '../../data.js';
import Icon from '../Icon.js';

export default function ContactEnquiry() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = `Name: ${values.get('name')}\nPhone: ${values.get('phone')}\nEmail: ${values.get('email')}\n\n${values.get('message')}`;
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Plumbing service enquiry')}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return <section className="contact-enquiry contact-artwork-enquiry" id="get-in-touch" aria-labelledby="contact-enquiry-title">
    <img src="/assets/contact-get-in-touch-exact.png" alt="" width="941" height="1529" />
    <h2 id="contact-enquiry-title" className="sr-only">Get In Touch</h2>
    <form className="contact-live-form" onSubmit={handleSubmit}>
      <label className="contact-live-field"><Icon name="person" /><span className="sr-only">Full Name</span><input name="name" autoComplete="name" placeholder="Full Name *" required /></label>
      <label className="contact-live-field"><Icon name="phone" /><span className="sr-only">Phone Number</span><input name="phone" type="tel" autoComplete="tel" placeholder="Phone Number *" required /></label>
      <label className="contact-live-field"><Icon name="mail" /><span className="sr-only">Email Address</span><input name="email" type="email" autoComplete="email" placeholder="Email Address *" required /></label>
      <label className="contact-live-field contact-live-message"><Icon name="message" /><span className="sr-only">How can we help?</span><textarea name="message" placeholder="How can we help? *" required /></label>
      <button className="contact-live-submit" type="submit" aria-label="Submit enquiry"><span className="sr-only">Submit enquiry</span></button>
    </form>
    {prepared && <p className="sr-only" role="status">Your enquiry is ready in your email app.</p>}
  </section>;
}
