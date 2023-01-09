import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //tzidik /api kodem l localhost mch tfark bin api w front end
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
