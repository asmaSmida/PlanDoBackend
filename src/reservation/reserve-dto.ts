import { Optional } from '@nestjs/common';
import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateReserveDto {
    @IsEmpty()
    dateDebut:Date;
    @IsEmpty()
    dateFin:Date; 
    @IsNotEmpty()
    estate: string;
}