import { Grades } from "./grades";

export class Student {

  id!: number;
  dob!: Date;
  username!: string;
  grades!: Array<Grades>;
  password!: string;
  surname!: string;
  userRole!: string;
  name!: string;
}
