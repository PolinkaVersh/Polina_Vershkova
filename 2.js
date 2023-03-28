var month = prompt("Enter the month number, e.g. (1 — январь, 2 — февраль, ...)", 1);
var days;

switch(month) {
  case '1':  
  	days = 31; //Jan
    console.log("Amount of days = " + days);
    break;

  case '2': 
  	days = 28; //Feb
    console.log("Amount of days = " + days);
    break;

  case '3':  
  	days = 31; //Mar
    console.log("Amount of days = " + days);
    break;

  case '4':  
  	days = 30; //Apr
    console.log("Amount of days = " + days);
    break;

  case '5':  
  	days = 31; // May
    console.log("Amount of days = " + days);
    break;

  case '6':  
  	days = 30; //June
    console.log("Amount of days = " + days);
    break;

  case '7':  
  	days = 31; //July
    console.log("Amount of days = " + days);
    break;

  case '8':  
  	days = 31; // Aug
    console.log("Amount of days = " + days);
    break;

  case '9':  
  	days = 30; //Sep
    console.log("Amount of days = " + days);
    break;

    case '10':  
  	days = 31; //Oct
    console.log("Amount of days = " + days);
    break;

    case '11':  
  	days = 30; //Nov
    console.log("Amount of days = " + days);
    break;

    case '12':  
  	days = 31; //Dec
    console.log("Amount of days = " + days);
    break;

  default:
    console.log("Wrong input");
    break;
}