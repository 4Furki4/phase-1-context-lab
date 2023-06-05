/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}
function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}
function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
}
function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(e => e.date === date)
    let timeOut = this.timeOutEvents.find(e => e.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}
function findEmployeeByFirstName(arr, firstName) {
    return arr.find(e => e.firstName === firstName)
}
function calculatePayroll(arr) {
    return arr.reduce((total, e) => total + allWagesFor.call(e), 0)
}