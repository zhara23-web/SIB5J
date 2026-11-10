
class Mario {
    // properti
    HP: number;
    speed: number;
    positionX: number;
    positionY: number;
    invincible: boolean;
    currentForm: "mario" | "super mario" | "fire mario";

    constructor(
        HP: number = 1,
        speed: number = 5,
        positionX: number = 0,
        positionY: number = 0,
        invincible: boolean = false,
        currentForm: "mario" | "super mario" | "fire mario" = "mario"
    ) {
        this.HP = HP;
        this.speed = speed;
        this.positionX = positionX;
        this.positionY = positionY;
        this.invincible = invincible;
        this.currentForm = currentForm;
    }

    // metode Super Mushroom
    getSuperMushroom(): void {
        this.currentForm = "super mario";
        this.HP += 1;
        console.log(`Mario berubah menjadi Super Mario, HP menjadi = ${this.HP}`);
    }

    // metode Fire Flower
    getFireFlower(): void {
        this.currentForm = "fire mario";
        this.HP += 1;
        console.log(`Mario berubah menjadi Fire Mario, HP menjadi = ${this.HP}`);
        console.log("dan Mario dapat menembakkan bola api");
    }

    // metode Super Star
    getSuperStar(): void {
        this.invincible = true;
        console.log("Mario mendapatkan SuperStar dan menjadi kebal terhadap serangan!");
    }

    // metode diserang
    getAttacked(): void {
        this.HP -= 1;
        this.currentForm = "mario";
        console.log(`Mario terkena serangan, HP sekarang = ${this.HP}`);
        console.log("Form Mario kembali menjadi mario");
    }

    // metode bergerak ke kanan
    moveRight(): void {
        this.positionX += this.speed;
        console.log(`Mario bergerak ke kanan, posisi X menjadi ${this.positionX}`);
    }

    // metode bergerak ke kiri
    moveLeft(): void {
        this.positionX -= this.speed;
        console.log(`mario bergerak ke kiri, posisi X menjadi ${this.positionX}`);
    }
}

// inheritance
class MarioInvincible extends Mario {
    getAttacked(): void {
        console.log("Mario sedang kebal, serangan tidak berpengaruh!");
    }
}

// polymorphism
class FireMario extends Mario {
    attacking(): void {
        console.log("Mario dapat menembakkan bola api");
    }
}

// membuat object
const mario = new Mario();
const marioInvincible = new MarioInvincible(1, 5, 0, 0, true);
const fireMario = new FireMario();

// menjalankan metode
mario.getSuperMushroom();
fireMario.getFireFlower();
mario.getSuperStar();
mario.getAttacked();

marioInvincible.moveRight();
marioInvincible.moveLeft();
