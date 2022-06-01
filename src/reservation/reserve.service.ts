/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReserveDocument } from './reserve.schema';
import { Model } from 'mongoose';
import { ReserveDetails } from './reserve-details.interface';
import { User } from 'src/client-auth/user/user.schema';
import { CreateReserveDto } from './reserve-dto';
import { EstateService } from 'src/estate/estate.service';

@Injectable()
export class ReserveService {
  constructor(@InjectModel('Reserve') private reserveModel: Model<ReserveDocument>,

    private estateService: EstateService,
  ) { }
  _getReserveDetails(reserve: ReserveDocument): ReserveDetails {
    return {
      id: reserve._id,
      dateDebut: reserve.dateDebut,
      dateFin: reserve.dateFin

    };
  }

  async create(reserve: CreateReserveDto, user: User): Promise<ReserveDetails> {
    const createdReserve = new this.reserveModel({
      dateDebut: reserve.dateDebut,
      dateFin: reserve.dateFin,
      estate: reserve.estate,
      user
    });
    createdReserve.save()
    console.log(createdReserve); 


    return this._getReserveDetails(createdReserve);
  }
  async findAllByClient(id: string) {
    return this.reserveModel.find({ user: id }).exec();
  }
  async findAll() {
    return this.reserveModel.find().exec();
  }

  async findOne(id: string) {
    return this.reserveModel.findById(id).exec();
  }


}
