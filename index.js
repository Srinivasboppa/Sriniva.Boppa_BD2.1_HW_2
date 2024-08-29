const express = require('express');
const { title } = require('process');
const app = express();
const PORT = 3000;
//Define the  an Object on the server: book
let githubPublicData = {
 username: "ankit123",
  fullname: "Ankit Kumar",
  publicationYear: 1997,
  genre: "Novel",
  isAvailable: true,
  stock: 5// Adding stock property
}
//Endpoint 1: Return the book object
app.get("/book", (req, res) => {
  res.json(book);
});
// function to get the full tilte and authorof the book
function getFullTitleAuthor(book){
  return book.title + " by " + book.author;
}
//Endpoint 2: Access the full title and author of the book
app.get("/book/fulltitle-author", (req, res) => {
  let fullTitleAuthor = getFullTitleAuthor(book);
  res.json({fullTitleAuthor: fullTitleAuthor});
});

// function to get the full genre and availability of the book
function getGenreAndAvailability(book){
  return {
    genre: book.genre,
    isAvailable: book.isAvailable
  };
}
//Endpoint 3: Access the genre and availability of the book
app.get("/book/genre-availability", (req, res) => {
  let GenreAndAvailability = getGenreAndAvailability(book);
  res.json(GenreAndAvailability);
});

// function to calculate how old the book is 
function CalculateBookAge(book){
  let currentYear = 2024;
  return currentYear - book.publicationYear;
}
//Endpoint 4: Calculate and the return the age of the book
app.get("/book/age", (req, res) => {
  let bookAge = CalculateBookAge(book);
  res.json({age: bookAge});
});

// function to get summary of the book 
function getBookSummary(book){
  return "Title: " + book.title + ", Author: " + book.author + ", Genre:" + book.genre + ", Published:" + book.publicationYear;
}
//Endpoint 5: Return the summary of the book
app.get("/book/summary", (req, res) => {
  let summary = getBookSummary(book);
  res.json({summary: summary});
});

// function to check stock and determine if an order is needed
function checkStockAndOrder(book){
  if(book.stock >0){
  return{ status: "In Stock", stock: book.stock };
  }else{
  return{ status: "Out of Stock", message: "Order Required " };
  }
  }

//Endpoint 6: check stock and order Status
app.get("/book/stock-status", (req, res) => {
  let stockStatus = checkStockAndOrder(book);
  res.json(stockStatus);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
