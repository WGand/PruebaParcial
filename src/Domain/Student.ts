import { StudentValueObject } from './StudentVO';
import { StudentContract } from './StudentInterface';

export class Student {
  username: StudentValueObject['username'];
  name: StudentValueObject['name'];
  surname: StudentValueObject['surname'];
  email: StudentValueObject['email'];

  registrar(studentContract: StudentContract): void {
    console.log(studentContract);
  }

  cambiarNombre(): void {
    console.log('asdasdasd');
  }
}
