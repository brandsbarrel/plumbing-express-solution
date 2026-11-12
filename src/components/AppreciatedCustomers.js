const instagramUrl = 'https://www.instagram.com/plumbingexpresssolutions?mdxt=MWV6cjhnZnQzejZ2cg==';

export default function AppreciatedCustomers() {
  return <section className="appreciated-customers appreciated-customers-artwork" aria-labelledby="appreciated-customers-title">
    <img src="/assets/appreciated-customers-cropped.png" alt="Appreciated By Our Customers. Reviews from Aliyah Nguyen and David Breuneteau." loading="lazy" />
    <h2 id="appreciated-customers-title" className="sr-only">Appreciated By Our Customers</h2>
    <a className="artwork-link appreciated-instagram-link" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="See more customer reviews on Instagram (opens in a new tab)" />
  </section>;
}
