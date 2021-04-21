import { Student } from './student';
import { Subject } from './subject';


export class Class {

  id!: number;
  name!: string;
  students!: Array<Student>;
  subjects!: Array<Subject>;

}
