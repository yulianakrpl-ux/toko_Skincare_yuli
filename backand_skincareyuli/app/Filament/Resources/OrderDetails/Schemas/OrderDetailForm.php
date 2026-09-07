<?php

namespace App\Filament\Resources\OrderDetails\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class OrderDetailForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('order_id')
                    ->label('Order')
                    ->relationship('order', 'id')
                    ->searchable()
                    ->preload()
                    ->required(),

                Select::make('product_id')
                    ->label('Produk')
                    ->relationship('product', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),

                TextInput::make('quantity')
                    ->label('Jumlah')
                    ->required()
                    ->numeric()
                    ->minValue(1),

                TextInput::make('unit_price')
                    ->label('Harga Satuan')
                    ->required()
                    ->numeric()
                    ->prefix('Rp')
                    ->minValue(0),
            ]);
    }
}