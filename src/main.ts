import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
  });
  (app as NestExpressApplication).use(cookieParser());
  await app.listen(3001);
}
bootstrap();
