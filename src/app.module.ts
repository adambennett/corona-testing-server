import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule  } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import env from './environment/vars';
import {Patient} from "./entities/patient/patient.entity";
import {PatientModule} from "./entities/patient/patient.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.DB_HOST,
      port: env.DB_PORT,
      username: env.DB_USER,
      password: env.DB_PASS,
      database: env.DB_NAME,
      entities: [Patient],
      synchronize: env.DB_SYNC,
    }),
    PatientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
