const instagramUrl = 'https://www.instagram.com/plumbingexpresssolutions?mdxt=MWV6cjhnZnQzejZ2cg==';

export default function InstagramReviews() {
  return <section className="instagram-reviews section-wrap" aria-labelledby="instagram-reviews-title">
    <div className="instagram-panel">
      <h2 id="instagram-reviews-title"><span className="instagram-spark instagram-spark-left" aria-hidden="true" />See more customer<br />reviews on Instagram.<span className="instagram-spark instagram-spark-right" aria-hidden="true" /></h2>
      <a className="instagram-review-button" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="View more customer reviews on Instagram (opens in a new tab)">
        <span className="instagram-button-icon"><svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="5" y="5" width="38" height="38" rx="11" stroke="currentColor" strokeWidth="4" /><circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="4" /><circle cx="35" cy="13" r="2.5" fill="currentColor" /></svg></span>
        <span>View on Instagram</span><svg className="instagram-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m8 3 9 9-9 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </a>
    </div>
  </section>;
}
