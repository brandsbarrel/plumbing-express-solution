export default function ProcessWater({ top = false }) {
  return <img className={`process-water${top ? ' process-water-top' : ''}`} src={`/assets/process-water-${top ? 'top' : 'bottom'}.webp`} alt="" aria-hidden="true" width="1037" height={top ? '185' : '206'} loading="lazy" />;
}
