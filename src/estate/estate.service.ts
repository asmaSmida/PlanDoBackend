/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EstateDocument } from './estate.schema';
import { Model } from 'mongoose';
import { EstateDetails } from './estate-details.interface';
import { NewEstateDetails } from './new-estate-details.interface';

@Injectable()
export class EstateService {
  constructor(
    @InjectModel('Estate') private readonly estateModel: Model<EstateDocument>,
  ) {}
  _getEstateDetails(estate: EstateDocument): EstateDetails {
    return {
      id: estate.id,
      name: estate.name,
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
  async findByName(name: string): Promise<EstateDocument | null> {
    return this.estateModel.findOne({ name }).exec();
  }
  async findById(id: string): Promise<EstateDetails | null> {
    const estate = await this.estateModel.findById(id).exec();
    if (!estate) return null; //we can throw an exception
    return this._getEstateDetails(estate);
  }
  async create(
    estate:NewEstateDetails
  ): Promise<EstateDetails> {
    const newEstate = new this.estateModel({
      name: estate.name,
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
    });
     newEstate.save(); console.log(newEstate);
     
     return this._getEstateDetails(newEstate);
  }
}
