import { Prop } from "@nestjs/mongoose";
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';


export class NewHostDTO{
    @IsNotEmpty({message:"Priére d'entrer votre nom "})
    @Prop({unique:true, message:"username unique "}) 
    name:string;
    @IsNotEmpty({message:"Priére d'entrer votre mail "})
    @Prop({unique:true})
    email:string; 
    @IsNotEmpty({message:"Priére d'entrer votre maison d'hote "})
   
    estate:string; 
    @IsNotEmpty({message:"Priére d'entrer votre telephone "})
    @Prop({unique:true})
    @MinLength(8,{message:"numero telephone doit avoir 8 chiffres "})
    telephone:string; 
    @IsNotEmpty({message:"Priére d'entrer votre region "})
   
    region:string; 
    @MinLength(7,{message:"votre mot de passe doit avoir au moins 7 caractéres "})
    password:string;
}