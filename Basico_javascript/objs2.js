var quadrado = {
    lado: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro: function (lado) {
        return this.lado * lado; //return quadrado.lado * lado; mesmo efeito
    } 
}

console.table(quadrado.lado)//4
console.log(quadrado.area(5))//25
console.log(quadrado.perimetro(5))//20