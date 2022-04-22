import { Module } from '@nestjs/common';
import { HostModule } from 'src/host-auth/host/host.module';
import { AuthService } from './auth.service';
import { HostAuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
@Module({
    imports: [
        HostModule,
        JwtModule.registerAsync({
             useFactory: () => ({
                secret: 'secret',
                signOptions: { expiresIn: '3600' }
            }),
        }),
        
    ],
    controllers: [HostAuthController],
    providers: [AuthService ],
    exports: [AuthService],
})
export class HostAuthModule { }
