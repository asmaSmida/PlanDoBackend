import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstateModule } from 'src/estate/estate.module';
import { ReserveController } from './reserve.controller';
import { ReserveSchema } from './reserve.schema';
import { ReserveService } from './reserve.service';

@Module({
  imports: [
    EstateModule,
    MongooseModule.forFeature([{ name: 'Reserve', schema: ReserveSchema }]),
  ],
  controllers: [ReserveController],
  providers: [ReserveService],
  exports: [ReserveService],
})
export class ReserveModule {}
