'use strict'
//Оператор new
const User = function(email, password) {
  this.email = email;
  this.password = password + '###';
}

const user1 = new User('a@a.ru', '123');
console.log(user1);
const user2 = new User('a2@a.ru', '123');
console.log(user2);
console.log(user2 instanceof User);

// создается пустой объект 
// вызывается User функция
// this = пустому объекту
// объект связывается с prototype
// возвращается объект