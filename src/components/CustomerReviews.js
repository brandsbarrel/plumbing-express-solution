import { useState } from 'react';
import { reviews } from '../reviews.js';
import ReviewCard from './ReviewCard.js';
import ReviewDialog from './ReviewDialog.js';

export default function CustomerReviews() {
  const [paused, setPaused] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  return <section className="customer-reviews" id="reviews" aria-labelledby="reviews-title">
    <div className="reviews-heading section-wrap">
      <p className="eyebrow">Customer Reviews</p>
      <div className="reviews-title-wrap"><h2 id="reviews-title">What Our<br /><em>Customers</em> Say</h2><p className="reviews-trust-note">Trusted by ♡<br />Local Families</p></div>
      <p className="reviews-description">Real feedback from local homeowners and<br className="reviews-desktop-break" /> businesses who trust Plumbing Express Solutions.</p>
    </div>
    <div className="reviews-controls section-wrap"><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? '▶ Play reviews' : 'Ⅱ Pause reviews'}</button></div>
    <div className={`reviews-marquee${paused || selectedReview ? ' is-paused' : ''}`} role="region" aria-label="Customer reviews, scrolling horizontally" tabIndex="0">
      <div className="reviews-track">
        <div className="reviews-group">{reviews.map(review => <ReviewCard key={review.id} review={review} onReadMore={setSelectedReview} />)}</div>
        <div className="reviews-group reviews-group-copy" aria-hidden="true">{reviews.map(review => <ReviewCard key={review.id} review={review} onReadMore={setSelectedReview} duplicate />)}</div>
      </div>
    </div>
    {selectedReview && <ReviewDialog review={selectedReview} onClose={() => setSelectedReview(null)} />}
  </section>;
}
