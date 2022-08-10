// O this faz referência ao próprio construído como a Constructor Function 

function Carro(marcaAtribuida, precoIncialAtribuido) {
    const taxa = 1.2;
    const precoFinal = precoIncialAtribuido * taxa;
    this.marca = marcaAtribuida;
    this.preco = precoFinal;
    console.log(this)
 }
 
 const honda = new Carro('Honda', 2000);
 /* resposta do console.log abaixo */
 // Carro { marca: 'Fiat', preco: 4000 } 
 // Carro { marca: 'Honda', preco: 3000 }