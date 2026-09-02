import { ShoppingBag, Menu } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <span className="navbar-logo-text">Bloom</span>
      </div>

      <nav className="navbar-menu">
        <a href="#home">Home</a>
        <a href="#products">Produk</a>
        <a href="#about">Tentang</a>
      </nav>

      <div className="navbar-actions">
        <ShoppingBag size={20} strokeWidth={1.5} />
        <Menu size={20} strokeWidth={1.5} className="navbar-mobile-icon" />
      </div>
    </header>
  );
}

export default Navbar;