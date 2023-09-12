// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddress : '11 Broadway' ,
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyofemployee = {...employee}
    copyofemployee[key] = value
    return(copyofemployee)
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee.streetAddress = "12 Broadway" ;
    return(employee)
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
   delete newEmployee[key] 
    return(newEmployee)
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key] 
     return(employee)

}