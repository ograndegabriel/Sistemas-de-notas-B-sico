const nomeUser = "gabriel"
let contador = 0
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
  }else{
    console.log("Se nome nao está aqui ")
  }

contador += 1

}