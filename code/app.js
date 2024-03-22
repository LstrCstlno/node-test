const lodash = require("lodash");
const moment = require("moment");

let time1 = moment().format('MMMM Do YYYY, h:mm:ss a');
let time2 = moment().format(`dddd`)
let time3 = moment().format(`MMMM Do YYYY`)

let validity1 = moment("20200101", "YYYYMMDD").isValid();
let validity2 = moment("20201401", "YYYYMMDD").isValid();

let add7Day = moment().add(7, `days`);
let add7Month = moment().add(7, `months`);
let add7Year = moment().add(7, `years`);
let subtract7Day = moment().subtract(7, `days`);
let subtract7Month = moment().subtract(7, `months`);
let subtract7Year = moment().subtract(7, `years`);

let date1 = moment("2014-11-11") 
let date2 = moment("2015-09-11")
let diff = date1.diff(date2, "days")

function CheckDIfference(num, a, b){
    if (num < 0) {
        return `${b} comes after ${a}`
    }else{
        return `${a} comes after ${b}`
    }
}

function findDifference(a,b){
    let date1 = moment(a);
    let date2 = moment(b);
    let diff = date1.diff(date2, "days");
    return CheckDIfference(diff, a, b)
}

let diff1 = findDifference("2014-11-27", "2015-09-16")
let diff2 = findDifference("2020-01-01", "2018-01-01")
let diff3 = findDifference("2010-01-01", "2018-01-01")

let chunk1 = lodash.chunk(['a', 'b', 'c', 'd'], 2);

var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];

console.log(lodash.find(users, function(o) { return o.age < 40; }));
  // => object for 'barney'

  // The `lodash.matches` iteratee shorthand.
console.log(lodash.find(users, { 'age': 1, 'active': true }));
  // => object for 'pebbles'

  // The `lodash.matchesProperty` iteratee shorthand.
console.log(lodash.find(users, ['active', false]));
  // => object for 'fred'

  // The `lodash.property` iteratee shorthand.
lodash.find(users, 'active');
  // => object for 'barney'



console.log();
console.log(time1);
console.log(time2);
console.log(time3);
console.log(validity1);
console.log(validity2);
console.log(add7Day.format(`MMMM Do YYYY`))
console.log(add7Month.format(`MMMM Do YYYY`))
console.log(add7Year.format(`MMMM Do YYYY`))
console.log(subtract7Day.format(`MMMM Do YYYY`))
console.log(subtract7Month.format(`MMMM Do YYYY`))
console.log(subtract7Year.format(`MMMM Do YYYY`))

console.log(diff)
console.log(diff1)
console.log(diff2)
console.log(diff3)

console.log(moment("2019").isLeapYear())
console.log(moment("2020").isLeapYear())
console.log(chunk1)