import { Droplet, SprayCan, CircleDot, Sun, Sparkles, Gift } from 'lucide-react';
import './Categories.css';

const categories = [
  { icon: Droplet, label: 'Serum' },
  { icon: SprayCan, label: 'Cleanser' },
  { icon: CircleDot, label: 'Moisturizer' },
  { icon: Sun, label: 'Sun Care' },
  { icon: Sparkles, label: 'Toner' },
  { icon: Gift, label: 'Paket Hemat' },
];

function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="section-heading">
        <h2>Belanja per Kategori</h2>
      </div>
      <div className="categories-grid">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <a href="#products" className="category-item" key={i}>
              <span className="category-circle">
                <Icon size={26} strokeWidth={1.5} />
              </span>
              <span className="category-label">{cat.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
