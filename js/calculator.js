//initializing the variables

fn = "";
fn2 = "";
count = 0;
ncount = 0;
initialOperatorValue = "";
operatorValue = "";
resultValue = 0;

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

        document.getElementById("n2").innerHTML = fn2;

    }

}


function operator(initialOperatorValue) { //to get the operator value(+,-,*,/)
    count += 1; //initiating count 
    

    function initial(){//initiating function
        if (initialOperatorValue == "add") {//checking the operator
            operatorValue = "add";//storing the value of the given operator
            document.getElementById("n1").innerHTML = fn + "+";
        }
        else if (initialOperatorValue == "substract") {
            operatorValue = "substract";
            document.getElementById("n1").innerHTML = fn + "-";
        }
        else if (initialOperatorValue == "multiply") {
            operatorValue = "multiply";
            document.getElementById("n1").innerHTML = fn + "×";
        }
        else if (initialOperatorValue == "divide") {
            operatorValue = "divide";
            document.getElementById("n1").innerHTML = fn + "/";
        }
        document.getElementById("n2").innerHTML = "";
    }
   

    if (count > 1) {//looping this content only if the user continuosly presses the operator buttons
        result(); //calling result function 
        fn = resultValue;//from the result, get the initial value of the result
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




}



