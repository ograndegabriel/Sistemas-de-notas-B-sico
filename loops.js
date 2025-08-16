const nomeUser = "rafael"
let contador = 0
 let nomeExiste = false
const listaNomes = new Array(
   "gabriel",
  "Zoe",
  "Rosie",
  "Charlotte",
  "Violet",
  "Hannah",
  "Ellie",
  "Emília",
 
)


while(contador < 8){
  if(nomeUser == listaNomes[contador]){
    console.log("seu nome está aqui "+nomeUser)
    nomeExiste = true
    break;
  }

contador += 1
}

console.log("seu nome é ",nomeExiste)