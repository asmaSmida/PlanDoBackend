import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { defaultMaxListeners } from 'events';
import { GetUser } from 'src/client-auth/decorateur/getUser.paramDecorater';
import { User } from 'src/client-auth/user/user.schema';
import { Host } from 'src/host-auth/host/host.schema';
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
  // @UseGuards(AuthGuard('jwt')) 
  addEstate(@Body() estate: NewEstateDetails,
   @GetUser() user:Host): Promise<EstateDetails | null> {
    console.log('user '+ user); 
    return this.estateService.create(estate);
  }
}
