import { Body, Controller, Get, Post } from '@nestjs/common';
import { Estate } from 'src/estate/estate.schema';
import { EstatesService } from './estates.service';

@Controller('estates')
export class EstatesController {
    constructor(private estatesService: EstatesService) {}

  @Get()
  async findAll(): Promise<Estate[]> {
    return this.estatesService.findAll();
  }
}
