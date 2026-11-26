export const bookRecord = {
  title: "Clean Code",
  author: "Robert C. Martin",
  year: 2008,

  getBookLabel() {
    return `${this.title} (${this.year}) by ${this.author}`;
  }
};


function createBook(title, author, year) {
  return {
    title,
    author,
    year,
    getBookLabel() {
      return `${this.title} (${this.year}) by ${this.author}`;
    }
  };
}


export const bookCatalog = [
  createBook("The Pragmatic Programmer", "Andrew Hunt & David Thomas", 1999),
  createBook("Eloquent JavaScript", "Marijn Haverbeke", 2018),
  createBook("You Don't Know JS Yet: Get Started", "Kyle Simpson", 2020)
];

export function formatBookStatus(book, status) {
  return `Book: "${book.title}" | Author: ${book.author} | Status: ${status}`;
}