function grading(grade){
    if (grade >= 90) {
        console.log(`The grade is A`);
    }
    else if(grade >=80){
        console.log(`The grade is A-`);
    } 
        else if(grade >=70){
            console.log(`The grade is B`); 
        }
            else if(grade >=60){
                console.log(`The grade is B-`); 
            }
                else if(grade >=50){
                    console.log(`The grade is C`); 
                }
                    else if(grade >=40){
                        console.log(`The grade is C-`); 
                    }
                        else if(grade >=30){
                            console.log(`The grade is D`);
                        } 

    }
    grading(30);
    grading(60);
    grading(88);
    