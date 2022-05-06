import { Module } from '@nestjs/common';
import { UserModule } from 'src/client-auth/user/user.module';
import { AuthService } from './auth.service';
import { UserAuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt'; 
import { JwtStrategy } from './strategy/JwtStrategy';
import { PassportModule } from '@nestjs/passport';
@Module({
    imports: [
        UserModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: 3600 },
          }),

    ],
    controllers: [UserAuthController],
    providers: [AuthService,JwtStrategy],
    exports: [AuthService,JwtStrategy],
})
export class UserAuthModule { }
