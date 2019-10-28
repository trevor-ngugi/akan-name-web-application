if(("day"<=o || "day">31) && ("month"<=0||"month">12){

    function result(day,month,century,year,gender){
        var century1=(parseInt(century)/4)-2*parseInt(century)-1;
        var year1=5*parseInt(year)/4;
        var month1=(26*(parseInt(month)+1)/10)+parseInt(day);
        var dayOfWeek1=Math.trunc((century1+year1+month1)%7);
        alert(dayOfWeek1);                           }
                                                    }
        else {alert("wrong details")}                                            

    
    //edit this function
    
    var maleNames=["Kwasi", "Kwadwo", "Kwabena" ,"Kwaku", "Yaw","Kofi", "Kwame"];
    var femaleNames=[ "Akosua","Adwoa","Abenaa","Akua","Yaa","Afua", "Ama"];
{
    if(dayOfWeek1===0 && male.checked==true){alert(maleNames[0]);}
        else if (dayOfWeek1===1 &&"male"checked){alert(maleNames[1]);}
        else if (dayOfWeek1===2 &&"male"checked){alert(maleNames[2]);}
        else if (dayOfWeek1===3 &&"male"checked){alert(maleNames[3]);}
        else if (dayOfWeek1===4 &&"male"checked){alert(maleNames[4]);}
        else if (dayOfWeek1===5 &&"male"checked){alert(maleNames[5]);}
        else if (dayOfWeek1===6 &&"male"checked){alert(maleNames[6]);}

    if(dayOfWeek1===0 &&gender[1]){console.log(femaleNames[0]);}
        else if (dayOfWeek1===1 &&gender[1]){console.log(femaleNames[1]);}
        else if (dayOfWeek1===2 &&gender[1]){console.log(femaleNames[2]);}
        else if (dayOfWeek1===3 &&gender[1]){console.log(femaleNames[3]);}
        else if (dayOfWeek1===4 &&gender[1]){console.log(femaleNames[4]);}
        else if (dayOfWeek1===5 &&gender[1] ){console.log(femaleNames[5]);}
        else if (dayOfWeek1===6 &&gender[1]){console.log(femaleNames[6]);}

                                                }                             

                                                
                                                     
    


 