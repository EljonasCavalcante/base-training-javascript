//=========================
//[].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
//=============================

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang'); // [] quando ele passa zero ele não remove nenhum item da array
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda'] --> observe que kia e mustang foi add na array

carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW'] items removidos
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda'] removeu e adiconou ferrari
