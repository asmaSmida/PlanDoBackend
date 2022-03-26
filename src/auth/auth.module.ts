import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
@Module({
    imports: [
        UserModule,
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: 'secret',
                signOptions: { expiresIn: '3600s' }
            }),
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService ],
    exports: [AuthService],
})
export class AuthModule { }
