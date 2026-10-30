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
  return <section className="contact-enquiry contact-white-panel" id="get-in-touch" aria-labelledby="contact-enquiry-title">
    <div className="contact-enquiry-copy"><p className="eyebrow">Send Us a Message</p><h2 id="contact-enquiry-title">Get In <em>Touch</em></h2><p>Fill in the form and our team will get back to you as soon as possible. We’re here to help with all your plumbing needs.</p></div>
    <form className="contact-page-form" onSubmit={handleSubmit}>
      <label className="contact-field"><Icon name="person" /><span className="sr-only">Full Name</span><input name="name" autoComplete="name" placeholder="Full Name *" required /></label>
      <label className="contact-field"><Icon name="phone" /><span className="sr-only">Phone Number</span><input name="phone" type="tel" autoComplete="tel" placeholder="Phone Number *" required /></label>
      <label className="contact-field"><Icon name="mail" /><span className="sr-only">Email Address</span><input name="email" type="email" autoComplete="email" placeholder="Email Address *" required /></label>
      <label className="contact-field contact-message-field"><Icon name="message" /><span className="sr-only">How can we help?</span><textarea name="message" rows="3" placeholder="How can we help? *" required /></label>
      <button className="contact-submit" type="submit"><Icon name="send" />Submit Enquiry<span aria-hidden="true">›</span></button>
      <p className="contact-form-note">Submitting opens your email app with your enquiry ready to send.</p>
      {prepared && <p className="contact-form-feedback" role="status">Your enquiry is ready in your email app. Send the email to complete your request, or call <a href={business.phoneHref}>{business.phone}</a>.</p>}
    </form>
  </section>;
}
