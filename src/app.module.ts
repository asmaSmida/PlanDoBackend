import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; //to make a db connection
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { HostModule } from './host-auth/host/host.module';
import { UserModule } from './client-auth/user/user.module';
import { HostAuthController } from './host-auth/auth/auth.controller';
import { UserAuthController } from './client-auth/auth/auth.controller';
import { HostAuthModule } from './host-auth/auth/auth.module';
import { UserAuthModule } from './client-auth/auth/auth.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const DB = process.env.DB_connection;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    UserAuthModule,
    MongooseModule.forRoot(DB),
    HostAuthModule,
    HostModule,
  ],
  controllers: [AppController, HostAuthController, UserAuthController],
  providers: [AppService],
})
export class AppModule {}
