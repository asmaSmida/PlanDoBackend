/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Host } from 'src/host-auth/host/host.schema';
export type EstateFavDocument = EstateFav & Document;
@Schema()
export class EstateFav {
  @Prop({ required: false })
  name: string;
  @Prop({ required: false })
  type: string;
  @Prop({ required: false })
  localisation: string;
  @Prop({ required: false })
  description: string;
  @Prop({ required: false })
  capacity: string;
  @Prop({ required: false })
  summary: string;
  @Prop({ required: false })
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
  price: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'host' })
  @Type(() => Host)
  owner: Host ;
}
export const EstateFavSchema = SchemaFactory.createForClass(EstateFav);
