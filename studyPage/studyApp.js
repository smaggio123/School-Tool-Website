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

var flipped=new Array();
function generateFlashCards(){
    if(terms.length>0&&terms.length===definitions.length){
        showArrows();
        window.scrollTo(0,600);
        if(document.getElementById('indexCard'+0)!=null)cleanFlashCards();
        for(var i=0;i<terms.length;i++){
            flipped[i]=false;
            var node = document.createElement('div');
            node.innerHTML = '<button onclick="flipCard(this.value)" value='+i+' id="indexCard'+i+'" class="indexCard">'+terms[i]+'</button>';
            document.getElementById('insertThingHere').appendChild(node);
        }
        priorLength=terms.length;
    }
    else{
        alert("Make sure you insert files for terms and definitions");
    }

}

function flipCard(cardIndex){
    if(flipped[cardIndex]){
        flipped[cardIndex]=false;
        var cardElement = document.getElementById("indexCard"+cardIndex);
        cardElement.innerText=""+terms[cardIndex];
        //alert("Now show term");
    }
    else{
        flipped[cardIndex]=true;
        var cardElement = document.getElementById("indexCard"+cardIndex);
        cardElement.innerText=""+definitions[cardIndex];
        //alert("Now show definition");
    }
}

function cleanFlashCards(){
    for(var i=0;i<priorLength;i++){
        var el=document.getElementById("indexCard"+i);
        el.parentNode.removeChild(el);
    }
    alert("cleaned");
}

function showArrows(){
    document.getElementById('rightArrow').style="visibility: visible";
    document.getElementById('leftArrow').style="visibility: visible";
}


var currentScrollHeight=0;
function scrollToNext(){
    if(currentScrollHeight+=200<200*termsCount){
        currentScrollHeight+=200;
        document.getElementById('insertThingHere').scroll({
        top:currentScrollHeight
    });
    }
    
}

function scrollToPrevious(){
    if(currentScrollHeight>0){
        currentScrollHeight-=200;
        document.getElementById('insertThingHere').scroll({
            top:currentScrollHeight
        });
    }
    
}