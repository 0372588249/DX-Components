import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.json'],
    }),
  ],
  exports: [ConfigService],
  providers: [ConfigService],
})
export class SharedModule {}
