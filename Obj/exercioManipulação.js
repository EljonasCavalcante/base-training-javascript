// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0; 
let recebimentoTotal = 0; 
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '')// pega o item tranforma em Number com +item.valor e Com replace e tira o R$ e '' vazio   
  if(item.descricao.slice(0,4) === 'Taxa'){
      taxaTotal = taxaTotal + numeroLimpo; // pode ser assim taxaTotal += numeroLimpo
  }else if(item.descricao.slice(0,4) === 'Rece'){
      recebimentoTotal += numeroLimpo

  }
})
console.log('Taxa total:',taxaTotal) //Taxa total: 297 
console.log('Recebimento total:',recebimentoTotal) //Recebimento total: 148 



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransporte = transportes.split(';')
console.log(arrayTransporte) // ['Carro','Avião','Trem','Ônibus','Bicicleta']

// Substitua todos os span's por a's
let html = `<ul>
              <li><span>Sobre</span></li>
              <li><span>Produtos</span></li>
              <li><span>Contato</span></li>
          </ul>`;

html = html.split('span').join('a');
console.log(html)

/*`<ul>
                <li><a>Sobre</a></li>
                <li><a>Produtos</a></li>
                <li><a>Contato</a></li>
            </ul>`; */

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log('Retorno ultimo caractere:',frase.slice(-1)) // oque retorna !


// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach((item) => {
item = item.toLowerCase()
item = item.trim() // Remove o espaço em branco à esquerda e à direita e os caracteres de terminação de linha de uma string.
item = item.slice(0,4)
if(item === 'taxa')
  taxasTotal++

console.log(item)// vejo que acontece conforme eu faço
})

console.log(taxasTotal) // 3
