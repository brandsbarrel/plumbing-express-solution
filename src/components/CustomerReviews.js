import { useState } from 'react';
import { reviews } from '../reviews.js';
import ReviewCard from './ReviewCard.js';

export default function CustomerReviews() {
  const [paused, setPaused] = useState(false);
  return <section className="customer-reviews" id="reviews" aria-labelledby="reviews-title">
    <div className="reviews-heading section-wrap">
      <p className="eyebrow">Customer Reviews</p>
      <div className="reviews-title-wrap"><h2 id="reviews-title">What Our<br /><em>Customers</em> Say</h2><p className="reviews-trust-note">Trusted by ♡<br />Local Families</p></div>
      <p className="reviews-description">Real feedback from local homeowners and<br className="reviews-desktop-break" /> businesses who trust Plumbing Express Solutions.</p>
    </div>
    <div className="reviews-controls section-wrap"><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? '▶ Play reviews' : 'Ⅱ Pause reviews'}</button></div>
    <div className={`reviews-marquee${paused ? ' is-paused' : ''}`} role="region" aria-label="Customer reviews, scrolling horizontally" tabIndex="0">
      <div className="reviews-track">
        <div className="reviews-group">{reviews.map(review => <ReviewCard key={review.id} review={review} />)}</div>
        <div className="reviews-group reviews-group-copy" aria-hidden="true">{reviews.map(review => <ReviewCard key={review.id} review={review} />)}</div>
      </div>
    </div>
  </section>;
}
