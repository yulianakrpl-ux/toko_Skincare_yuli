import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  { name: 'Sarah W.', text: 'Kulit aku jadi lebih glowing dalam 2 minggu pemakaian. Teksturnya juga ringan banget!', rating: 5 },
  { name: 'Amanda R.', text: 'Cocok banget buat kulit sensitif, gak ada breakout sama sekali. Wangi produknya juga soft.', rating: 5 },
  { name: 'Dinda P.', text: 'Packaging cantik, produk berkualitas, dan harganya masih terjangkau. Repurchase terus!', rating: 4 },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <p className="testimonials-eyebrow">Testimoni</p>
        <h2>Apa kata mereka</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-stars">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} size={16} fill="#4A2E35" strokeWidth={0} />
              ))}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <p className="testimonial-name">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
