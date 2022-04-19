// // 
// let hands=['rock','paper','scisscors']
// function game(){
//     let luck=Math.floor(Math.random()*3)
//     console.log(hands[luck])
// }
// game()

let fruits=['apple','orange','apple','apple','orange','apple','orange']
let appleElement=document.getElementById("apple-el")
let orangeElement=document.getElementById("orange-el")
function sortFruits(){
    for(let i=0;i<fruits.length;i++){
        if(fruits[i]=='apple'){
            appleElement.textContent+=' apple'
        }
        else{
            orangeElement.textContent+=' orange'
        }
    }
}
sortFruits()