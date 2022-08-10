function Carro(marcaAtribuida,precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
 }
 
 
 const honda = new Carro('Honda', 3000);
 const fiat = new Carro('Fiat', 4000);
 
 
 
 console.log(fiat, honda); 
 //Carro { marca: 'Fiat', preco: 4000 }
 // Carro { marca: 'Honda', preco: 3000 }