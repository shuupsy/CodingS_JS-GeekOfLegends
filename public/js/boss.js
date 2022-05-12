// Constructor Boss
class Boss {
    constructor(nom, hp, atk) {
        this.nom = nom;
        this.hp = hp;
        this.atk = atk;
    }
}

// Déclaration des boss du jour
let nico = new Boss("Nico", 1500, 10)
let kevin = new Boss("Kevin", 2000, 20)
let kadri = new Boss("Kadri", 3000, 50)
// Liste de tous les boss
let boss = [nico, kevin, kadri]

// Boss choisi aléatoirement
let bossATuer = boss[Math.floor(Math.random()* boss.length)];
let lowLife = 0.2 * bossATuer.hp;

// Message sur la mission
alert(`Le boss à tuer aujourd'hui est ${bossATuer.nom}. Ses caractéristiques sont : ${bossATuer.hp}HP et ${bossATuer.atk}ATK. Bonne chance!`)

export {
    Boss,
    nico,
    kevin,
    kadri,
    boss,
    bossATuer,
    lowLife,
}