namespace Subjects {
  export class Subject {
    teacher!: Teacher; // Trust me, I’ll assign this later

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}