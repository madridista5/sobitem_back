import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from "@nestjs/platform-express";
import { config } from "./config/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: config.corsOrigin,
    credentials: true,
  });
  (app as NestExpressApplication).use(cookieParser());
  await app.listen(3001);
}
bootstrap();
