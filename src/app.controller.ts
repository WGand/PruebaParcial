import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CrearEstudianteDTO } from './Application/CrearEstudiante.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('estudiante')
  crearEstudiante(@Body() crearEstudianteDTO: CrearEstudianteDTO): void {
    return this.appService.createStudent(crearEstudianteDTO);
  }
}
