import heroImage from '../assets/hero.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">Perawatan kulit alami</p>
        <h1>
          Kulit sehat<br />dimulai dari sini
        </h1>
        <p className="hero-description">
          Rangkaian skincare dengan bahan alami pilihan, diformulasikan untuk semua jenis kulit.
        </p>
        <button className="hero-button">Belanja Sekarang</button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Produk skincare" />
      </div>
    </section>
  );
}

export default Hero;