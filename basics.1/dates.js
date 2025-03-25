// dates

let mydate =new Date()
// console.log(mydate.toString());
// // day month date year time GMT+0000
// console.log(mydate.toDateString());
// // dat month date year
// console.log(mydate.toISOString());
// // year-month-dateTtime.105z
// console.log(mydate.toJSON());
// // year-month-dateTtime.105z
// console.log(mydate.toLocaleDateString());
// // month/date/year
// console.log(mydate.toLocaleString());
// // month/date/year, time(in am or pm)

// let mycreateddate = new Date(2025,0,23)
// let mycreateddate = new Date(2025,0,23,5,3)
// console.log(mycreateddate);
// console.log(mycreateddate.toLocaleString());

let mytimestamp =Date.now()

console.log(mytimestamp);
// console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getMonth());

newdate.toLocaleString('default',{
    weekday:"long",
    
})
