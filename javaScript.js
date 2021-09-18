
//Question 1
function calcSimpleInterest(){
    var P = parseFloat(prompt("Enter the Principle Amount"));
    if(isNaN(P) || P < 0){
        alert("Please provide correct input");
        return;
    }
    var R = parseFloat(prompt("Enter the Interest Rate"));
    if(isNaN(R) || R < 0){
        alert("Please provide correct input");
        return;
    }
    var T = parseFloat(prompt("Enter the Time Period"));
    if(isNaN(T) || T < 0){
        alert("Please provide correct input");
        return;
    }

    alert("Calculated Simple Interest: "+ P*R*T/100);
}


//Question 2
function isPalindrome(){
    var str = prompt("Enter the String");
    if(str == null || str === ""){
        alert("Please provide correct input");
        return;
    } 

    var res = true;
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            res = false;
        }
    }
    
    if(res){
        alert("Your String "+str+" is Palindrome String");
    } else{
        alert("Your String "+str+" is not Palindrome String");
    }
}

// Question 3
function areaCircle(){
    var r = parseFloat(prompt("Enter the radius of circle"));
    if(isNaN(r) || r < 0){
        alert("Please provide correct input");
        return;
    }

    alert("Area of circle with radius "+r+ " is "+3.14*r*r);
}


// Question 4
function logPropertyToConsole(){
    var stuDetails = {
        name:"Shubham",
        batch:"B1",
        rollNo:34
    };

    //new empty object
    var newObj = {};
    newObj = copyObjectProperities(stuDetails,newObj);
    console.log("\nOriginal Object(stuDetails):\n"+JSON.stringify(stuDetails,null,4)+"\nCopied Object(newObj):\n"+JSON.stringify(newObj,null,4));
}
function copyObjectProperities(source,target){
    for(property in source){
        target[property] = source[property];
    }
    return target;
}


//Question 5
function objEmployee(){

    // 1st point
    var emp0 = {
        name:"Jhon",
        age: 22,
        salary:8000,
        dob: "28-10-1999"
    };
    var emp1 = {
        name:"Mike",
        age: 20,
        salary:4000,
        dob: "12-08-1989"
    };
    var emp2 = {
        name:"Naima",
        age: 32,
        salary:10000,
        dob: "27-01-1979"
    };
    var emp3 = {
        name:"Dee",
        age: 22,
        salary:890,
        dob: "02-06-1996"
    };
    var emp4 = {
        name:"Jade",
        age: 32,
        salary:500,
        dob: "12-02-1999"
    };
    var emp5 = {
        name:"Cristine",
        age: 16,
        salary:990,
        dob: "17-08-1996"
    };

    var objlist = [emp0,emp1,emp2,emp3,emp4,emp5];
    console.log("\nMy Employee List:\n"+JSON.stringify(objlist,null,4));

    //2nd point
    const salGreaterThan = objlist.filter(emp => emp.salary > 5000);
    console.log("\nEmployee with salary greater then 5000:\n"+JSON.stringify(salGreaterThan,null,4));

    //3rd point
    const groupedByAge = objlist.reduce((group, obj) => {
        const key = obj["age"];
        if (!group[key]) {
           group[key] = [];
        }

        group[key].push(obj);
        return group;
     }, {});
     console.log("\nEmployee grouped by age:\n"+JSON.stringify(groupedByAge,null,4));

    //4th point
    objlist.map(emp =>{
        if(emp.age > 20 && emp.salary < 1000){
            emp.salary += emp.salary*5;
            return emp;
        }
    })
    console.log("\nNew List:\n"+JSON.stringify(objlist,null,4));
}