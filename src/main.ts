import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();//because we will make requests from react
  app.setGlobalPrefix('plando');
  await app.listen(3000);
}
bootstrap();
