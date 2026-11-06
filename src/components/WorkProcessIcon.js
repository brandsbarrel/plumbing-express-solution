export default function WorkProcessIcon({ step }) {
  return <span className="work-step-icon" aria-hidden="true"><img src={`/assets/process-icon-${step + 1}.webp`} alt="" width="158" height="158" loading="lazy" /></span>;
}
