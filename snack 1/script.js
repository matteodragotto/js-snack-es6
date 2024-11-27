const message = document.querySelector('.message')
const bicycles = [
  {nome: 'bici1', peso: 6},
  {nome: 'bici2', peso: 7},
  {nome: 'bici3', peso: 8 },
  {nome: 'bici4', peso: 8.4},
  {nome: 'bici5', peso: 5},
  {nome: 'bici6', peso: 5.5},
  {nome: 'bici7', peso: 7},
  {nome: 'bici8', peso: 5.7},
  {nome: 'bici9', peso: 7.7},
  {nome: 'bici10', peso: 6.1}
]

let biciLeggera = bicycles[0]

for (i = 0; i < bicycles.length; i++) {
  if (biciLeggera.peso > bicycles[i].peso) {
    biciLeggera = bicycles[i]
  }
}

message.innerHTML = 'La bici più leggera è la: ' + biciLeggera.nome

console.log(biciLeggera);
