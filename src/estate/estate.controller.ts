import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { defaultMaxListeners } from 'events';
import { EstateDetails } from './estate-details.interface';
import { EstateService } from './estate.service';
import { NewEstateDetails } from './new-estate-details.interface';

@Controller('estate')
export class EstateController {
  constructor(private estateService: EstateService) {}
  @Get(':id')
  getEstate(@Param('id') id: string): Promise<EstateDetails | null> {
    return this.estateService.findById(id);
  }
  @Post('add-estate')
  addEstate(@Body() estate: NewEstateDetails): Promise<EstateDetails | null> {
    return this.estateService.create(estate);
  }
}
