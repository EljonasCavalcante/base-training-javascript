//[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js','python'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4 - mostra a posição do primeiro encontrado
linguagens.indexOf('js'); // 2 - mostra quantos 'js' tem tem
linguagens.lastIndexOf('js'); // 5  - mostra qual é a ultima posição do 'js'
