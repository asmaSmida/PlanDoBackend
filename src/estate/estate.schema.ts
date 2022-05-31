/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type EstateDocument = Estate & Document;
@Schema()
export class Estate {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  localisation: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  capacity: number;
  @Prop({ required: false })
  summary: string;
  @Prop({ required: true })
  amenities: string; 
  @Prop({ required: true })
  image: string; 
  @Prop({ required: false })
  piscine: boolean;
  @Prop({ required: false })
  restaurant: boolean;
  @Prop({ required: false })
  hammam: boolean;
  @Prop({ required: false })
  patrimoine: boolean;
  @Prop({ required: false })
  plage: boolean;
  @Prop({ required: false })
  randonnee: boolean;
  @Prop({ required: false })
  price: number;
}
export const EstateSchema = SchemaFactory.createForClass(Estate);
