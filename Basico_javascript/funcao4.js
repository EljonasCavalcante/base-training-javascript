//=================================================================
/*Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer */

function corFavorita(cor) {
    if(cor === 'Azul') {
        return ' eu gosto do ceu'
    } else if ( cor === 'Verde'){
        return ' Eu não gosto de mato'        
    } else {
        return ' Eu não gosto de cores'
    }
} 

console.log(corFavorita('Verde'))