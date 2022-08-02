//initializing the variables

fn = "";
fn2 = "";
count = 0;
ncount = 0;
initialOperatorValue = "";
operatorValue = "";
resultValue = 0;
buttonCount = 0;

//all clear button
function ac() {

    fn = "";
    fn2 = "";
    count = 0;
    ncount = 0;
    initialOperatorValue = "";
    operatorValue = "";
    resultValue = 0;
    document.getElementById("n1").innerHTML = "";
    document.getElementById("n2").innerHTML = "";

}

function del() {
    
    // console.log(fn.charAt(2));
    
    if (count<1){
        fn = fn.slice(0,-1);
        console.log(fn);
        document.getElementById("n2").innerHTML = fn;   
    }

    else {
        console.log("kera");
        if(resultValue=0) {
            console.log("kera2");
            delString = delString.splice(0,-1);
            document.getElementById("n1").innerHTML = delString;
        }
    }



}

//to know which button is being pressed
function button(int) {
    if (count == 0) {
        n = int.toString();
        fn += n;
        console.log(fn);
        document.getElementById("n2").innerHTML = fn;
    }

    if (count >= 1) {
        n2 = int.toString();
        fn2 += n2;
        console.log(fn2);
        document.getElementById("n2").innerHTML="";

        document.getElementById("n2").innerHTML = fn2;

    }

}


function operator(initialOperatorValue) { //to get the operator value(+,-,*,/)
    count += 1; //initiating count 
    

    function initial(){//initiating function
        
        if (initialOperatorValue == "add") {//checking the operator
            operatorValue = "add";//storing the value of the given operator
            delString=fn + "+";
           
        }
        else if (initialOperatorValue == "substract") {
            operatorValue = "substract";
            delString=fn + "-";
            
        }
        else if (initialOperatorValue == "multiply") {
            operatorValue = "multiply";
            delString=fn + "&times";
            
        }
        else if (initialOperatorValue == "divide") {
            operatorValue = "divide";
            delString=fn + "/";
            
        }
        document.getElementById("n1").innerHTML = delString;
        document.getElementById("n2").innerHTML = "";
    }
   

    if (count > 1) {//looping this content only if the user continuosly presses the operator buttons
        result(); //calling result function 
        
        initial();//calling the function 
       
        fn2 = "";//clearing the value of the 2nd number as we get the number from the user
    }

    else {
        initial();
    }
    
}

//result
function result() {
    if (operatorValue == "add") {
        resultValue = parseFloat(fn) + parseFloat(fn2); //adding 

    }
    else if (operatorValue == "substract") {
        resultValue = parseFloat(fn) - parseFloat(fn2);//substracting

    }
    else if (operatorValue == "multiply") {
        resultValue = parseFloat(fn) * parseFloat(fn2);//multiplication

    }
    else if (operatorValue == "divide") {
        resultValue = parseFloat(fn) / parseFloat(fn2);//division

    }
    console.log(resultValue);
    document.getElementById("n2").innerHTML = resultValue;
    document.getElementById("n1").innerHTML = "";
    fn = resultValue;//from the result, get the initial value of the result
    
    // // fn=0;
    // fn2="";

}

function equals(){
    result();
    count=0;
    // fn = fn.toString();
    // fn=0;
    fn2="";
}


