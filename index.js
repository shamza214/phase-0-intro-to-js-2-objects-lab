const employee = { 
    name: "Sam", 
    streetAddress: "11 Broadway",
}
function updateEmployeeWithKeyAndValue(object, key, value){
    const copyObject = {...object}
    copyObject[key] = value;

  return copyObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    employee.streetAddress = "12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(object, key, value){
    const copyObjectTwo = {...employee}
    delete copyObjectTwo[key]
    return copyObjectTwo
}
function destructivelyDeleteFromEmployeeByKey(employee, name, Sam){
    delete employee[name]
    return employee

}