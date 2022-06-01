/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/client-auth/user/user.schema';
import { Estate } from 'src/estate/estate.schema'; 
export type ReserveDocument = Reserve & Document;
@Schema()
export class Reserve {
  @Prop({required:false})
  dateDebut:Date;
  @Prop({required:false})
  dateFin:Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'estate' })
  @Type(() => Estate)
  estate: Estate ;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  @Type(() => User)
  user: User ;
}
export const ReserveSchema = SchemaFactory.createForClass(Reserve);
