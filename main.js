// // grab the count-el element, store it in a countEl variable
// let count = 0
// let countEl = document.getElementById('count-el')

// console.log(countEl);

// function increment() {
//     count = count + 1
//     // set countEl's innerText to the count
// }

/*mal = My Anime List*/
const malAPI='https://www.demonslayer-api.com/api/v1/characters?name=Muichiro';
let kimetsuApiReturn=JSON;
// const animePictureTest = document.getElementById('animePicture');

fetch(malAPI)
    .then(response =>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data=>{
        kimetsuApiReturn = data;
        console.log(data);
        // animePictureTest.innerHTML+=src=""
    })
    .catch(error =>{
        console.error('Error: ', error);
    })
    





const countEl=-0;
let count = 0;
function increment(){

}




function save(){
  

}




// let myName = "Marbles"
// let greeting = "Hi, my name is "
// let myGreeting = greeting+myName+"!" 



// console.log(myGreeting)
