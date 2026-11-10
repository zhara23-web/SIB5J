// object-oriented
// ini adalah class
class Book {
  // ini adalah attributes / properties
  title: string;
  authors: string[];
  pages: number;
  paperSize: string;
  font: string;
  genre: string;
  stock: number;

  constructor(
    title: string,
    authors: string[],
    pages: number,
    paperSize: string,
    font: string,
    genre: string,
    stock: number
  ) {
    this.title = title;
    this.authors = authors;
    this.pages = pages;
    this.paperSize = paperSize;
    this.font = font;
    this.genre = genre;
    this.stock = stock;
  }

  // ini adalah method
  getInfo(): void {
    console.log(
      `Title: ${this.title}, Authors: ${this.authors.join(", ")}, Pages: ${this.pages}, Paper Size: ${this.paperSize}, Font: ${this.font}, Genre: ${this.genre}, Stock: ${this.stock}`
    );
  }
  
  borrow(): string {
    //this object yang memanggil method borrow() akan mengakses property stock dari object tersebut
    if (this.stock === 0){
        return "Stok habis"; //tolak jika stok habis
        } 
    this.stock--; //kurangi stok jika masih ada
    return `You have borrowed "${this.title}". Remaining stock: ${this.stock}`;
    }
    return(): string {
        if (this.stock >= 5) {
        return "Sorry, you cannot return this book as the stock is already full.";
        }
        this.stock++;
        return `You have returned "${this.title}". Current stock: ${this.stock}`;
    }
    }

// new Book adalah object dari class Book
const novelBook = new Book(
  "Laskar Pelangi",
  ["Andrea Hirata", "John Doe", "Jane Smith"],
  350,
  "A4",
  "Times New Roman",
  "Fiction",
    10,
);

// memanggil method getInfo() dari object novelBook
novelBook.getInfo();

