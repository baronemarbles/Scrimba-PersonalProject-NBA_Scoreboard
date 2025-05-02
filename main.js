// // grab the count-el element, store it in a countEl variable
// let count = 0
// let countEl = document.getElementById('count-el')

// console.log(countEl);

// function increment() {
//     count = count + 1
//     // set countEl's innerText to the count
// }

// /*mal = My Anime List*/
// const malAPI='https://www.demonslayer-api.com/api/v1/characters?name=Muichiro';
// let kimetsuApiReturn=JSON;
// // const animePictureTest = document.getElementById('animePicture');

// fetch(malAPI)
//     .then(response =>{
//         if(!response.ok){
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data=>{
//         kimetsuApiReturn = data;
//         console.log(data);
//         // animePictureTest.innerHTML+=src=""
//     })
//     .catch(error =>{
//         console.error('Error: ', error);
//     })
    





const countElLeftScore= document.getElementById("leftScore");
const countElRightScore= document.getElementById("rightScore");
const leftPlusOneBtn=document.getElementById("plus-one-btn-left");
const rightPlusOneBtn=document.getElementById("plus-one-btn-right");
const quarterTime=document.getElementById("qrTime");

console.log(countElLeftScore.textContent);
let count = 0;
let countPointsLeft=0;
let countPointsRight=0;

// leftPlusOneBtn.addEventListener("click",addOne(one));


function addOneLeft(){
    countPointsLeft+=1;
    countElLeftScore.textContent=countPointsLeft;
}

function addOneRight(){
    countPointsRight+=1;
    countElRightScore.textContent=countPointsRight;
}


function addTwoLeft(){
    countPointsLeft+=2;
    countElLeftScore.textContent=countPointsLeft;
}

function addTwoRight(){
    countPointsRight+=2;
    countElRightScore.textContent=countPointsRight;
}


function addThreeLeft(){
    countPointsLeft+=3;
    countElLeftScore.textContent=countPointsLeft;
}

function addThreeRight(){
    countPointsRight+=3;
    countElRightScore.textContent=countPointsRight;
}





function timeTicking(quartertime,minutes,seconds){
    quartertime-=0.1;
    console.log(quarterTime.textContent);
    console.log(seconds);
    if(seconds<10){
        quarterTime.textContent=`${minutes}:${seconds/60}`
    } else{

        quarterTime.textContent=`${minutes}:${seconds/60}`
    }
    if(minutes>0){

        formatTime(quartertime);
    }
    // quartertime.textContent=formatTime(quartertime.textContent);
}



function formatTime(timeInfloat){
    const minutes=Math.floor(timeInfloat);
    
    const seconds=Math.floor((((timeInfloat-minutes)*60)*10));
    console.log(timeInfloat);
    console.log(minutes);
    console.log(seconds/60);
    if(seconds<10){
        seconds*10;
    }
    while(quarterTime.textContent!='0'){
        timeTicking(timeInfloat,minutes,seconds);
    }


    // if(seconds<10){
    //     return(`${minutes}:${seconds*10}`);
    // }
    // else {
    //     return(`${minutes}:${seconds}`);
    // }

    
}


//Instancia da função para o contador  //
function execStartTimer(){
    let conteudoInterativoJogo = document.getElementById("gameAndGameControl-container");
    conteudoInterativoJogo.style.display="grid"
    conteudoInterativoJogo.style.gridTemplateColumns="3fr 1fr"
    conteudoInterativoJogo.style.marginInline="1rem";
   
    
    // quarterTime.textContent=formatTime(quarterTime.textContent);
}


// quarterTime.textContent=formatTime(quarterTime.textContent);//

// if(quarterTime.textContent=formatTime(quarterTime.textContent)){
    
//     console.log(formatTime(quarterTime.textContent));
// }

// console.log(typeof(quarterTime.textContent)+' '+quarterTime.textContent)
// quarterTime.textContent=parseFloat(quarterTime.textContent);
// console.log(typeof(quarterTime.textContent)+' '+quarterTime.textContent)

// let quarterCountDown = setInterval(timeTicking(quarterTime),1000)

// do{
//     quarterTime.textContent-=1;
//     formatTime(quarterTime.textContent)
// }

// while (quarterTime.textContent>=0)
// //     {
// //     // quarterTime.textContent-=1;
// //     // formatTime(quarterTime.textContent)

// // }





// let myName = "Marbles"
// let greeting = "Hi, my name is "
// let myGreeting = greeting+myName+"!" 



// console.log(myGreeting)
