const possibleTypes = {
  Bowman: [25, 25, 'Bowman'],
  Swordsman: [40, 10, 'Swordman'],
  Magician: [10, 40, 'Magician'],
  Daemon: [10, 40, 'Deamon'],
  Undead: [25, 25, 'Undead'],
  Zombie: [40, 10, 'Zombie'],
}
const possibleCharacters = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie'
]

class Person {
  constructor(type) {
    if (!possibleTypes.hasOwnProperty(type)) { throw new Error('Unavailable character type!')}
    this.type = type
    this.health = 100
    this.level = 1
    this.name = possibleTypes[type][2]
    this.defence = possibleTypes[type][1]
    this.attack = possibleTypes[type][0]
  }
}

class Team {
  [Symbol.iterator]() {
    let i = 0
    return {
      next() {
        if (i < possibleCharacters.length) {
          return {
            value: new Person(possibleCharacters[i++]),
            done: false
          }
        }
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}
