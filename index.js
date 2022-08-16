// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
//const names = ["Guadalupe", "Ollie", "Aki"];


function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {

  console.log(`Wrapped ${gifts [i]} and added a bow!`);
 
}
return gifts;

}
function writeCards(names){
//names.length=0
//names.push("Guadalupe", "Ollie", "Aki")
const messages = []
  for(let i = 0; i <=names.length-1 ; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages
}

function countDown(int) {
    for (let i = int;i >=0; i--){
    console.log(i);
    }
    
}






