import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HostDocument } from './host.schema';
import {Model } from 'mongoose';
import { HostDetails } from './host-details.interface';
import { NewHostDTO } from './dtos/new-host.dto';
@Injectable()
export class HostService {
    constructor(@InjectModel('Host') private readonly hostModel: Model<HostDocument>){}
    _getHostDetails(host: HostDocument ): HostDetails{
        return{
            id: host._id,
            name: host.name,
            email:host.email,
            estate:host.estate,
            telephone:host.telephone,
            region:host.region,
        }
    }
    async findByIdentifier(email: string,username:string): Promise<HostDocument | null>{
        return this.hostModel.findOne({
            where: [{ username }, { email }],
          } ).exec();
    }
    async findById(id: string): Promise<HostDetails | null>{
        const host=await  this.hostModel.findById(id).exec();
        if(!host) throw new HttpException('Host with this email does not exist', HttpStatus.NOT_FOUND) ;//we can throw an exception
        return this._getHostDetails(host);
    }
    async create(newHostDto:NewHostDTO ):Promise<HostDocument>{
        const { name, email,estate ,telephone,region,password } = newHostDto; 
        const newHost=new this.hostModel({
            name  ,
            email,
            estate,
            telephone,
            region,
            password,
        });  
        return newHost.save();
    }
}
