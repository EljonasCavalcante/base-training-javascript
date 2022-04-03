
var possuiGraduaco = true; // 0 false e 1 true

if(possuiGraduaco) {
    console.log('É verdadeiro')

} else {
    console.log('É falso')
}

var nome = 5;
if(nome) {
    console.log(nome)
} else {
    console.log('Não existe este nome')
}



/*
 //! Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou `` 
*/

/*
//! Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})
*/
/*
//! Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
*/

/*//!
10 == '10'; //? true
10 == 10; //? true
10 === '10'; //? false
10 === 10 //? true
10 != 15 //? true
10 != '10' //? false
10 !== '10' //? true
*/


/*//!
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
*/