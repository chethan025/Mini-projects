var fhm= Math.floor(Math.random()*11)
            console.log(fhm);
            while(true){
                var gnum=Number(prompt("enter a number"))
                if(gnum==fhm){
                    alert ("Correct")
                    
                }
                else{
                    alert("correct number was "+fhm)
                    break;
                }
            }