import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';//to make a db connection
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [  
    ConfigModule.forRoot({
      isGlobal:true
    }),
    UserModule,
    MongooseModule.forRoot('mongodb+srv://salma:salma@cluster0.eeaxx.mongodb.net/plandoDatabase?retryWrites=true&w=majority'), 
    AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService ],
})
export class AppModule {}
