// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 21;
var meuParente = 21;

if(minhaIdade > meuParente) {
    console.log('minha idade é maior que do meu parente')
} else if(minhaIdade === meuParente){
    console.log('minha idade é igual ao do meu parente')
} else {
    console.log('minha idade é menor que do meu parente')
}


// Qual valor é retornado na seguinte expressão?
// ele sempre o ultimo valor verdadeiro que achar ou primeiro valor falso
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(!!expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28;// true
var possuiDoutorado = false;// false
var empregoFuturo;// flase
var dinheiroNaConta = 0;// flase
console.log(!!empregoFuturo)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if( brasil > china) {
    console.log('Brasil tem mais habitantes')
} else {
    console.log('China tem mais habitantes')
}

// O que irá aparecer no console?
        //false            // true  resultado false
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro'); // false
} else {
  console.log('Falso afirmação');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}