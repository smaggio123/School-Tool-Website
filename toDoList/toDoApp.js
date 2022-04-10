
/* nav bar stuff */
const openMenu = document.querySelector('#show-menu');
const hideMenuIcon = document.querySelector('#hide-menu');
const sideMenu = document.querySelector('#nav-menu');
var listElement;

openMenu.addEventListener('click',function(){
    sideMenu.classList.add('active');
});

hideMenuIcon.addEventListener('click', function(){
    sideMenu.classList.remove('active');
});

/*To-Do list stuff*/
var referenceNum=0;
var clickedOn = new Array();
function addElement(){
    var inputText=document.getElementById("textInput").value;
    var node = document.createElement('div');
    node.id="list";
    if(inputText===''){
        alert("Please type something");
    }
    else{
        //generate: text, doneBtn, and removeBtn
        referenceNum++;
        node.innerHTML = '<div id="divHoldingEverything'+referenceNum+'" class="thingOnList"><label id="element'+referenceNum+'" value='+referenceNum+' for="invisibleInput"'+this.value+' class="onTheList"> '+inputText+'</label> <button onclick="checkDone(this.value)" value='+referenceNum+' id="invisibleInput"'+referenceNum+' class="checkBtn"><i class="fas fa-check"></i></button><button onclick="removeElement(this.value)" value='+referenceNum+' id="check' + referenceNum + '" class="removeBtn""><i class="fas fa-times"></i></button><hr/></div>';
        document.getElementById('to-doArea').appendChild(node);
        document.getElementById('textInput').value='';
        clickedOn.push(false);
    }
}

function removeElement(refNum){
    document.getElementById('divHoldingEverything'+refNum).remove();
}


function checkDone(num){
    var tempLabel = document.getElementById("element"+num);
    if(clickedOn[num]===true){
        tempLabel.style.textDecoration="none";
        clickedOn[num]=false;
    }
    else{
        tempLabel.style.textDecoration="line-through";
        clickedOn[num]=true;
    }
}

function clearElements(){
    for(let k=0;k<=referenceNum;k++){
        document.getElementById('divHoldingEverything'+k).remove();
    }
}




