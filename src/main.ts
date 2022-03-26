import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService= app.get(ConfigService);
  app.enableCors();//because we will make requests from react
  app.setGlobalPrefix('plando');
  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
