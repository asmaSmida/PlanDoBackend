import { Controller,Get, Param } from '@nestjs/common'; 
import { HostDetails } from './host-details.interface';
import { HostService } from './host.service';

@Controller('host')
export class HostController {
    constructor(private hostService:HostService){}
    @Get(':id')
    getHost(@Param('id') id:string):Promise<HostDetails|null>{
        return this.hostService.findById(id);
    }
}
