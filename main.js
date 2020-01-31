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