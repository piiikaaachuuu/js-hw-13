// Написати програму, яка буде обчислювати площу прямокутника та квадрата,
// використовуючи прототипи та прототипне наслідування.

function figure() {}



function rectangle(width, height) {
  this.width = width;
  this.height = height;
}
rectangle.prototype = new figure();
rectangle.prototype.area = function () {
  return this.width * this.height;
};
let rect = new rectangle(5, 3);
console.log(rect.area());



function square(side) {
  this.width = side;
  this.height = side;
}
square.prototype = new figure();
square.prototype.area = function () {
  return this.width * this.height;
};
let squar = new square(4);
console.log(squar.area());
