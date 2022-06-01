import { Module } from '@nestjs/common';
import { HostModule } from 'src/host-auth/host/host.module';
import { AuthService } from './auth.service';
import { HostAuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt'; 
import { JwtStrategy } from './strategy/JwtStrategy';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    HostModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: "48h" },
    }), 
  ],
  controllers: [HostAuthController],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService,JwtStrategy],
})
export class HostAuthModule {}
