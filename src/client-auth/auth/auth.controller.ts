import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExisitingUserDTO } from 'src/client-auth/user/dtos/existing-user.dto';
import { NewUserDTO } from 'src/client-auth/user/dtos/new-user.dto';
import { UserDetails } from 'src/client-auth/user/user-details.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class UserAuthController {
    constructor(
        private authService: AuthService,
        private readonly configService: ConfigService
<<<<<<< HEAD:src/client-auth/auth/auth.controller.ts
        ){} 
    @Post('register-user')
    register(@Body() user: NewUserDTO):Promise<UserDetails |null>{
=======
    ) { }
    @Post('register')
    register(@Body() user: NewUserDTO): Promise<UserDetails | null> {
>>>>>>> 068e08cbea42edec91e0a57df3a0ebcfc1bab63c:src/auth/auth.controller.ts
        console.log(this.configService.get('APP_PORT'));

        return this.authService.register(user);
    }
    @Post('login')
    @HttpCode(HttpStatus.OK) //when an element is createdthe status code is 201 ,here we are overriding it
    login(@Body() user: ExisitingUserDTO): Promise<{ token: string } | null> {
        return this.authService.login(user);
    }
}

