export default function ReviewCard({ review, onReadMore, duplicate = false }) {
  return <article className="review-card">
    <img className="review-project-photo" src={`/assets/review-${review.id}-project.webp`} alt={review.imageAlt} width="640" height="320" loading="lazy" />
    <div className="review-card-content">
      <span className="review-quote" aria-hidden="true">“</span>
      <p className="review-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></p>
      <blockquote className="review-excerpt"><p>{review.paragraphs.join(' ')}</p></blockquote>
      <button type="button" className="review-read-more" onClick={() => onReadMore(review)} tabIndex={duplicate ? -1 : 0} aria-haspopup="dialog" aria-label={`Read the full review from ${review.name}`}>Read more <span aria-hidden="true">→</span></button>
      <div className="review-author">
        <img src={`/assets/review-${review.id}-avatar.webp`} alt="" width="72" height="72" loading="lazy" />
        <div className="review-author-details"><h3>{review.name}</h3><p>{review.date || 'recommends'}</p></div>
        <span className={`review-platform review-platform-${review.platform.toLowerCase()}`} aria-label={`${review.platform} review`}>{review.platform === 'Google' ? 'G' : 'f'}</span>
      </div>
    </div>
  </article>;
}
