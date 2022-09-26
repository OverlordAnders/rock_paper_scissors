const arr =["Rock","Paper","Scissors"]
function getComputerChoice (){
 return arr[Math.floor(Math.Random() * arr.length)]
}

console.log(getComputerChoice);