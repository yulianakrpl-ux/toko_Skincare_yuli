import { Leaf, FlaskConical, Rabbit, Globe2 } from 'lucide-react';
import './Benefits.css';

const benefits = [
  { icon: Leaf, title: 'Bahan Alami', desc: 'Aman & bebas bahan berbahaya.' },
  { icon: FlaskConical, title: 'Teruji Dermatologis', desc: 'Sudah lolos uji klinis.' },
  { icon: Rabbit, title: 'Cruelty Free', desc: 'Tidak diuji pada hewan.' },
  { icon: Globe2, title: 'Sustainable Beauty', desc: 'Baik untukmu & lingkungan.' },
];

function Benefits() {
  return (
    <section className="benefits">
      {benefits.map((item, i) => {
        const Icon = item.icon;
        return (
          <div className="benefit-item" key={i}>
            <Icon size={26} strokeWidth={1.5} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Benefits;
