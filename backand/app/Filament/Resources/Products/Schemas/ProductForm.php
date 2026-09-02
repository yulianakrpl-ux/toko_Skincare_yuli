<?php

namespace App\Filament\Resources\Products\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ProductForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                Select::make('store_id')
                    ->label('Toko')
                    ->relationship('store', 'name')
                    ->searchable()
                    ->preload()
                    ->required()
                    ->placeholder('Pilih toko'),

                TextInput::make('name')
                    ->label('Nama Produk')
                    ->required()
                    ->maxLength(255)
                    ->placeholder('Masukkan nama produk'),

                TextInput::make('price')
                    ->label('Harga')
                    ->required()
                    ->numeric()
                    ->minValue(0)
                    ->prefix('Rp ')
                    ->placeholder('Masukkan harga'),

                TextInput::make('stock')
                    ->label('Stok')
                    ->required()
                    ->numeric()
                    ->integer()
                    ->minValue(0)
                    ->default(0)
                    ->placeholder('Masukkan jumlah stok'),

            ]);
    }
}