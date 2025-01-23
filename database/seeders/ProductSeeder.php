<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'Laptop Pro X1',
                'description' => 'High-performance laptop with 16GB RAM and 512GB SSD',
                'price' => 1299.99,
                'category' => 'Electronics',
            ],
            [
                'name' => 'Wireless Headphones',
                'description' => 'Noise-cancelling Bluetooth headphones with 30-hour battery life',
                'price' => 199.99,
                'category' => 'Audio',
            ],
            [
                'name' => 'Smart Watch Elite',
                'description' => 'Fitness tracker with heart rate monitor and GPS',
                'price' => 299.99,
                'category' => 'Wearables',
            ],
            [
                'name' => 'Professional Camera',
                'description' => '24MP mirrorless camera with 4K video capability',
                'price' => 899.99,
                'category' => 'Photography',
            ],
            [
                'name' => 'Gaming Console',
                'description' => 'Next-gen gaming console with 1TB storage',
                'price' => 499.99,
                'category' => 'Gaming',
            ],
            [
                'name' => 'Tablet Air',
                'description' => '10-inch tablet with retina display and 256GB storage',
                'price' => 649.99,
                'category' => 'Electronics',
            ],
            [
                'name' => 'Wireless Mouse',
                'description' => 'Ergonomic wireless mouse with precision tracking',
                'price' => 49.99,
                'category' => 'Accessories',
            ],
            [
                'name' => 'Smart Speaker',
                'description' => 'Voice-controlled speaker with premium sound',
                'price' => 129.99,
                'category' => 'Audio',
            ],
            [
                'name' => 'External SSD',
                'description' => '1TB portable SSD with USB-C connection',
                'price' => 159.99,
                'category' => 'Storage',
            ],
            [
                'name' => 'Mechanical Keyboard',
                'description' => 'RGB mechanical keyboard with Cherry MX switches',
                'price' => 149.99,
                'category' => 'Accessories',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
