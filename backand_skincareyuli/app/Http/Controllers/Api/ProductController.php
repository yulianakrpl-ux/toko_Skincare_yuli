<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * GET /api/products
     * Menampilkan semua produk untuk ditampilkan di frontend toko.
     */
    public function index(Request $request)
    {
        $products = Product::query()
            ->with(['store', 'detail'])
            ->when($request->query('search'), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (Product $product) => $this->transform($product));

        return response()->json([
            'data' => $products,
        ]);
    }

    /**
     * GET /api/products/{product}
     * Menampilkan detail satu produk.
     */
    public function show(Product $product)
    {
        $product->load(['store', 'detail']);

        return response()->json([
            'data' => $this->transform($product),
        ]);
    }

    private function transform(Product $product): array
    {
        return [
            'id' => $product->id,
            'name' => $product->name,
            'price' => (float) $product->price,
            'stock' => (int) $product->stock,
            'store' => $product->store?->name,
            'description' => $product->detail?->description,
            'weight' => $product->detail?->weight,
            'image' => $product->image ? asset('storage/' . $product->image) : null,
        ];
    }
}
