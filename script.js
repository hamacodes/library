
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info = function() {
    return `${this.title} by ${this.author}, has ${pages} pages, read = ${this.read}`
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return myLibrary;
}

let addBookButton = document.querySelector("#addBook"); 
addBookButton.addEventListener("click", () => {
  alert("Add book button clicked");
});


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "no");
const savageSon = new Book("Savage Son", "Jack Carr", 400, "yes");
const onlyTheDead = new Book("Only The Dead", "Jack Carr", 350, "yes");
const redSkyMourning = new Book("Red Sky Mourning", "Jack Carr", 450, "yes");

const myLibrary = [theHobbit,savageSon,onlyTheDead,redSkyMourning];

myLibrary.forEach(book => {
  console.log(book.info());
});