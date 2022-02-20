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
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var leftCount = 1;
var rightCount = 1;
var index = 2;
left.addEventListener('click', function () {
  if (leftCount < 2) {
    var bg = document.querySelector(".bg-".concat(index));
    bg.classList.remove("bg-".concat(index));
    index--;
    bg.classList.add("bg-".concat(index));
    var leftImg = document.querySelector(".slick__item-left");

    if (rightCount == 2) {
      document.querySelector('.hide_left').classList.add("slick__item-left");
      document.querySelector('.hide_left').classList.remove('hide_left');
    }

    var active = document.querySelector(".slick__item-active");
    var rightImg = document.querySelector(".slick__item-right");
    leftImg.classList.add("slick__item-active");
    leftImg.classList.remove("slick__item-left");
    active.classList.remove("slick__item-active");

    if (leftCount == 1) {
      rightImg.classList.add("hide_right");
    }

    active.classList.add("slick__item-right");
    leftCount++;
    rightCount--;
  }
});
right.addEventListener('click', function () {
  if (rightCount < 2) {
    var bg = document.querySelector(".bg-".concat(index));
    bg.classList.remove("bg-".concat(index));
    index++;
    bg.classList.add("bg-".concat(index));

    if (leftCount == 2) {
      document.querySelector('.hide_right').classList.remove('hide_right');
    }

    var active = document.querySelector(".slick__item-active");
    var leftImg = document.querySelector(".slick__item-left");
    var rightImg = document.querySelector(".slick__item-right");
    rightImg.classList.add("slick__item-active");
    rightImg.classList.remove("slick__item-right");
    active.classList.remove("slick__item-active");

    if (rightCount == 1) {
      leftImg.classList.add("hide_left");
      leftImg.classList.remove("slick__item-left");
    }

    active.classList.add("slick__item-left");
    leftCount--;
    rightCount++;
  }
});
/** 
left.addEventListener('click', function(){
    if (leftCount < 2){
        let active = document.querySelector(".slick__item-active")
        let leftImg = document.querySelector(".slick__item-left")
        let rightImg = document.querySelector(".slick__item-right")
        leftImg.classList.add("slide-pink-left")
        active.classList.add("slide-blue-left")
        rightImg.classList.add("slide-red-left")
        leftCount++
        rightCount--
    }
    
})

right.addEventListener('click', function(){
    if(rightCount < 2){
        let active = document.querySelector(".slick__item-active")
        let leftImg = document.querySelector(".slick__item-left")
        let rightImg = document.querySelector(".slick__item-right")
        leftImg.classList.add("slide-pink-right")
        active.classList.add("slide-blue-right")
        rightImg.classList.add("slide-red-right")
        active.classList.remove("slick__item-active")
        leftImg.classList.remove("slick__item-left")
        active.classList.add("slick__item-left")
        rightImg.classList.add("slick__item-active")
        leftCount--
        rightCount++
    }
    
})
*/