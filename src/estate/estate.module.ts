import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstateController } from './estate.controller';
import { EstateSchema } from './estate.schema';
import { EstateService } from './estate.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Estate', schema: EstateSchema }]),
  ],
  controllers: [EstateController],
  providers: [EstateService],
  exports: [EstateService],
})
export class EstateModule {}
