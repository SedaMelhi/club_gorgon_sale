"use strict";

var plus = document.querySelector(".form__plus");
var minus = document.querySelector(".form__minus");
var count = document.querySelector(".form__count");
plus.addEventListener("click", function () {
  var max = +count.max;
  var value = +count.value;

  if (value < max) {
    count.value = value + 1;
  }
});
minus.addEventListener("click", function () {
  var min = +count.min;
  var value = +count.value;

  if (value > min) {
    count.value = value - 1;
  }
});