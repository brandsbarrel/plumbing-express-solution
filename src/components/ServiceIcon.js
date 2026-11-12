export default function ServiceIcon({ service, className = '' }) {
  if (service.id !== 'excavation-drainage') {
    return <img className={className} src={`/assets/service-${service.id}.webp`} alt="" width="140" height="140" loading="lazy" />;
  }

  return <svg className={className} viewBox="0 0 140 140" role="img" aria-label="Excavation and drainage icon">
    <circle cx="70" cy="70" r="68" fill="#ffe9f6" />
    <g fill="none" stroke="#f50086" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M29 60h82v23H29zM48 60V45h44v15M70 45V34m-12 0h24M39 60V53m62 7V53" />
      <path d="M52 83c5-9 10-9 15 0m-8 0v12" />
      <path d="M60 101c0 6 4 10 9 10s9-4 9-10c0-5-9-17-9-17s-9 12-9 17Z" />
      <path d="M28 64h-7v15h7m84-15h7v15h-7" />
    </g>
  </svg>;
}
