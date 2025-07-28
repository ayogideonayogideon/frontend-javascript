/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create a RowElement object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert row and get newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Update row with age
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};

// Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

// Checks to verify functionality
const obj = { firstName: "Guillaume", lastName: "Salva" };
console.log(CRUD.insertRow(obj)); // Expected: Insert row {firstName: "Guillaume", lastName: "Salva"}
console.log(CRUD.updateRow(newRowID, updatedRow)); // Expected: Update row <random_id> {firstName: "Guillaume", lastName: "Salva", age: 23}
console.log(CRUD.deleteRow(newRowID)); // Expected: Delete row id <random_id>