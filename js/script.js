//to get input from html and save it in variable

var name1="firstname"
var name2="lastname"

alert(x)
// calculates the function of cc
var cc=[19,20,21]
function century(){
return (cc[0]/4)-2*cc[0]-1
}
var centuryResult=century()

// calculates the function of year
var yy=[11,12,13];
function year(){
return  5*yy[0]/4;
}
var yearResult=year()

// calculates the function of month
var month=[1,2,3];
function mm(){
return 26*(month[1]+1)/10;
}
var monthResult=mm()

//calculates the totatl of the day of the week
var dayOfMonth=[27,28,29]
var dayOfWeek=(centuryResult+yearResult+monthResult+dayOfMonth[2])%7

//use get value of id  to put into the functions
//variables of gender 
var gender=["male ","female" ];

var maleDays=["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"];
var maleNames=["Kwasi", "Kwadwo", "Kwabena" ,"Kwaku", "Yaw","Kofi", "Kwame"];

//if function for male names
if(dayOfWeek===0){console.log(maleNames[0]);}
	else if (dayOfWeek===1){console.log(maleNames[1]);}
    else if (dayOfWeek===2){console.log(maleNames[2]);}
    else if (dayOfWeek===3){console.log(maleNames[3]);}
    else if (dayOfWeek===4){console.log(maleNames[4]);}
	else if (dayOfWeek===5){console.log(maleNames[5]);}
    else if (dayOfWeek===6){console.log(maleNames[6]);}
    //add else function to close it