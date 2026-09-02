import { Leaf, ShieldCheck, Truck, Heart } from 'lucide-react';
import './Benefits.css';

const benefits = [
  { icon: Leaf, title: 'Bahan Alami', desc: 'Diformulasikan dari bahan alami pilihan tanpa efek samping berbahaya.' },
  { icon: ShieldCheck, title: 'Teruji Dermatologis', desc: 'Semua produk sudah melalui uji klinis dan aman untuk kulit sensitif.' },
  { icon: Truck, title: 'Pengiriman Cepat', desc: 'Dikirim langsung dari gudang kami ke seluruh Indonesia dalam 1-3 hari.' },
  { icon: Heart, title: 'Cruelty Free', desc: 'Tidak diuji pada hewan, aman dan etis untuk digunakan sehari-hari.' },
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
