/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Host } from 'src/host-auth/host/host.schema';
export type EstateDocument = Estate & Document;
@Schema()
export class Estate {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  localisation: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: false })
  capacity: number;
  @Prop({ required: false })
  summary: string;
  @Prop({ required: true })
  amenities: string; 
  @Prop({ required: false })
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
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'host' })
  @Type(() => Host)
  owner: Host ; 
}
export const EstateSchema = SchemaFactory.createForClass(Estate);
