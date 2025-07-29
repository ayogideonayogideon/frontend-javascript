// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional attributes
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Define the StudentClass constructor interface
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the StudentClass interface
export interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Define the StudentClass
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create a teacher instance
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

// Log the teacher object
console.log(teacher3);

// Test the printTeacher function
console.log(printTeacher("John", "Doe")); // Should print: J. Doe

// Test the StudentClass
const student = new StudentClass("Alice", "Smith");
console.log(student.displayName()); // Should print: Alice
console.log(student.workOnHomework()); // Should print: Currently working