import ProductCard from './ProductCard';
import productImg from '../assets/hero.png';
import './Products.css';

// Data contoh — nanti diganti fetch dari API Laravel (/api/products)
// Field disamakan dengan tabel Products di backend: store_id, name, price, stock
const products = [
  { id: 1, store_id: 1, name: 'Rose Glow Serum', price: 189000, stock: 23, image: productImg },
  { id: 2, store_id: 1, name: 'Petal Soft Cleanser', price: 95000, stock: 5, image: productImg },
  { id: 3, store_id: 1, name: 'Dewy Moisture Cream', price: 165000, stock: 0, image: productImg },
  { id: 4, store_id: 1, name: 'Calm Sage Toner', price: 110000, stock: 120, image: productImg },
];

function Products() {
  return (
    <section className="products" id="products">
      <div className="products-header">
        <p className="products-eyebrow">Best seller</p>
        <h2>Produk pilihan kami</h2>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
