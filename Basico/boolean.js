var passuigraduação = true;

if(true) {
    console.log('É verdadairo');
} else {
    console.log('É falso')
}

// Truthy ===============================
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})

// Falsy ================================
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``



// Truthy ===================
if(!true) // false  1 "!" É MESMO QUE DIZER (!TRUE = NÃOTRUE)
if(!1) // false AQUI ELE SAIRIA VERDADEIRO MAS COMO EU COLOQUEI "!" E RETORNA NÃOTRUE
if(!'') // true AQUI ELE SAIRIA FALSO MAS COMO EU COLOQUEI "!" E RETORNA NÃOFALSE
if(!undefined) // true
if(!!' ') // true UTILIZADO PARA VERIFCAR QUAL A RESPOSTA DO RETORNO
if(!!'') // false UTILIZADO PARA VERIFCAR QUAL A RESPOSTA DO RETORNO

//============================
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false



