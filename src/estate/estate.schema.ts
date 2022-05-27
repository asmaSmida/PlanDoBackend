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
  summary: string;
  @Prop({ required: true })
  amenities: string;
  @Prop({ required: true })
  piscine: boolean;
  @Prop({ required: true })
  restaurant: boolean;
  @Prop({ required: true })
  hammam: boolean;
  @Prop({ required: true })
  patrimoine: boolean;
  @Prop({ required: true })
  plage: boolean;
  @Prop({ required: true })
  randonnee: boolean;
}
export const EstateSchema = SchemaFactory.createForClass(Estate);
