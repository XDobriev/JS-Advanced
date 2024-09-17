'use strict'
// 7.4. Prototype

const Book = function(title, author) {
  this.author = author;
  this.title = title;
  this.isRead = false;
}

Book.prototype.read = function () {
  this.isRead = true;
}

Book.prototype.cover = 'Paper';

const lordOftheRing = new Book('Lord of the Ring', 'Tolkien');
lordOftheRing.read();

console.log(lordOftheRing);
console.log(lordOftheRing.cover);
console.log(lordOftheRing.hasOwnProperty('cover'));
console.log(lordOftheRing.hasOwnProperty('author'));

console.log(lordOftheRing.__proto__);
console.log(lordOftheRing.__proto__ === Book.prototype);
console.log(Book.prototype.isPrototypeOf(lordOftheRing));
console.log(Book.prototype.isPrototypeOf(Book));