import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstateFavController } from './estate-favorites.controller';
import { EstateFavSchema } from './estate-favorites.schema';
import { EstateFavService } from './estate-favorites.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'EstateFav', schema: EstateFavSchema }]),
  ],
  controllers: [EstateFavController],
  providers: [EstateFavService],
  exports: [EstateFavService],
})
export class EstateFavModule {}
