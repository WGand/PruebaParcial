import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrarEstudiante } from './Application/RegistrarEstudiante';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RegistrarEstudiante],
})
export class AppModule {}
