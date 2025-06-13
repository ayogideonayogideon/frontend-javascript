export interface Teacher {
  readonly firstName: string;         // readonly firstName
  readonly lastName: string;          // readonly lastName
  fullTimeEmployee: boolean;          // mandatory
  location: string;                   // mandatory
  yearsOfExperience?: number;         // optional
  [propName: string]: any;            // allows any other attribute
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,   // example of extra property
};

console.log(teacher3);
