// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaMUndo = [1959, 1962, 1970, 1994, 2002]
console.log(copaMUndo)

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var i = 0; i <= copaMUndo.length; i++) {
    console.log(`O brasil ganhou a copa de ${copaMUndo[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var e = 0; e <= frutas.length; e++){
    console.log(frutas[e])
    if( frutas[e] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length -1] // puxando o último item 5 - 1 = 4

console.log(`funcionou ${ultimaFruta}`)
console.log(`funcionou ${frutas}`)