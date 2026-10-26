import { business } from '../data.js';

export default function DiscountBanner() {
  return <section className="discount-voucher section-wrap" aria-label="10 percent discount offer">
    <div className="discount-voucher-artwork">
      <img src="/assets/discount-voucher.webp" alt="Mention this voucher to your professional plumber for a 10% discount. Limited time offer. Professional service. Save on your next service." width="1122" height="1402" loading="lazy" />
      <a className="artwork-link voucher-book-link" href="#contact" aria-label="Book a service and mention your 10 percent discount" />
      <a className="artwork-link voucher-call-link" href={business.phoneHref} aria-label={`Call ${business.phone}`} />
    </div>
  </section>;
}
