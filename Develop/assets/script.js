// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function(employeeArray, wantAnotherEmployee) {
  if(wantAnotherEmployee === false){
    console.log(employeeArray)
    return employeeArray;
  } 
  // TODO: Get user input to create and return an array of employee objects
  var newEmployee = collectAnEmployee();
  employeeArray.push(newEmployee)
  var userWantsAnotherEmployee = confirm("Do You want to add another employee?")
  return collectEmployees(employeeArray, userWantsAnotherEmployee)
}
const collectAnEmployee = function (){
  let firstNameInput = prompt("What is employee's first name?");
  let lastNameInput = prompt("What is employee's last name?");
  let salaryInput = parseInt(prompt("What is the employee's salary? (type a number)"));

    while (isNaN(salaryInput)){
      alert('This is not a number, please try again');
      salaryInput = parseInt(prompt("What is the employee's salary? (type a number)"));
    }
    
  const employee = {
    firstName: firstNameInput,
    lastName: lastNameInput,
    salary: salaryInput
  }
  return employee;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let sum = parseInt(0);

    for (let i=0; i < employeesArray.length; i++)
      {
        sum += employeesArray[i].salary;
      }

  let avgSalary = sum / employeesArray.length;
  avgSalary = avgSalary.toLocaleString("en-US", {style:"currency", currency:"USD"});
  
      console.log('The average employee salary between our ' + employeesArray.length + ' employee(s) is ' + avgSalary);
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let randomEmployee = getRandomInt(employeesArray.length);
  let i = randomEmployee
  // console.log(employee);
  console.log('Congratulations to ' + employeesArray[randomEmployee].firstName, employeesArray[i].lastName + ', our random drawing winner!');
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees([],true);

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
