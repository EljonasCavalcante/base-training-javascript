  // ========================================

  function imc2(peso, altura) {
    const imc2 = peso / (altura ** 2);
    console.log(imc2);
  }
  
  imc2(20, 1.80); // retorna o imc
  //console.log(imc2(80, 1.80)); // retorna o imc e undefined
  

  //-==========

  function terceiraIdade (idade) {
      console.log(typeof idade)
      if(typeof idade !== 'number'){
          return 'Por favor preecha um numero'
      } 
      else if(idade >= 60) {
          return true;
          
      }else {
          return false;

      }
  }

  console.log(terceiraIdade("10"))