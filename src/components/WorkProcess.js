const steps = [
  { title: 'Get in Touch', description: 'Call or message us to request service.' },
  { title: 'We Arrange What You Need', description: 'We confirm the job details and schedule a time that suits you.' },
  { title: 'Technicians On Site On Time', description: 'Our experts come prepared and ready.' },
  { title: 'Job Done Right', description: 'We complete the work with quality and care.' },
];

export default function WorkProcess() {
  return <section className="home-work-process" aria-labelledby="work-process-title"><div className="work-process-inner"><p className="eyebrow">Work Process</p><h2 id="work-process-title">4 Simple Steps To<br /><em>Follow</em></h2><p className="work-process-description">Our process is simple, fast and hassle-free.<br />Here’s how we get it done.</p><ol className="work-process-steps">{steps.map((step, index) => <li key={step.title}><div className="work-step-visual"><img src={`/assets/work-step-${index + 1}.webp`} alt="" width="146" height="155" loading="lazy" /><span className="work-step-number" aria-hidden="true">{index + 1}</span></div><div className="work-step-copy"><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol></div></section>;
}
