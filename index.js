// Your code here
function createEmployeeRecord(employeeArray) {
    let employeeObj = {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3],
      timeInEvents: [],
      timeOutEvents: []
    }
    return employeeObj
  }

  function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(array => {
      return createEmployeeRecord(array)
    })
  }
  function createTimeInEvent(employeeObj, timeStamp) {
    const time = timeStamp.split(" ")[1]
    const date = timeStamp.split(" ")[0]  
    const timeInObj = {}

    timeInObj.type = "TimeIn"
    timeInObj.hour = parseInt(time)
    timeInObj.date = date

    employeeObj.timeInEvents.push(timeInObj)

    return employeeObj

}
function createTimeOutEvent(employeeObj, timeStamp) {
    const time = timeStamp.split(" ")[1]
    const date = timeStamp.split(" ")[0]  
    const timeInObj = {}

    timeInObj.type = "TimeOut"
    timeInObj.hour = parseInt(time)
    timeInObj.date = date

    employeeObj.timeInEvents.push(timeInObj)

    return employeeObj

}
function hoursWorkedOnDate(employee, workDate) {
    let startTime = employee.timeInEvents.find(function(e) {
        return e.date === workDate;
    });
    let endTime =employee.timeOutEvents.find(function(e) {
        return e.date === workDate;
    });
}

function wagesEarnedOnDate(record, dateStamp) {
    let hours = parseInt(hoursWorkedOnDate(record, dateStamp))
    let wagePerHour =parseInt(records.payPerHour)
    let wagesEarned = hours * wagePerHour
    return wagesEarned
}
function allWagesFor(record) {
    let dates = record.timeInEvents.map(function(x) {
        return x.date
    
})
let pay = dates.reduce(function(total,element){
   return total = total + wagesEarnedOnDate(record, element) 
}, 0)
        return pay
}

function calculatePayroll(record) {
    let totalPay =employeeRecs.reduce(total, record) => total + allWagesFor(employeeRec), 0
    return totalPay;
};