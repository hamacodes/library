
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info = function() {
    return `${this.title} by ${this.author}, has ${this.pages} pages, read = ${this.read}`
  }
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.id = myLibrary.indexOf(book);
  bookCard.innerHTML = 
  `
  <h2>${book.title}</h2>
  <p>By: ${book.author}</p>
  <p>Pages: ${book.pages}</p>
  <p>Read: ${book.read}</p>
  <div>
  <button id="removeBook">Remove</button>
  <button id="toggleRead">Read</button>
  </div>
  `;
  return bookCard;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return myLibrary;
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  return myLibrary;
}

function toggleReadStatus(index) {
  if (myLibrary[index].read === "yes") {
    myLibrary[index].read = "no";
  } else {
    myLibrary[index].read = "yes";
  }
  return myLibrary;
}

// Remove Book and Toggle Read Status Event Listeners
document.addEventListener("click", (event) => {
  if (event.target.id === "removeBook") {
    const bookCard = event.target.closest(".book-card");
    const index = parseInt(bookCard.id);
    removeBookFromLibrary(index);
    bookCard.remove();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id === "toggleRead") {
    const bookCard = event.target.closest(".book-card");
    const index = parseInt(bookCard.id);
    toggleReadStatus(index);
    const book = myLibrary[index];
    bookCard.querySelector("p:nth-child(4)").textContent = `Read: ${book.read}`;
  }
});

let addBookButton = document.querySelector("#addBook"); 
addBookButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent default form submission behavior
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  addBookToLibrary(title, author, pages, read);
  let bookCard = createBookCard(myLibrary[myLibrary.length - 1]);
  document.querySelector("#library").appendChild(bookCard);
});

function displayLibrary() {
  myLibrary.forEach(book => {
    console.log(book.info());
    let bookCard = createBookCard(book);
    document.querySelector("#library").appendChild(bookCard);
  });
}

const hamasJourney = new Book("Hama's Journey", "Hama P.", 123, "no");
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "no");
const savageSon = new Book("Savage Son", "Jack Carr", 400, "yes");
const onlyTheDead = new Book("Only The Dead", "Jack Carr", 350, "yes");
const redSkyMourning = new Book("Red Sky Mourning", "Jack Carr", 450, "yes");

const myLibrary = [hamasJourney,theHobbit,savageSon,onlyTheDead,redSkyMourning];

displayLibrary();