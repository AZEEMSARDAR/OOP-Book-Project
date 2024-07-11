class Book {
    title: string;
    author: string

    static numOfBooks = 0;
    constructor(title: string, author: string){
        this.title = title;
        this.author = author
        Book.numOfBooks += 1;
        console.log(Book.numOfBooks);
        
    }

    displayDetails(){
        console.log(`Title of the book: ${this.title}, name of the Author: ${this.author}`);   
    }
}

let book1 = new Book("Harry Potter", "J.K Rowling")
console.log(book1);
book1.displayDetails()

let book2 = new Book("War and Peace", "Leo Tolstoy")
console.log(book2);
book2.displayDetails()



class Ebook extends Book{
    fileSize: string

    constructor(title: string, author: string, fileSize: string){
        super(title, author)
        this.fileSize = fileSize
    }

    displayDetails(): void {
        console.log(`Title of the book: ${this.title}, name of the Author: ${this.author}, and size of file: ${this.fileSize}MB`);
        
    }
}

let ebook1 = new Ebook("Pride and Prejudice", " Jane Austen", "5")
// console.log(ebook1);
ebook1.displayDetails()