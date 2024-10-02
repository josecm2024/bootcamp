// criar um novo arquivo chamado media.js
//  - Dentro desse arquivo implementar, utilizando javascript, um 
//  código que dado 3 notas de um aluno calcule a média do mesmo , e então exiba:
//     - se a média for maior ou igual a 6, o aluno foi aprovado
//     - caso contrário, o aluno foi reprovado
// - além disso, editar o arquivos frutas.js, inserindo uma nova fruta do fim do array, e exibindo-o

const nota1 = 10
const nota2 = 9
const nota3 = 8

media = (nota1 + nota2 + nota3) / 3

if (media >= 6) {
    console.log(`A média é ${media}, portanto está aprovado!`)
} else {
    console.log(`A média é ${media}, portanto está reprovado!`)
}