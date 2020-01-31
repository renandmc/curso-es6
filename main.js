class List {

  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {

  constructor() {
    super();
    this.usuario = 'Renan';
  }

  mostraUsuario() {
    console.log(this.usuario);
  }

}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Matematica {

  static soma(a, b) {
    return a + b;
  }

}

console.log(Matematica.soma(1, 2));

// constante - não pode ter valor reatribuido, mas pode ser mutado

const a = 1;
//a = 3; // erro a read-only
console.log(a);

const usuario = {
  nome: 'Diego'
};
usuario.nome = 'Renan';
console.log(usuario);

function teste(x) {
  let y = 2;
  if (x > 5) {
    let y = 4;
    console.log(x, y);
  }
}
// console.log(y); // erro, fora escopo
teste(10);

// arrays
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index){
  return item + index;
});
console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
});
console.log(sum);

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log(filter);

const find = arr.find(function(item) {
  return item === 4;
});
console.log(find);

// arrow functions
const arr2 = [1, 3, 4, 5, 6];
const newArr2 = arr2.map(item => item * 2);
console.log(arr2);
console.log(newArr2);

const teste2 = () => ({ nome: 'Renan'});
console.log(teste2());

// valores padrão
function soma(a = 3, b = 6) {
  return a + b;
}
console.log(soma(1));
console.log(soma());

const soma2 = (a = 3, b = 6) => a + b;
console.log(soma2(1));
console.log(soma2());

// desestruturação
const usuario2 = {
  nome: 'Renan',
  idade: 26,
  endereco: {
    cidade: 'Ourinhos',
    estado: 'SP'
  }
}
console.log(usuario2);

const { nome, idade, endereco: { cidade } } = usuario2;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}
mostraNome(usuario2);

// rest - resto
const usuario3 = {
  nome2: 'Renan',
  idade: 26,
  empresa: 'L4E'
};
const { nome2, ...resto } = usuario3;
console.log(nome2);
console.log(resto);

const arr3 = [1, 2, 3, 4];
const [x, y, ...z] = arr3;
console.log(x, y, z);

function soma3(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma3(1, 3, 4));

// spread
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
const arrC = [ ...arrA, ...arrB ];
console.log(arrC);

const usuarioA = {
  nome: 'Renan',
  idade: 26,
  empresa: 'L4E'
};
const usuarioB = { ...usuarioA, nome: 'João' };
console.log(usuarioA);
console.log(usuarioB);