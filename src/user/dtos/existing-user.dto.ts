import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class ExisitingUserDTO{ 
    @IsNotEmpty({message:"Priére d'entrer votre mail"})
    email:string;
    @IsNotEmpty({message:"Priére d'entrer votre mot de passe"})
    password:string;
}