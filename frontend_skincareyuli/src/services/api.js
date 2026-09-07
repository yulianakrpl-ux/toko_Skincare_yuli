const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

/**
 * Ambil semua produk dari backend Laravel (GET /api/products).
 * Melempar error kalau backend tidak bisa dihubungi / response gagal,
 * supaya komponen pemanggil bisa menampilkan pesan yang jelas ke user.
 */
export async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);

  if (!response.ok) {
    throw new Error(`Gagal mengambil data produk (status ${response.status})`);
  }

  const json = await response.json();
  return json.data ?? [];
}
