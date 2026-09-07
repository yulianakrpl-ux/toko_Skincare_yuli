import heroImage from '../assets/hero.png';
import './PromoBanner.css';

function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-text">
        <p className="promo-eyebrow">Promo Terbatas</p>
        <h2>Diskon Spesial untuk Best Seller</h2>
        <p className="promo-description">
          Glow lebih hemat, rawat kulitmu mulai hari ini.
        </p>
        <a href="#products" className="btn-primary promo-btn">Belanja Promo</a>
      </div>
      <div className="promo-image">
        <img src={heroImage} alt="Promo produk skincare" />
      </div>
    </section>
  );
}

export default PromoBanner;
