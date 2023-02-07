import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { bootstrapRouteLog } from 'utils/bootstrap-route-log';
import { rootLogger } from 'utils/logger';
import { AppModule } from './app.module';
import { ConfigService } from './shared/services/config/config.service';
import { bootstrapApp } from './utils/bootstrap-app';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = new ConfigService();
  const { port, host } = configService;
  bootstrapApp(app, configService);

  const logMessage = `api server started host: ${host}:${port} `;
  await app
    .listen(port, () => {
      rootLogger.info({ port }, logMessage);
      bootstrapRouteLog(app);
    })
    .catch((error) => {
      rootLogger.fatal(
        {
          err: error,
          errorStack: error.stack,
        },
        'fail to start server',
      );
      process.exit(1);
    });
}
bootstrap();
