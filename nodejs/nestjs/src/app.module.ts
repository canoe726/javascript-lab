import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import emailConfig from 'config/emailConfig';
import { validationSchema } from 'config/validationSchema';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { BaseModule } from './services/base/base.module';
import { UsersModule } from './services/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`./config/env/.${'development'}.env`],
      isGlobal: true,
      load: [emailConfig],
      validationSchema,
    }),
    CoreModule,
    BaseModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
