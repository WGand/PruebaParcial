import { Student } from 'src/Domain/Student';
import { CrearEstudianteDTO } from './CrearEstudiante.dto';

export class RegistrarEstudiante {
  student: Student;
  constructor() {
    this.student = new Student();
  }

  registrarEstudiante(estudiante: CrearEstudianteDTO): void {
    this.student.registrar(estudiante);
  }
}
