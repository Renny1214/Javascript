//CREATION

  //new Date()
   let now = new Date();
   alert( now ); // shows current date/time

  //new Date(milliseconds)
   let Jan01_1970 = new Date(0);
   alert( Jan01_1970 );

   let Jan02_1970 = new Date(24 * 3600 * 1000);
   alert( Jan02_1970 );

   //new Date(datestring)
    let date = new Date("2017-01-26");
    alert(date);

   //new Date(year, month, date, hours, minutes, seconds, ms)
    new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
    new Date(2011, 0, 1); // the same, hours etc are 0 by default

    let date = new Date(2011, 0, 1, 2, 3, 4, 567);
    alert( date ); // 1.01.2011, 02:03:04.567


//ACCESS DATE Components
getFullYear();  //--> Get the year (4 digits)
getMonth();   // --> Get the month, from 0 to 11.
getDate();    //--> Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
getHours();    //--> Get the corresponding time components.
getMinutes();
getSeconds();
getMilliseconds();
getDay();    //--> Get the day of week, from 0 (Sunday) to 6 (Saturday). 
    
   //All the methods above return the components relative to the local time zone.
   alert( date.getUTCHours() );  //for UTC add UTC after get

getTime();
getTimezoneOffset();


//SETTING DATE COMPONENTS
/*
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/

  let today = new Date();

  today.setHours(0);
  alert(today); // still today, but the hour is changed to 0

  today.setHours(0, 0, 0, 0);
  alert(today); // still today, now 00:00:00 sharp.


//AUTOCORRECTION
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...is 1st Feb 2013!

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
alert( date ); // 1 Mar 2016

let date = new Date();
date.setSeconds(date.getSeconds() + 70);
alert( date ); // shows the correct date

let date = new Date(2016, 0, 2); // 2 Jan 2016
date.setDate(1); // set day 1 of month
alert( date );
date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert( date ); // 31 Dec 2015


//DATE TO NUMBER , DATE DIFF
let date = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()


  let start = new Date(); // start measuring time
  // do the job
  for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
  }
  let end = new Date(); // end measuring time
  alert( `The loop took ${end - start} ms` );


//Date.now()

  let start = Date.now(); // milliseconds count from 1 Jan 1970
  // do the job
  for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
  }
  let end = Date.now(); // done
  alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates


//Date.parse from a string

/*
The method Date.parse(str) can read a date from a string.

The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

YYYY-MM-DD – is the date: year-month-day.
The character "T" is used as the delimiter.
HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z that would mean UTC+0.
Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.

The call to Date.parse(str) parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the format is invalid, returns NaN.
*/

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417  (timestamp)

let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
alert(date);


//more functions

  //1 .new Date(year, month, date, hour, minute, second, millisecond)
   let d1 = new Date(2012, 1, 20, 3, 12);
   alert( d1 );

  //2.
  function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  let date = new Date(2014, 0, 3); // 3 Jan 2014
  alert( getWeekDay(date) ); // FR

  //3.
  function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
   } 

   //4.
   function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
   }
   alert( getLastDayOfMonth(2012, 0) ); // 31
   alert( getLastDayOfMonth(2012, 1) ); // 29
   alert( getLastDayOfMonth(2013, 1) ); // 28

   //5.
   function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
    }
    alert( getSecondsToday() );