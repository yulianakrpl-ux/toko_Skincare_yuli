<?php

namespace App\Filament\Resources\ProductDetails\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ProductDetailForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('product_id')
                    ->label('Produk')
                    ->relationship('product', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),

                Textarea::make('description')
                    ->label('Deskripsi')
                    ->required()
                    ->columnSpanFull(),

                TextInput::make('weight')
                    ->label('Berat')
                    ->required()
                    ->numeric()
                    ->suffix('gram')
                    ->minValue(0),
            ]);
    }
}