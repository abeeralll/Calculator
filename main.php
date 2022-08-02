<!DOCTYPE html>
<html lang="en">
<!-- sdfasdf 
just chang   e-->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container content" id="container">
        <div class="calculator-grid ">

            <div class="output">

                <div class="previous-operand" id="n1"></div>
                <div class="current-operand" id="n2"></div>

            </div>

            <button onclick= "ac()" class="span-two" id="white" >AC</button>
            <button onclick="del()" id="white" >DEL</button>
            <button onclick="operator('divide')" id="yellow" >&#247</button>
            <button onclick="button(1)" id="grey"  >1</button>
            <button onclick="button(2)"  id="grey" >2</button>
            <button onclick="button(3)" id="grey" >3</button>
            <button onclick="operator('multiply')" id="yellow">&times</button>
            <button onclick="button(4)" id="grey" >4</button>
            <button onclick="button(5)" id="grey" >5</button>
            <button onclick="button(6)" id="grey" >6</button>
            <button onclick="operator('add')" id="yellow" >+</button>
            <button onclick="button(7)" id="grey" >7</button>
            <button onclick="button(8)" id="grey" >8</button>
            <button onclick="button(9)" id="grey" >9</button>
            <button onclick="operator('substract')" id="yellow">-</button>
            <button onclick="button('.')" id="grey" >.</button>
            <button onclick="button(0)" id="grey" >0</button>
            <button onclick="equals()" class="span-two" id="yellow">=</button>



        </div>
    </div>

    <script src="./js/bootstrap.min.js"> </script>
    <script src="./js/calculator.js"> </script>
   
</body>

</html>