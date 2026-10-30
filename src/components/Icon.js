const paths = {
  person: <><circle cx="12" cy="7" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2Z" /></>,
  message: <path d="M21 11a9 8 0 0 1-9 8 11 11 0 0 1-4-.8L3 21l1.6-5A7.4 7.4 0 0 1 3 11a9 8 0 0 1 18 0Z" />,
  phone: <path d="M7 3 3 6c-1 7 8 16 15 15l3-4-5-4-3 3c-3-1-4-3-5-5l3-3Z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="1" /><path d="m3 5 9 8 9-8M3 19l6-6m12 6-6-6" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  calendar: <><rect x="3" y="5" width="18" height="17" rx="2" /><path d="M7 2v6m10-6v6M3 10h18M7 14h2m3 0h2m3 0h1M7 18h2m3 0h2m3 0h1" /></>,
  send: <><path d="m2 10 20-8-7 20-4-9-9-3Z" /><path d="m11 13 11-11" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6v6h5M19 3l2 2" /></>,
  handshake: <><path d="m2 8 5-4 5 2 5-2 5 4-4 10-4 2-7-3-5-9Z" /><path d="m7 4 5 2-4 5 3 2 5-4 5 6M7 14l6 5" /></>,
  thumb: <><path d="M8 10 13 2c4 0 1 7 1 7h6c3 0 0 12-3 12H8ZM3 10h5v11H3Z" /></>,
  tag: <><path d="m3 12 10-10h8v8L10 22l-7-7Z" /><circle cx="17" cy="6" r="1" /><path d="m8 16 6-7M8 11h.01M14 15h.01" /></>,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="m5 5 14 14M19 5 5 19" />,
};

export default function Icon({ name, className = '' }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
