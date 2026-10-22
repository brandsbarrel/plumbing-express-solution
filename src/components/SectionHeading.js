export default function SectionHeading({ eyebrow, children, description }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{children}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
