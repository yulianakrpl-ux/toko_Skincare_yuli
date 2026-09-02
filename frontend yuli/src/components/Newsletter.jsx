import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Dapatkan promo & tips perawatan kulit</h2>
      <p>Berlangganan newsletter kami dan dapatkan diskon 10% untuk pembelian pertama.</p>
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Alamat email kamu" required />
        <button type="submit">Berlangganan</button>
      </form>
    </section>
  );
}

export default Newsletter;
