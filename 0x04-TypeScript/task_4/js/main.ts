interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC?: number;
}

namespace Subjects {
  // Create and export constants for subjects
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // Create and export cTeacher with experienceTeachingC = 10
  export const cTeacher: Teacher = {
    firstName: "Alice",
    lastName: "Smith",
    experienceTeachingC: 10
  };

  // Cpp subject
  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements()); // Expected: Here is the list of requirements for Cpp
  console.log(cpp.getAvailableTeacher()); // Expected: Available Teacher: Alice

  // Java subject
  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements()); // Expected: Here is the list of requirements for Java
  console.log(java.getAvailableTeacher()); // Expected: No available teacher

  // React subject
  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements()); // Expected: Here is the list of requirements for React
  console.log(react.getAvailableTeacher()); // Expected: No available teacher
}