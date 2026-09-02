import './ProductCard.css';

function ProductCard({ name, price, stock, image }) {
  const isLowStock = stock > 0 && stock <= 5;
  const isOutOfStock = stock === 0;

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={image} alt={name} />
        {isOutOfStock && <span className="product-card-badge out">Stok habis</span>}
        {isLowStock && <span className="product-card-badge low">Sisa {stock}</span>}
      </div>
      <h3 className="product-card-name">{name}</h3>
      <p className="product-card-price">Rp {price.toLocaleString('id-ID')}</p>
    </div>
  );
}

export default ProductCard;