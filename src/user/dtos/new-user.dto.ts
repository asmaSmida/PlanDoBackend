import { Prop } from "@nestjs/mongoose";
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';


export class NewUserDTO{
    @IsNotEmpty({message:"Priére d'entrer votre nom"})
    @Prop({unique:true}) 
    name:string;
    @IsNotEmpty({message:"Priére d'entrer votre mail"})
    @Prop({unique:true})
    email:string; 
    @MinLength(7,{message:"votre mot de passe doit avoir au moins 7 caractéres"})
    password:string;
}