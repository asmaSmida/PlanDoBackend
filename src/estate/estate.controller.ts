import { Controller, Get, Param } from '@nestjs/common';
import { EstateDetails } from './estate-details.interface';
import { EstateService } from './estate.service';

@Controller('estate')
export class EstateController {
  constructor(private estateService: EstateService) {}
  @Get(':id')
  getEstate(@Param('id') id: string): Promise<EstateDetails | null> {
    return this.estateService.findById(id);
  }
}
