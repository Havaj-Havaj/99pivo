function getWord(index){
  if(index > 10 && index < 20)return "бутылок"
  if(index % 10 === 0) return "бутылок"
  if(index % 10 >= 2 && index % 10 <= 4) return "бутылки"
  if(index % 10 === 1) return "бутылка"
  return "бутылок"
}

function getStroka(number){
let stroka = ''

for(number; number >= 0; number--){
  let word = getWord(number)
  let wordS = getWord(number - 1)
  
  if(number === 0){
    stroka += `Бутылки кончились`
  } else {
    stroka += `${number} ${word} пива на стене, ${number} ${word} пива! Возьми одну, пусти по кругу, ${number - 1} ${wordS} пива на стене!\n`
  }
  } return stroka
}
  

console.log(getStroka(39))