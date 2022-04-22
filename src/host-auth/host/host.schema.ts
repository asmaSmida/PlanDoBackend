import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
export type HostDocument = Host & Document;
@Schema()
export class Host {
    @Prop({required: true,unique:true})
    name: string;
    @Prop({required: true,unique:true})
    email: string;
    @Prop({required: true})
    estate: string;
    @Prop({required: true,unique:true})
    telephone: string;
    @Prop({required: true})
    region: string;
    @Prop({required: true})
    password: string;
}
export const HostSchema=SchemaFactory.createForClass(Host);