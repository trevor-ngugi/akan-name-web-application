
    function result(day,month,century,year,gender){
        var century1=(parseInt(century)/4)-2*parseInt(century)-1;
        var year1=5*parseInt(year)/4;
        var month1=(26*(parseInt(month)+1)/10)+parseInt(day);
        var dayOfWeek1=Math.trunc((century1+year1+month1)%7);
         
                                                    
    
    var maleNames=["Kwasi", "Kwadwo", "Kwabena" ,"Kwaku", "Yaw","Kofi", "Kwame"];
    var femaleNames=[ "Akosua","Adwoa","Abenaa","Akua","Yaa","Afua", "Ama"];
    var days=["sunday ","monday" ,"tuesday ","wednesday" ,"thursday ","friday", "saturday"]

    
    if(dayOfWeek1===0 & female.checked){alert("your akan name is "+femaleNames[0]);}
        else if (dayOfWeek1===1 &&female.checked){alert("your akan name is "+femaleNames[1]);}
        else if (dayOfWeek1===2 &&female.checked){alert("your akan name is "+femaleNames[2]);}
        else if (dayOfWeek1===3 &&female.checked){alert("your akan name is "+femaleNames[3]);}
        else if (dayOfWeek1===4 &&female.checked){alert("your akan name is "+femaleNames[4]);}
        else if (dayOfWeek1===5 &&female.checked){alert("your akan name is "+femaleNames[5]);}
        else if (dayOfWeek1===6 &&female.checked){alert("your akan name is "+femaleNames[6]);}

    if(dayOfWeek1===0 && male.checked ){alert("your akan name is "+maleNames[0]);}
        else if (dayOfWeek1===1 && male.checked){alert("your akan name is "+maleNames[1]);}
        else if (dayOfWeek1===2 && male.checked){alert("your akan name is "+maleNames[2]);}
        else if (dayOfWeek1===3 && male.checked){alert("your akan name is "+maleNames[3]);}
        else if (dayOfWeek1===4 && male.checked){alert("your akan name is "+maleNames[4]);}
        else if (dayOfWeek1===5 && male.checked){alert("your akan name is "+maleNames[5]);}
        else if ( male.checked && male.checked){alert("your akan name is "+maleNames[6]);}

    
    
    
    
    
    
    
    }  //bracket line 4                           
                                            
                                            
                                                     
    


 