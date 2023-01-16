let pal = "1234567890";
let varias =["um","dois","três","quatro","cinco","seis"];

//escolher numero aleatório
function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
// Escolhe uma letra aleatória na string
function getRandomLetter(palavra){
  let max = palavra.length;
  return Math.floor(Math.random() * max);
}
// escolhe uma string aleatória da array
function getRandomWord(matriz){
  let l = Math.floor(Math.random() * matriz.length);
  return matriz[l];
}
console.log(getRandomLetter(pal));
console.log(getRandomWord(varias));