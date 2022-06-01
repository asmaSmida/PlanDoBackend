/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EstateFavDocument } from './estate-favorites.schema';
import { Model } from 'mongoose';
import { EstateFavDetails } from './estate-favorites-details.interface';
import { NewEstateFavDetails } from './new-estate-favorites-details.interface';
import { Host } from 'src/host-auth/host/host.schema';

@Injectable()
export class EstateFavService {
  constructor(
    @InjectModel('EstateFav') private readonly estateFavModel: Model<EstateFavDocument>,
  ) { }
  _getEstateFavDetails(estate: EstateFavDocument): EstateFavDetails {
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
  async findAll() {
    return this.estateFavModel.find().exec();
  }
  async findByName(name: string): Promise<EstateFavDocument | null> {
    return this.estateFavModel.findOne({ name }).exec();
  }
  async findById(id: string): Promise<EstateFavDetails | null> {
    const estate = await this.estateFavModel.findById(id).exec();
    if (!estate) return null; //we can throw an exception
    return this._getEstateFavDetails(estate);
  }
  async create(
    estate: NewEstateFavDetails, host: Host
  ): Promise<EstateFavDetails> {
    const newEstateFav = new this.estateFavModel({
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
      owner: host
    });
    newEstateFav.save(); console.log(newEstateFav);

    return this._getEstateFavDetails(newEstateFav);
  }
}
