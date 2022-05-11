// Propriétés communs à tous les héros
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

// Guerrier
class Guerrier extends Hero{
    constructor(nom, hp, attaque, rage) {
        super(nom, hp, attaque);
        this.rage = 0;
    }
}

// Mage
class Mage extends Hero{
    constructor(nom, hp, attaque, mana) {
        super(nom, hp, attaque);
        this.mana = mana;
    }
}

// Archer
class Archer extends Hero{
    constructor(nom, hp, attaque, fleches) {
        super(nom, hp, attaque);
        this.fleches = fleches;
    }
    nbrefleches() {

    }
}

// Déclarations héros du jour
let guerrier = new Guerrier
let mage = new Mage
let archer = new Archer

import {bossATuer} from './boss.js'
console.log(`Mais de l'autre notre côté, nous avons 3 champions tous excités de battre la TERREUR de Molengeek (${bossATuer.nom})`)

// L'utilisateur doit donner un nom à chaque héros
guerrier.nom = prompt("Donnez un nom à votre guerrier.")
mage.nom = prompt("Donnez un nom à votre mage.")
archer.nom = prompt("Donnez un nom à votre archer.")
console.log(`Je vous présente notre fabuleuse équipe: le Guerrier ${guerrier.nom}, le mage ${mage.nom}, l'archer ${archer.nom}`)