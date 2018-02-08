// dummy data
db.getCollection('heroes').drop();

heroes = [{
  name: 'Roger',
  role: 'Fighter',
  speciality: 'Reap',
  hp: 2580,
  mana: 450
}, {
  name: 'Hayabusa',
  role: 'Assassin',
  speciality: 'Charge',
  hp: 2555,
  mana: 479
}, {
  name: 'Gatotkaca',
  role: 'Tank',
  speciality: 'Crowd Control',
  hp: 2709,
  mana: 440
}]

db.getCollection('heroes').insert(heroes);