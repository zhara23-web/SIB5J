class npc {
    //properti
    name: string;
    health: number;
    speed: number;
    attack: number;
    defense: number;
    npcType:"walk"| "fly";

constructor (
    name: string,
    health: number,
    speed: number,
    attack: number,
    defense: number,
    npcType:"walk"| "fly",
){
    this.name = name;
    this.health =  health;
    this.speed = speed;
    this.attack = attack;
    this.defense = defense;
    this.npcType = npcType;
}
    //metode walking
    walking(): void {
        this.speed += 2
        console.log(`${this.name}sedang berjalan. Speed sekarang ${this.speed}.`);
        }
    sprint() : void {
        this.speed += 4
        console.log(`${this.name}sedang berlari. Speed sekarang ${this.speed}.`);
        }
    attacking() : void {
        console.log(`${this.name}menyerang. Speed sekarang ${this.attack}.`);
        }
    getAttack(damage: number): void {
        this.attack -= damage
        console.log(`${this.name} menyerang. Attack sekarang ${this.attack}.`);
    }
    getBuff(): void {
        this.health += this.health * 0.1;
        this.attack += this.attack * 0.05;
        console.log(`${this.name} mendapatkan buff. Health sekarang ${this.health}.`);
    }
    getUltimate(): void {
        this.speed = this.speed *2;
        this.attack = this.attack *2;
        this.health -= this.health * 0.5;
        console.log(`${this.name} mendapatkan ultimate. Attack sekarang ${this.attack}, Speed sekarang ${this.speed}. Health sekarang ${this.health}.`);
    }
}

const goblin = new npc ("Linlin", 100, 5, 10, 3, "walk");

goblin.getUltimate()
