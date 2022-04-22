import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExisitingHostDTO } from 'src/host-auth/host/dtos/existing-host.dto';
import { NewHostDTO } from 'src/host-auth/host/dtos/new-host.dto';
import { HostDetails } from 'src/host-auth/host/host-details.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class HostAuthController {
    constructor(
        private authService:AuthService,
        private readonly configService: ConfigService
        ){} 
    @Post('register-host')
    register(@Body() host: NewHostDTO):Promise<HostDetails |null>{
        console.log(this.configService.get('APP_PORT'));
        
        return this.authService.register(host);
    }
    @Post('login')
    @HttpCode(HttpStatus.OK) //when an element is createdthe status code is 201 ,here we are overriding it
    login(@Body() host: ExisitingHostDTO):Promise<{token:string}|null>{
         return this.authService.login(host);
    }
}

