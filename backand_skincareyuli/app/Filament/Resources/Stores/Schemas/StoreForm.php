<?php

namespace App\Filament\Resources\Stores\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class StoreForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('user_id')
                    ->label('Pemilik Store')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),

                TextInput::make('name')
                    ->label('Nama Store')
                    ->required()
                    ->maxLength(255),

                TextInput::make('address')
                    ->label('Alamat Store')
                    ->required()
                    ->maxLength(255),
            ]);
    }
}