const openMenu = document.querySelector('#show-menu');
const hideMenuIcon = document.querySelector('#hide-menu');
const sideMenu = document.querySelector('#nav-menu');

openMenu.addEventListener('click',function(){
    sideMenu.classList.add('active');
});

hideMenuIcon.addEventListener('click', function(){
    sideMenu.classList.remove('active');
});
/*Study part*/
//terms area
var termsFile = document.getElementById('termsInsertedFile');
var textarea1=document.getElementById('termsDisplayArea');
var terms=new Array();
var priorLength;
var termsCount=0;;

termsFile.addEventListener('change', () => {
    let files=termsFile.files;

    if(files.length ==0)return;

    const file = files[0];
    

    let reader = new FileReader();

    reader.onload = (e)=>{
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        terms=lines;
        for(word in terms){
            termsCount++;
            textarea1.value+=termsCount+'. '+terms[termsCount-1]+'\n\n';
        }
        //textarea1.value = lines.join('\n');
    };

    reader.onerror = (e) =>alert(e.target.error.name);

    reader.readAsText(file);
})
//terms area end

//definitions area
var definitionsFile = document.getElementById('definitionsInsertedFile');
var textarea2=document.getElementById('definitionsDisplayArea');
var definitions=new Array();
var definitionsCount=0;

definitionsFile.addEventListener('change', () => {
    let files=definitionsFile.files;

    if(files.length ==0)return;

    const file = files[0];
    

    let reader = new FileReader();

    reader.onload = (e)=>{
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        definitions=lines;
        for(word in definitions){
            definitionsCount++;
            textarea2.value+=definitionsCount+'. '+definitions[definitionsCount-1]+'\n\n';
        }
        //textarea2.value = lines.join('\n');
    };

    reader.onerror = (e) =>alert(e.target.error.name);

    reader.readAsText(file);
})
//definitions area end

var answerRevealed=new Array();
function generateQuiz(){
    if(terms.length>0&&terms.length===definitions.length){
        window.scrollTo(0,600);
        var quizQuestions=document.getElementById('quizQuestions').value;
        alert(quizQuestions);
        //check if quiz was generated
        if(document.getElementById('question'+0)!=null)cleanQuiz();
        if(quizQuestions === 'terms'){
            for(var i=0;i<terms.length;i++){
                answerRevealed[i]=false;
                var node = document.createElement('div');
                node.innerHTML = '<div class="quizQuestion"><div class="problem">'+i+". "+'</div><p id="question'+i+'">'+terms[i]+'</p><input type="text"/><p class="quizAnswer" id="quizAnswer'+i+'">'+definitions[i]+'</p><button onclick="checkAnswer(this.value)" value='+i+' id="quizAnswer'+i+'" >reveal</button></div>';
                document.getElementById('insertThingHere').appendChild(node);
            }
        }
        else{
            for(var i=0;i<terms.length;i++){
                answerRevealed[i]=false;
                var node = document.createElement('div');
                node.innerHTML = '<div class="quizQuestion"><div class="problem">'+i+". "+'</div><p id="question'+i+'">'+definitions[i]+'</p><input type="text"/><p class="quizAnswer" id="quizAnswer'+i+'">'+terms[i]+'</p><button onclick="checkAnswer(this.value)" value='+i+' id="quizAnswer'+i+'" >reveal</button></div>';
                document.getElementById('insertThingHere').appendChild(node);
            }
        }    
    }
    else{
        alert("Make sure you insert files for terms and definitions");
    }
        
}

function checkAnswer(num){
    if(answerRevealed[num]===false){
        document.getElementById('quizAnswer'+num).style="visibility: visible";
        answerRevealed[num]=true;
    }
    else{
        document.getElementById('quizAnswer'+num).style="visibility: hidden";
        answerRevealed[num]=false;
    }

}


function cleanQuiz(){
    var el=document.getElementsByClassName('quizQuestion');
    el.remove();

    //for(var i=0;i<priorLength;i++){
      //  var el=document.getElementById("question"+i);
        //el.parentNode.removeChild(el);
    //}
    alert("cleaned");
}



