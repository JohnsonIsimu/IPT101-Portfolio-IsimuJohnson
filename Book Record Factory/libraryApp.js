import { bookRecord, bookCatalog, formatBookStatus } from './bookModules.js';

console.log(" Primary Book Record ");
console.log("Title:", bookRecord.title);
console.log("Author:", bookRecord.author);
console.log("Year:", bookRecord.year);
console.log(bookRecord.getBookLabel());
console.log(formatBookStatus(bookRecord, "Available"));

console.log("\n 07 Challenge: Added Books ");
bookCatalog.forEach((book, index) => {
  console.log(`\nBook #${index + 1}`);
  console.log("Title:", book.title);
  console.log("Author:", book.author);
  console.log("Year:", book.year);
  console.log("Label:", book.getBookLabel());
  console.log("Status:", formatBookStatus(book, "Checked Out"));
});