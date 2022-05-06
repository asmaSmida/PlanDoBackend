import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;

export enum UserRoleEnum {
  admin = 'ROLE:ADMIN',
  user = 'ROLE:USER',
  host = 'ROLE:HOST',
}

@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  role:UserRoleEnum;
}
export const UserSchema = SchemaFactory.createForClass(User);
