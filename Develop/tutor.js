console.log("Linked!");
//DATATYPES IN JAVASCRIPT
// 1. bOOLEAN - true or false
// 2. String - "" or '' or ``
// 3. Number - 5.5
// 4. null/undefined
// 5. Array - [elemeent, element2, element3] -> STORE MULTIPLE THINGS
// 6. Object - {key:value, property: value, key2: value2} -> USED TO STORE MULTIPLE PIECES OF INFORMATION ABOUT ONE THING 

const employee = {
    firstName: "Kevin",
    lastName: "Hoang",
    age: 27
}
const employeeTwo = {
    firstName: "Alex",
    lastName: "Gonzalez",
    age: 26
}
console.log(employee)
console.log(employeeTwo)

const employeeList = [employee,employeeTwo, "haha!", 555, null, undefined, true, false, [1,2,3,4,5,6], {}]
const employeeFromList = employeeList[0];
console.log("Zero Index: ", employeeFromList.firstName.toUpperCase())
console.log("asjkdfkasdfl".toUpperCase())
const names = [1,2,3]
console.log("Employee List : ", employeeList);
var myName = "veronica"
var returnedValue = myName.toUpperCase()
console.log("MyName: ", myName)
console.log("Returned value: ", returnedValue.concat(" Lopez"))
function findName(){

}

function logValue(poop){
    console.log("Logging poop: ", poop)
}

logValue([])
logValue(employeeTwo)
logValue(employeeList)