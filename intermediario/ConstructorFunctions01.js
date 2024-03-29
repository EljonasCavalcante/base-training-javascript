// Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

// new é responsável por criar um novo objeto
const honda = new Carro('Hnda', 3000); 
const fiat = new Carro('Fiat', 4000);


// Outro exemplo

function CarroTwo(marca, precoIncial){
    this.taxa = 1.2;
    const precoFinal = precoIncial * this.taxa
    this.marca = marca;
    this.preco = precoFinal;
}

const mazda = new CarroTwo('Mazda', 5000)