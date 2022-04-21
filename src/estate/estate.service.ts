import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EstateDocument } from './estate.schema';
import { Model } from 'mongoose';
import { EstateDetails } from './estate-details.interface';

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
      localisation: estate.localisation,
      summary: estate.summary,
      amenities: estate.amenities,
      piscine: estate.piscine,
      restaurant: estate.restaurant,
      hammam: estate.hammam,
      patrimoine: estate.patrimoine,
      plage: estate.plage,
      randonnee: estate.randonnee,
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
    name: string,
    description: string,
    localisation: string,
    summary: string,
    amenities: string,
    piscine: boolean,
    restaurant: boolean,
    hammam: boolean,
    patrimoine: boolean,
    plage: boolean,
    randonnee: boolean,
  ): Promise<EstateDocument> {
    const newEstate = new this.estateModel({
      name,
      description,
      localisation,
      summary,
      amenities,
      piscine,
      restaurant,
      hammam,
      patrimoine,
      plage,
      randonnee,
    });
    return newEstate.save();
  }
}
