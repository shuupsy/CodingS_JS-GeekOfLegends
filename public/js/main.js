// Class Personnage

// Constructor Boss
class Boss {
    constructor(nom, hp, attaque) {
        this.nom = nom;
        this.hp = hp;
        this.attaque = attaque;
    }
}

// Déclaration des boss
let sauron = new Boss ("Sauron", 1500, 50)
// let chronos = new Boss ("Chronos", 2300, 100)
// let lilith = new Boss ("Lilith", 3000, 150)
// let kadri = new Boss ("Kadri", 10000, 500)

let lowLife = 0.2 * Boss.hp
if (Boss.hp <= lowLife) {
    let enigme1 = prompt("Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?");
    let enigme2 = prompt("Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?");
    let enigme3 = prompt("Que donne Math.floor(1.3*10")
}


class Hero{
    constructor(nom, hp, attaque) {
        this.nom = nom;
        this.hp = hp;
        this.attaque = attaque;
    }
    defense() {
        this.attaque *= 0.5;
        this.hp *= 2.5;
        // +augmente les chances d'être attaqué par le boss
    };
    attaque() {
        this.attaque *= 1.4;
        this.hp *= 0.75;
    }
}
let guerrier = new Hero ("Guerrier", 400, 50,0)
let mage = new Hero ("Mage", 200, 150)