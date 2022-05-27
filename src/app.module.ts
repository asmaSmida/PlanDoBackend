import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; //to make a db connection
import { ConfigModule } from '@nestjs/config'; 
import { HostModule } from './host-auth/host/host.module';
import { UserModule } from './client-auth/user/user.module';
import { HostAuthController } from './host-auth/auth/auth.controller';
import { UserAuthController } from './client-auth/auth/auth.controller';
import { HostAuthModule } from './host-auth/auth/auth.module';
import { UserAuthModule } from './client-auth/auth/auth.module';
import { EstateModule } from './estate/estate.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './validation.pipe';
// eslint-disable-next-line @typescript-eslint/no-var-requires

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    UserAuthModule,
    MongooseModule.forRoot(`${process.env.DB_connection}`),
    HostAuthModule,
    HostModule,
  ],
  controllers: [AppController, HostAuthController, UserAuthController],
  providers: [AppService],

})
export class AppModule {}
