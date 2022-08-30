 const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
 ]

 const tempoAulas = aulas.map(aula => aula.min );

 function nomeAulas(aula) {
    return aula.nome;
 }

 const arrayNomeAulas = aulas.map(nomeAulas)

 console.log(tempoAulas) //[ 15, 10, 20, 25 ]
 console.log(arrayNomeAulas) // [ 'HTML 1', 'HTML 2', 'CSS 1', 'JS 1' ]
