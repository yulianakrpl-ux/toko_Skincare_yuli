import { Heart } from 'lucide-react';
import placeholderImg from '../assets/hero.png';
import './ProductCard.css';

function ProductCard({ name, price, stock, image }) {
  const isLowStock = stock > 0 && stock <= 10;
  const isOutOfStock = stock === 0;

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={image || placeholderImg} alt={name} />
        <button className="product-card-wishlist" type="button" aria-label="Simpan produk">
          <Heart size={16} strokeWidth={1.5} />
        </button>
        {isOutOfStock && <span className="product-card-badge out">Stok habis</span>}
        {isLowStock && <span className="product-card-badge low">Sisa {stock}</span>}
      </div>
      <h3 className="product-card-name">{name}</h3>
      <p className="product-card-price">Rp {Number(price).toLocaleString('id-ID')}</p>
      <button className="product-card-cta" type="button" disabled={isOutOfStock}>
        {isOutOfStock ? 'Stok Habis' : 'Tambah ke Keranjang'}
      </button>
    </div>
  );
}

export default ProductCard;
