<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductDetail;
use App\Models\Store;
use App\Models\User;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Isi produk skincare contoh supaya toko tidak kosong saat pertama dibuka.
     * Data ini boleh dihapus/diganti lewat dashboard admin (Filament) kapan saja.
     */
    public function run(): void
    {
        $user = User::first() ?? User::factory()->create([
            'name' => 'Yuliana',
            'email' => 'yuliana@gmail.com',
        ]);

        $store = Store::firstOrCreate(
            ['user_id' => $user->id],
            ['name' => 'Velvetique Beauty Store', 'address' => 'Surabaya, Jawa Timur']
        );

        if ($store->products()->count() > 0) {
            return;
        }

        $products = [
            [
                'name' => 'Radiance Face Serum Niacinamide',
                'price' => 189000,
                'stock' => 45,
                'description' => 'Serum wajah dengan niacinamide dan hyaluronic acid untuk mencerahkan dan melembapkan kulit.',
                'weight' => 30,
            ],
            [
                'name' => 'Gentle Cleanser Chamomile & Aloe Vera',
                'price' => 95000,
                'stock' => 60,
                'description' => 'Pembersih wajah lembut dengan chamomile dan aloe vera, cocok untuk semua jenis kulit.',
                'weight' => 100,
            ],
            [
                'name' => 'Dew Boost Gel Moisturizer',
                'price' => 165000,
                'stock' => 8,
                'description' => 'Pelembap bertekstur gel yang ringan, memberi hidrasi tahan lama tanpa lengket.',
                'weight' => 50,
            ],
            [
                'name' => 'Brightening Body Lotion Vitamin C',
                'price' => 129000,
                'stock' => 32,
                'description' => 'Lotion tubuh dengan vitamin C dan shea butter untuk kulit lebih cerah dan lembut.',
                'weight' => 200,
            ],
            [
                'name' => 'Calm Sage Toner',
                'price' => 110000,
                'stock' => 0,
                'description' => 'Toner menenangkan dengan ekstrak sage, membantu meredakan kemerahan pada kulit sensitif.',
                'weight' => 150,
            ],
            [
                'name' => 'Velvet Matte Lip Cream',
                'price' => 79000,
                'stock' => 70,
                'description' => 'Lip cream dengan hasil akhir matte lembut, tahan lama dan tidak membuat bibir kering.',
                'weight' => 5,
            ],
        ];

        foreach ($products as $item) {
            $product = Product::create([
                'store_id' => $store->id,
                'name' => $item['name'],
                'price' => $item['price'],
                'stock' => $item['stock'],
            ]);

            ProductDetail::create([
                'product_id' => $product->id,
                'description' => $item['description'],
                'weight' => $item['weight'],
            ]);
        }
    }
}
