<?php

namespace App\Filament\Resources\EmployeeDetails\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class EmployeeDetailForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('employee_id')
                    ->label('Karyawan')
                    ->relationship('employee', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),

                TextInput::make('employee_number')
                    ->label('Nomor Karyawan')
                    ->required()
                    ->maxLength(50),

                DatePicker::make('date_of_joining')
                    ->label('Tanggal Bergabung')
                    ->required(),
            ]);
    }
}