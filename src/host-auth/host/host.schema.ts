import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import {Document} from 'mongoose';
export type HostDocument = Host & Document;

export enum UserRoleEnum {
    admin = 'ROLE:ADMIN',
    user = 'ROLE:USER',
    host = 'ROLE:HOST',
  }
  
@Schema()
export class Host   {
    @Prop({required: true,unique:true})
    name: string;
    @Prop({required: true,unique:true})
    email: string;
    @Prop({required: true})
    estate: string;
    @Prop({required: true ,unique:false})
    telephone: string;
    @Prop({required: true})
    region: string;
    @Prop({required: true})
    password: string;
    role:UserRoleEnum;
}
export const HostSchema=SchemaFactory.createForClass(Host);