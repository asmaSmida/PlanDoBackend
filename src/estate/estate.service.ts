/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Estate, EstateDocument } from './estate.schema';
import { Model } from 'mongoose';
import { EstateDetails } from './estate-details.interface';
import { NewEstateDetails } from './new-estate-details.interface';
import { Host } from 'src/host-auth/host/host.schema';

@Injectable()
export class EstateService {
  constructor(
    @InjectModel('Estate') private readonly estateModel: Model<EstateDocument>,
  ) {}
  _getEstateDetails(estate: EstateDocument): EstateDetails {
    return {
      id: estate.id,
      name: estate.name,
      type: estate.type,
      description: estate.description,
      capacity: estate.capacity,
      localisation: estate.localisation,
      summary: estate.summary,
      amenities: estate.amenities,
      image: estate.image,
      piscine: estate.piscine,
      restaurant: estate.restaurant,
      hammam: estate.hammam,
      patrimoine: estate.patrimoine,
      plage: estate.plage,
      randonnee: estate.randonnee,
      price: estate.price, 
    };
  }
  
  async findAllByHost(id : string) {
    return this.estateModel.find( {owner:id} ).exec();
}
  async findAll() {
    return this.estateModel.find().populate({path:'owner', model: 'Host'}).exec();
  }
  async findByName(name: string): Promise<EstateDocument | null> {
    return this.estateModel.findOne({ name }).exec( );
  }
  async findById(id: string)  {
    
    return this.estateModel.findById(id).populate({path:'owner', model: 'Host'}).exec();
    const estate = await (await this.estateModel.findById(id)).populate('owner') ;
    if (!estate) return null; //we can throw an exception 
  }
  async create(
    estate:NewEstateDetails, host:Host
  ): Promise<EstateDetails> {
    const newEstate = new this.estateModel({
      name: estate.name,
      type: estate.type,
      description: estate.description,
      capacity: estate.capacity,
      localisation: estate.localisation,
      summary: estate.summary,
      amenities: estate.amenities,
      image: estate.image,
      piscine: estate.piscine,
      restaurant: estate.restaurant,
      hammam: estate.hammam,
      patrimoine: estate.patrimoine,
      plage: estate.plage,
      randonnee: estate.randonnee,
      price: estate.price,
      owner:host
    });
     newEstate.save(); console.log(newEstate);
     
     return this._getEstateDetails(newEstate);
  }
}
