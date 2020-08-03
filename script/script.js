
const tareas = ['Practica de Javascript', 'Ir al supermercado', 'Pasear el perro', 'Lavar los trastos'];

const lista = document.getElementById('lista-elementos');

const listaItems = document.createElement('ul');
lista.appendChild(listaItems);

for (let i = 0; i < tareas.length; i++) {
  const listaTareas = document.createElement('li');
  listaItems.appendChild(listaTareas);

  const input = document.createElement('input');
  listaTareas.appendChild(input);

  const label = document.createElement('label');
  listaTareas.appendChild(label);

  label.setAttribute('for','tareas',tareas[i]);

  input.setAttribute('type','checkbox');

  label.innerHTML = tareas[i];

}

 