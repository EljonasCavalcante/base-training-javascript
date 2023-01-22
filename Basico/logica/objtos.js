const pessoa = new Object({
    nome : 'André'
})
console.log(pessoa)

const carro = {
    marca: 'Marca',
    rodas: 4,
    acelerar() {
        return this.marca + 'Acelerou';
    },
    businar() {
        return marca + ' Abusinou'
    }
}

const honda = Object.create(carro);