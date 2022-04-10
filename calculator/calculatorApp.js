const openMenu = document.querySelector('#show-menu');
const hideMenuIcon = document.querySelector('#hide-menu');
const sideMenu = document.querySelector('#nav-menu');

openMenu.addEventListener('click',function(){
    sideMenu.classList.add('active');
});

hideMenuIcon.addEventListener('click', function(){
    sideMenu.classList.remove('active');
});
//Calculator
function calculate(){
    var answer;
    var num1Element=document.getElementById('firstInput').value;
    var operatorElement=document.getElementById('operatorInput').value;
    var num2Element=document.getElementById('secondInput').value;
    var answerElement=document.getElementById('answer');
    var num1=parseInt(num1Element);
    var num2=parseInt(num2Element);
    var operator=parseInt(operatorElement);
    switch(operator){
        case 0:
            answer=num1 + num2;
            break;
        case 1:
            answer=num1-num2;
            break;
        case 2:
            answer=num1*num2;
            break;
        case 3:
            if(num2!=0){
                answer=num1/num2;
            }
            else{
                alert("Divide by zero error");
            }
            break;
        case 4:
            answer=Math.pow(num1,num2);
            break;
        case 5:
            answer=num1%num2;
            break;
        case 6:
            if(num2!=0){
                answer=Math.pow(num1,1/num2);
            }
            else{
                alert("Divide by zero error");
            }
            break;
    }
    answerElement.textContent=answer;
}

function solveLinearEquation(){
    var operatorValue=parseInt(document.getElementById('MToBOperatorInput').value);
    var mValue=parseInt(document.getElementById('LinearEquation-M-Num').value);
    var bValue=parseInt(document.getElementById('LinearEquation-B-Num').value);
    var yValue=parseInt(document.getElementById('LinearEquation-Y-Num').value);
    var answer;
    if(operatorValue===0){
        answer=yValue-bValue;
        answer=answer/mValue;
    }
    else{
        answer=yValue+bValue;
        answer=answer/mValue;
    }
    var xOutputElement=document.getElementById('LinearEquation-x-value');
    xOutputElement.textContent="x="+answer
}

function solveQuadric(){
    
    var aValue=parseInt(document.getElementById('Quadratic-A-Num').value);
    var bValue=parseInt(document.getElementById('Quadratic-B-Num').value);
    var cValue=parseInt(document.getElementById('Quadratic-C-Num').value);
    var yValue=parseInt(document.getElementById('Quadratic-Y-Num').value);
    var answerUsingPlus,answerUsingMinus;
    cValue-=yValue;
    var discriminant=(Math.pow(bValue,2))-(4*aValue*cValue);
    if(discriminant<0){
        discriminant*=-1;
        answerUsingMinus=""+(-1*bValue)+"-"+(Math.pow(discriminant,1/2))+"i/2("+aValue+")";
        answerUsingPlus=""+(-1*bValue)+"+"+(Math.pow(discriminant,1/2))+"i/2("+aValue+")";
        var xOutputElement=document.getElementById('Quadratic-x-value');
        xOutputElement.textContent="x={"+answerUsingMinus+","+answerUsingPlus+"}";
    }
    else{
        answerUsingPlus=((-1*bValue)+(Math.pow(discriminant,1/2)))/(2*aValue);
        answerUsingMinus=((-1*bValue)-(Math.pow(discriminant,1/2)))/(2*aValue);
        var xOutputElement=document.getElementById('Quadratic-x-value');
        xOutputElement.textContent="x={"+answerUsingMinus+","+answerUsingPlus+"}";
    }
    
}

function solvePythagorean(){
    var aValue=parseInt(document.getElementById('Pythagorean-A-Num').value);
    var bValue=parseInt(document.getElementById('Pythagorean-B-Num').value);
    var sum=Math.pow(aValue,2)+Math.pow(bValue,2);
    var cValue=Math.pow(sum,1/2);
    var cElement=document.getElementById('Pythagorean-C-value');
    cElement.textContent="c="+cValue;
}

function convertRadiiToDegrees(){
    var radiiValue=parseInt(document.getElementById('RadiiInput').value);
    var degrees=(180/Math.PI)*radiiValue;
    var degreesElement=document.getElementById('convertedDegrees');
    degreesElement.textContent="Degrees: "+degrees;
}

function convertDegreesToRadii(){
    var degreesValue=document.getElementById('DegreesInput');
    degreesValue=parseInt(degreesValue.value);
    var radii=(Math.PI/180)*degreesValue;
    var radiiElement=document.getElementById('convertedRadii');
    radiiElement.textContent="Radii: "+radii;
}

var min=0;
var max=1;
var minElement=document.getElementById('minInput');
var maxElement=document.getElementById('maxInput');
var randomNumber;

minElement.addEventListener('change', () => {
    min=minElement.value;
    if(maxElement.value!=''){
        max=maxElement.value;
        if(min<max){
            randomNumber=Math.floor(Math.random()*(max-min))+parseInt(min);
            updateNumberDisplay();
        }
        else{
            alert("please keep min less than max");         
        }
    }
    else{
        alert("You need a max value (recommended: 101)");
        //randomNumber=Math.floor(Math.random())+min;
        //updateNumberDisplay();
    }
    
});

maxElement.addEventListener('change', () => {
    max=maxElement.value;
    if(minElement.value!=''){
        min=minElement.value;
        if(min<max){
            if(max>min){
                alert("min: "+min+" max: "+max);
            }
            randomNumber=Math.floor(Math.random()*(max-min))+parseInt(min);
            updateNumberDisplay();
        }
        else{
            alert("please keep min less than max");
        }
        
    }
    else{
        randomNumber=Math.floor(Math.random()*max);
        updateNumberDisplay();
    }
});

function updateNumberDisplay(){
    document.getElementById('yourNumberDisplay').textContent=randomNumber;
}
