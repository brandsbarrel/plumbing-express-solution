const projects = [
  { id: 'bathroom', title: 'Bathroom Renovation', description: 'Modern finishes and expert installation.', alt: 'Completed bathroom renovation with a glass shower and vanity', icon: 'shower' },
  { id: 'drainage', title: 'Drainage / Pipe Repair', description: 'Fast, reliable repairs to keep your property flowing properly.', alt: 'New drainage pipe installed in an excavated trench', icon: 'wrench' },
  { id: 'shower', title: 'Shower Installation', description: 'Quality fittings and professional workmanship.', alt: 'New shower fittings installed in a white tiled shower', icon: 'shower' },
];
const benefits = [
  { id: 'response', title: 'Fast Response', description: 'When you need us most.' },
  { id: 'licensed', title: 'Licensed Professionals', description: 'Qualified and experienced.' },
  { id: 'quality', title: 'Quality Workmanship', description: 'Solutions built to last.' },
];

function ProjectIcon({ name }) {
  return <span className="project-icon" aria-hidden="true">{name === 'wrench' ? <img src="/assets/service-installations.webp" alt="" /> : <svg viewBox="0 0 40 40" fill="currentColor"><path d="M17 7a3 3 0 0 1 6 0v5c7 1 11 6 11 11H6c0-5 4-10 11-11V7Z" /><path d="M9 27h3v4H9zm9 0h3v4h-3zm9 0h3v4h-3zM9 34h3v4H9zm9 0h3v4h-3zm9 0h3v4h-3z" /></svg>}</span>;
}

export default function ServicesIntro() {
  return <section className="services-intro section-wrap" aria-labelledby="services-intro-title">
    <div className="services-intro-heading"><p className="eyebrow">Our Latest Work</p><h1 id="services-intro-title">Real Plumbing Projects<br />Completed for <em>Local Homes</em><br />and Businesses</h1><p>Take a look at some of our recent plumbing work.<br className="projects-description-break" /> Quality solutions, happy customers, and lasting results.</p></div>
    <div className="project-grid">{projects.map(project => <article className="project-card" key={project.id}><img className="project-photo" src={`/assets/project-${project.id}.webp`} alt={project.alt} width="270" height="461" /><div className="project-card-copy"><ProjectIcon name={project.icon} /><h2>{project.title}</h2><p>{project.description}</p></div></article>)}</div>
    <div className="project-benefits">{benefits.map(benefit => <div className="project-benefit" key={benefit.id}><img src={`/assets/icon-${benefit.id}.webp`} alt="" width="90" height="90" /><div><h2>{benefit.title}</h2><p>{benefit.description}</p></div></div>)}</div>
    <a className="explore-services-button" href="#services">Explore Our Services <span aria-hidden="true">→</span></a>
  </section>;
}
