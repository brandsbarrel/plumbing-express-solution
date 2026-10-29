export default function ReviewCard({ review }) {
  return <article className="review-card">
    <img className="review-project-photo" src={`/assets/review-${review.id}-project.webp`} alt={review.imageAlt} width="640" height="320" loading="lazy" />
    <div className="review-card-content">
      <span className="review-quote" aria-hidden="true">“</span>
      <p className="review-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></p>
      <blockquote>{review.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</blockquote>
      <div className="review-author">
        <img src={`/assets/review-${review.id}-avatar.webp`} alt="" width="72" height="72" loading="lazy" />
        <div className="review-author-details"><h3>{review.name}</h3><p>{review.date || 'recommends'}</p></div>
        <span className={`review-platform review-platform-${review.platform.toLowerCase()}`} aria-label={`${review.platform} review`}>{review.platform === 'Google' ? 'G' : 'f'}</span>
      </div>
    </div>
  </article>;
}
