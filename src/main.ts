import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ConfigService } from './shared/services/config/config.service';
import { bootstrapApp } from './utils/bootstrap-app';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = new ConfigService();
  const { port, host } = configService;
  bootstrapApp(app, configService);

  console.log(`api server started host: ${host}:${port} `);

  await app.listen(port);
}
bootstrap();
