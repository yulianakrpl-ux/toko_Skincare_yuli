import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-brand">
        <h3>Bloom</h3>
        <p>Perawatan kulit alami untuk kulit sehat setiap hari.</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Belanja</h4>
          <a href="#products">Semua Produk</a>
          <a href="#products">Best Seller</a>
        </div>
        <div>
          <h4>Bantuan</h4>
          <a href="#">Kontak Kami</a>
          <a href="#">FAQ</a>
        </div>
      </div>

      <p className="footer-copy">© 2026 Bloom Skincare. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
