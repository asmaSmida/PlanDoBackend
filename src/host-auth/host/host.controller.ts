import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/client-auth/decorateur/getUser.paramDecorater';
import { HostDetails } from './host-details.interface';
import { Host } from './host.schema';
import { HostService } from './host.service';

@Controller('host')
export class HostController {
    constructor(private hostService: HostService) { }
    @Get('/myestates')
    @UseGuards(AuthGuard('jwt'))
    getEstates(
        @GetUser() user ) {
            console.log(user);
            
        return this.hostService.getEstates(user)
    }
    @Get(':id')
    getHost(@Param('id') id: string): Promise<HostDetails | null> {
        return this.hostService.findById(id);
    }

}
