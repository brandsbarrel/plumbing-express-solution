const instagramUrl = 'https://www.instagram.com/plumbingexpresssolutions?mdxt=MWV6cjhnZnQzejZ2cg==';

function ArtworkSlice({ start, end }) {
  const height = end - start;
  return <div className="appreciated-original-slice" style={{ aspectRatio: `1024 / ${height}` }} aria-hidden="true"><img src="/assets/appreciated-customers-original.jpeg" alt="" width="1024" height="1536" loading="lazy" style={{ top: `${-start / height * 100}%` }} /></div>;
}

export default function AppreciatedCustomers() {
  return <section className="appreciated-original" aria-labelledby="appreciated-customers-title">
    <div className="sr-only"><h2 id="appreciated-customers-title">Appreciated By Our Customers</h2><p>Our customers trust us for our honesty, fast service, and lasting results.</p><blockquote>Very responsive and efficient, came out to inspect my job before providing a fair quote. Would highly recommend Ferris and Plumbing Express team.<cite>Aliyah Nguyen, Customer</cite></blockquote><blockquote>Prompt and fixed the problem for less than expected. Would highly recommend Plumbing Express Solutions.<cite>David Breuneteau, Customer</cite></blockquote></div>
    <ArtworkSlice start={121} end={490} />
    <ArtworkSlice start={658} end={1390} />
    <a className="appreciated-original-button" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="See more customer reviews on Instagram (opens in a new tab)"><ArtworkSlice start={490} end={658} /></a>
    <ArtworkSlice start={1390} end={1536} />
  </section>;
}
