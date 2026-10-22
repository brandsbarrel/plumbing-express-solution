import { useState } from 'react';
import CallButton from './CallButton.js';
import Icon from './Icon.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const isServices = window.location.pathname.startsWith('/services');
  return <header className="site-header"><div className="header-inner"><a className="brand" href="/#home" aria-label="Plumbing Express Solutions home"><img src="/assets/logo.webp" alt="Plumbing Express Solutions — Plumbing done right" width="1590" height="330" /></a><button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button><nav id="navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation"><a className={!isServices ? "active" : undefined} href="/#home" onClick={() => setOpen(false)}>Home</a><a className={isServices ? "active" : undefined} href="/services" onClick={() => setOpen(false)}>Our Services</a><a href="/#contact" onClick={() => setOpen(false)}>Contact Us</a></nav><CallButton className="header-call" /></div></header>;
}
