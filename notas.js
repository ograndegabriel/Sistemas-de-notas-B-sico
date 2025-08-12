console.log("Sistemas de notas !")
const prompt = require('prompt-sync')();

aluno1 = parseFloat(prompt("Digite a nota sua do 1 Trismestre: ")) 
aluno2 = parseFloat(prompt("Digite a nota sua do 2 Trismestre: ")) 
aluno3 = parseFloat(prompt("Digite a nota sua do 3 Trismestre: ")) 

mediaNotas = aluno1 + aluno2 + aluno3;
mediaAnual =  mediaNotas /3;

console.log("sua nota foi :", mediaAnual.toFixed(2))
