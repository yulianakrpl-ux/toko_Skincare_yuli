import { ShoppingBag, Menu, Search, User, MessageCircle, Camera, Play } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="site-header">
      <div className="topbar">
        <p className="topbar-message">Gratis ongkir untuk belanja di atas Rp 300.000</p>
        <div className="topbar-social">
          <MessageCircle size={14} strokeWidth={1.5} />
          <Camera size={14} strokeWidth={1.5} />
          <Play size={14} strokeWidth={1.5} />
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <span className="navbar-logo-text">Bloom</span>
          <span className="navbar-logo-sub">Beauty</span>
        </div>

        <div className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#categories">Kategori</a>
          <a href="#products">Best Seller</a>
          <a href="#about">Tentang</a>
        </div>

        <div className="navbar-actions">
          <Search size={19} strokeWidth={1.5} />
          <User size={19} strokeWidth={1.5} />
          <ShoppingBag size={19} strokeWidth={1.5} />
          <Menu size={19} strokeWidth={1.5} className="navbar-mobile-icon" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
