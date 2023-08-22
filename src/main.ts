import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { CAppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(CAppModule);

  const configSwagger = new DocumentBuilder()
    .setTitle('API bank microservice')
    .setDescription('API для bank microservice')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);

  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const errorsValue = errors.reduce((acc, error) => {
          const message = Object.values(error.constraints || {}).join(',');

          return { ...acc, [error.property]: message };
        }, {});

        return new BadRequestException(errorsValue);
      },
    })
  );

  await app.listen(PORT, () => console.log(`Service started on port ${PORT}`));
}
bootstrap();
