import { useEffect, useRef } from 'react';

export default function ReviewDialog({ review, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return <dialog className="review-dialog" ref={dialogRef} aria-labelledby="review-dialog-title" onClose={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="review-dialog-inner">
      <div className="review-dialog-header"><h2 id="review-dialog-title">{review.name}’s review</h2><button type="button" className="review-dialog-close" aria-label="Close full review" onClick={onClose} autoFocus>×</button></div>
      <p className="review-dialog-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></p>
      <blockquote>{review.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</blockquote>
      <p className="review-dialog-source">{review.platform}{review.date && ` · ${review.date}`}</p>
    </div>
  </dialog>;
}
