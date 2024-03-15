import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RoleGuard } from './common/guards/role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'Shalgham.com' });
  app.setGlobalPrefix('api/v1');

  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
