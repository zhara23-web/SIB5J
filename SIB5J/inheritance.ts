class hero {
    //atribut
    hp: number = 1000;
    level: number = 1;
    speed: number = 10;
    attack: number = 30;
    psysicalDefense: number = 10;
    magicalDefense: number = 10;
    distance: number = 5;

    constructor(
        hp: number, 
        level: number, 
        speed: number, 
        attack: number, 
        psysicalDefense: number, 
        magicalDefense: number, 
        distance: number)
         
        {
        this.hp = hp;
        this.level = level;
        this.speed = speed;
        this.attack = attack;
        this.psysicalDefense = psysicalDefense;
        this.magicalDefense = magicalDefense;
        this.distance = distance;
    }

    //metode
    fristskill() : string {
        return "This is first skill";
    }
    secondskill() {}
    thirdskill() { }
    ultimateskill() {}
}

class maksman extends hero{
     constructor(hp: number) {
        // super objek dri induknya dari hero
        super(hp, 1, 10, 30, 10, 10, 5);
     }
        fristskill() : string {
        return "This is first skill from maksman hero";
    }
}

class jungler extends hero{}

class mage extends hero{
    magicdamage: number = 10;
}

class fighter extends hero{
    physicaldamage: number = 10;
    speelVamp: number = 10;

    constructor(hp: number) {
        super(hp, 1, 10, 30, 10, 10, 5);
    }
    fristskill() : string {
        return "This is first skill in general figther hero";
    }
}

class tank extends hero{}

class support extends hero{
    healingpower: number = 10;
}

class Miya extends maksman{
    constructor(hp: number) {
        super(hp);
    }
    fristskill() : string {
        return "This is first skill in general miya hero";
    }
}

class Layla extends maksman{
    constructor(hp: number) {
        super(hp);
    }
    fristskill() : string {
        return "This is first skill in general layla hero";
    }
}

class YoZhong extends fighter{
    constructor(hp: number) {
        super(hp);
    }   
    thirdskill() : string {
        return "This is third skill in general YoZhong hero";
    }   
}

const miya = new Miya(2250);
const layla = new Layla(2350);
const yozong = new YoZhong(2450);
console.log(miya.fristskill());
console.log(layla.fristskill());
console.log(yozong.thirdskill());



