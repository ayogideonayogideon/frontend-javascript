interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Gideon",
  lastName: "Ayodele",
  age: 22,
  location: "Nigeria"
};

const student2: Student = {
  firstName: "sam",
  lastName: "Fire",
  age: 25,
  location: "Nigeria"
};

// Array containing the students
const studentsList: Student[] = [student1, student2];

// Render a table in Vanilla JS
const table: HTMLTableElement = document.createElement('table');
const tableHead: HTMLTableSectionElement = document.createElement('thead');
const headerRow: HTMLTableRowElement = document.createElement('tr');

// Create table headers
const headerFirstName: HTMLTableCellElement = document.createElement('th');
headerFirstName.textContent = "First Name";
const headerLocation: HTMLTableCellElement = document.createElement('th');
headerLocation.textContent = "Location";

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

const tableBody: HTMLTableSectionElement = document.createElement('tbody');

// Add rows for each student
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);