import heroImage from '../assets/hero.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="eyebrow">New in</p>
        <h1>
          Kulit Sehat.<br />Percaya Diri Nyata.
        </h1>
        <p className="hero-description">
          Rangkaian skincare bersih dengan bahan alami pilihan yang menutrisi,
          menyempurnakan, dan memberdayakan kulitmu setiap hari.
        </p>
        <a href="#products" className="btn-primary">Belanja Sekarang</a>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Produk skincare Bloom Beauty" />
      </div>
    </section>
  );
}

export default Hero;
