import { Injectable } from '@nestjs/common';
import { RegistrarEstudiante } from './Application/RegistrarEstudiante';
import { CrearEstudianteDTO } from './Application/CrearEstudiante.dto';

@Injectable()
export class AppService {
  constructor(private registrarEstudiante: RegistrarEstudiante) {}

  createStudent(crearEstudiante: CrearEstudianteDTO) {
    this.registrarEstudiante.registrarEstudiante(crearEstudiante);
  }
}
