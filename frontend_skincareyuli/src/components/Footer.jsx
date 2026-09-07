import { MessageCircle, Camera, Play } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Bloom Beauty</h3>
          <p>Perawatan kulit alami untuk kulit sehat setiap hari.</p>
          <div className="footer-social">
            <MessageCircle size={16} strokeWidth={1.5} />
            <Camera size={16} strokeWidth={1.5} />
            <Play size={16} strokeWidth={1.5} />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Belanja</h4>
            <a href="#products">Semua Produk</a>
            <a href="#products">Best Seller</a>
            <a href="#categories">Kategori</a>
          </div>
          <div>
            <h4>Bantuan</h4>
            <a href="#">Lacak Pesanan</a>
            <a href="#">Pengiriman & Retur</a>
            <a href="#">Kontak Kami</a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Dapatkan promo & tips perawatan kulit.</p>
          <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Alamat emailmu" required />
            <button type="submit">Kirim</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2026 Bloom Beauty. All rights reserved.</p>
        <p className="footer-payment">Visa · Mastercard · QRIS · Transfer Bank</p>
      </div>
    </footer>
  );
}

export default Footer;
