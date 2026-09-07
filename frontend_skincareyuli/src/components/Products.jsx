import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../services/api';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | success | error

  useEffect(() => {
    let isMounted = true;

    fetchProducts()
      .then((data) => {
        if (!isMounted) return;
        setProducts(data);
        setStatus('success');
      })
      .catch(() => {
        if (!isMounted) return;
        setStatus('error');
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="products" id="products">
      <div className="section-heading">
        <p className="eyebrow">Best Seller</p>
        <h2>Produk Pilihan Kami</h2>
      </div>

      {status === 'loading' && (
        <p className="products-status">Memuat produk...</p>
      )}

      {status === 'error' && (
        <p className="products-status products-status-error">
          Belum bisa memuat produk dari server. Pastikan backend Laravel
          (php artisan serve) sedang berjalan, lalu refresh halaman ini.
        </p>
      )}

      {status === 'success' && products.length === 0 && (
        <p className="products-status">Belum ada produk. Tambahkan dari dashboard admin.</p>
      )}

      {status === 'success' && products.length > 0 && (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;
