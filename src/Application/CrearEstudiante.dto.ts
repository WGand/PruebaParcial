import { StudentContract } from 'src/Domain/StudentInterface';

export class CrearEstudianteDTO implements StudentContract {
  name: string;
  surname: string;
  username: string;
  email: string;
}
