import { Body, Controller, Get, Param, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReserveDetails } from './reserve-details.interface';
import { CreateReserveDto } from './reserve-dto';
import { ReserveService } from './reserve.service';

@Controller('reserve')
export class ReserveController {
    constructor(private reserveService: ReserveService) { }
    @Post('reserver')
    reserver(@Body() createReserveDto: CreateReserveDto,
        @Request() req): Promise<ReserveDetails> {
        console.log("hola", req.user);
        return this.reserveService.create(createReserveDto, req.user);
    }

    @Get()
    getReserves() {
        return this.reserveService.findAll();
    }
    @Get(':id')
    findReserve(@Param('id') id: string) {
        return this.reserveService.findOne(id);
    } 

}
