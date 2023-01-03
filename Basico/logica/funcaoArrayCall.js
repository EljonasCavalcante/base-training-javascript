Array.prototype.mostreThis = function() {
    console.log(this);
  }
  
  const frutas = ['Uva', 'Maçã', 'Banana'];
  frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']
  
  Array.prototype.pop.call(frutas); // Remove Banana
  frutas.pop(); // Mesma coisa que a função acima
  