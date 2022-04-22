import { Module } from '@nestjs/common';
import { UserModule } from 'src/client-auth/user/user.module';
import { AuthService } from './auth.service';
import { UserAuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
@Module({
    imports: [
        UserModule,
        JwtModule.registerAsync({
             useFactory: () => ({
                secret: 'secret',
                signOptions: { expiresIn: '3600' }
            }),
        }),
        
    ],
    controllers: [UserAuthController],
    providers: [AuthService ],
    exports: [AuthService],
})
export class UserAuthModule { }
