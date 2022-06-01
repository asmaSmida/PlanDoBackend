import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Host, HostDocument } from './host.schema';
import {Model } from 'mongoose';
import { HostDetails } from './host-details.interface';
import { NewHostDTO } from './dtos/new-host.dto';
import { EstateService } from 'src/estate/estate.service';
@Injectable()
export class HostService {
    constructor(@InjectModel('Host') private readonly hostModel: Model<HostDocument>,
    private estateService: EstateService,
    ){}
    _getHostDetails(host: HostDocument ): HostDetails{
        return{
            id: host._id,
            name: host.name,
            email:host.email,
            estate:host.estate,
            telephone:host.telephone,
            region:host.region,
            role:host.role,
        }
    }
    async findByEmail(email: string): Promise<HostDocument | null>{
        return this.hostModel.findOne({ email 
          } ).exec();
    }
    async findByPhoneNumber(phone: string ): Promise<HostDocument | null>{
        return this.hostModel.findOne({
            phone
          } ).exec();
    }
    async findById(id: string): Promise<HostDetails | null>{
        const host=await  this.hostModel.findById(id).exec();
        if(!host) throw new HttpException('Host with this email does not exist', HttpStatus.NOT_FOUND) ;//we can throw an exception
        return this._getHostDetails(host);
    }
    
    async getEstates(user:HostDocument) {
        return this.estateService.findAllByHost(user._id)
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
