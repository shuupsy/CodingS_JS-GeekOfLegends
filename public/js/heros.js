class Hero{
    constructor(nom, hp, attaque) {
        this.nom = nom;
        this.hp = hp;
        this.attaque = attaque;
    }
    defendre() {
        this.attaque *= 0.5;
        this.hp *= 2.5;
        // +augmente les chances d'être attaqué par le boss
    };
    attaquer() {
        this.attaque *= 1.4;
        this.hp *= 0.75;
    }
}

class Guerrier extends Hero{
    constructor(nom, hp, attaque, rage) {
        super(nom, hp, attaque);
        this.rage = 0;
    }
}
class Mage extends Hero{
    constructor(nom, hp, attaque, mana) {
        super(nom, hp, attaque);
        this.mana = mana;
    }
}

class Archer extends Hero{
    constructor(nom, hp, attaque, fleches) {
        super(nom, hp, attaque);
        this.fleches = fleches;
    }
    nbrefleches() {

    }
}

// Déclarations héros du jour
// let garen = new Guerrier ("Garen", 400, 50,0)
// let lux = new Mage ("Lux", 200, 150)
// let ashe = new Archer ("Ashe", 300, 100)

import {bossATuer} from './boss.js'
console.log(`Mais de l'autre notre côté, nous avons 3 champions tous excités de battre la TERREUR de Molengeek (${bossATuer.nom})`)