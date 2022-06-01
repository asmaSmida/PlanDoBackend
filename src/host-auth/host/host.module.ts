import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HostController } from './host.controller';
import { HostSchema } from './host.schema';
import { HostService } from './host.service';
import { EstateModule } from 'src/estate/estate.module';

@Module({
  imports: [
    EstateModule, 
    MongooseModule.forFeature([{ name: 'Host', schema: HostSchema }])],// connect the db representation to the object
  controllers: [HostController],
  providers: [HostService],
  exports: [HostService],
})
export class HostModule { }
