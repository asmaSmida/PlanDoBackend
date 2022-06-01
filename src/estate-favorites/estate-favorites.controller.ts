import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/client-auth/decorateur/getUser.paramDecorater';
import { Host } from 'src/host-auth/host/host.schema';
import { EstateFavDetails } from './estate-favorites-details.interface';
import { EstateFavService } from './estate-favorites.service';
import { NewEstateFavDetails } from './new-estate-favorites-details.interface';

@Controller('estate')
export class EstateFavController {
  constructor(private estateFavService: EstateFavService) {}
  @Get(':id')
  getEstate(@Param('id') id: string): Promise<EstateFavDetails | null> {
    return this.estateFavService.findById(id);
  }
  @Get()
  getEstates() {
    return this.estateFavService.findAll();
  }
  @Post('add-estate-favorites')
  @UseGuards(AuthGuard('jwt')) 
  addEstate(@Body() estateFav: NewEstateFavDetails,
   @GetUser() user:Host
   ): Promise<EstateFavDetails | null> {
    console.log('user '+ user); 
    return this.estateFavService.create(estateFav,user);
  }
}
