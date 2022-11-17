import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )

  const configService = app.get(ConfigService);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle(configService.get('APP_NAME'))
    .setDescription(configService.get('APP_DESCRIPTION'))
    .setVersion(configService.get('API_VERSION'))
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log('PORT::', configService.get('PORT') || 3000);
  await app.listen(configService.get('PORT') || 3000);
}

bootstrap();