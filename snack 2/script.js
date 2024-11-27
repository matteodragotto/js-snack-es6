function randomNumber() {
  return Math.ceil(Math.random() * 10)
}

const teams = [
  {nome: 'squadra1', 'punti-fatti': 0, 'falli-subiti': 0},
  {nome: 'squadra2', 'punti-fatti': 0, 'falli-subiti': 0},
  {nome: 'squadra3', 'punti-fatti': 0, 'falli-subiti': 0},
  {nome: 'squadra4', 'punti-fatti': 0, 'falli-subiti': 0},
  {nome: 'squadra5', 'punti-fatti': 0, 'falli-subiti': 0},
  {nome: 'squadra6', 'punti-fatti': 0, 'falli-subiti': 0},
  {nome: 'squadra7', 'punti-fatti': 0, 'falli-subiti': 0},
  {nome: 'squadra8', 'punti-fatti': 0, 'falli-subiti': 0}
]

for (i = 0; i < teams.length; i++) {
  teams[i]['punti-fatti'] = randomNumber()
  teams[i]['falli-subiti'] = randomNumber()
}

console.log(teams);

const newTeams = []
for (let team of teams) {
  newTeams.push({nome: team.nome, 'falli-subiti': team['falli-subiti']})
}

console.log(newTeams);




