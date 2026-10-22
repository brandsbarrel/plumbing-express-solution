import { business } from '../data.js';
import Icon from './Icon.js';

export default function CallButton({ className = '' }) {
  return <a className={`call-button ${className}`} href={business.phoneHref}><Icon name="phone" /><span><span className="call-label">Call Now</span><strong>{business.phone}</strong></span></a>;
}
