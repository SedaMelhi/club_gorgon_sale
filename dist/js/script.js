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
/**
const left = document.querySelectorAll(".left")
const right = document.querySelectorAll(".right")
let leftCount = 1
let rightCount = 1
let index = 2

for(let i of left){
    i.addEventListener('click', function(){
        if(leftCount < 2){
            let bg = document.querySelector(`.bg-${index}`)
            bg.classList.remove(`bg-${index}`)
            index--
            bg.classList.add(`bg-${index}`)
            let leftImg = document.querySelector(".slick__item-left")
            if(rightCount == 2){
                document.querySelector('.hide_left').classList.add("slick__item-left")
                document.querySelector('.hide_left').classList.remove('hide_left')
                
            }
            let active = document.querySelector(".slick__item-active")
           
            let rightImg = document.querySelector(".slick__item-right")
            leftImg.classList.add("slick__item-active")
            leftImg.classList.remove("slick__item-left")
            active.classList.remove("slick__item-active")
            if(leftCount == 1){
             rightImg.classList.add("hide_right")
            }
            active.classList.add("slick__item-right")
            
            leftCount++
            rightCount--
        }
    })
}
for(let i of right){
    i.addEventListener('click', function(){
        if(rightCount < 2){
            let bg = document.querySelector(`.bg-${index}`)
            bg.classList.remove(`bg-${index}`)
            index++
            bg.classList.add(`bg-${index}`)
            if(leftCount == 2){
                document.querySelector('.hide_right').classList.remove('hide_right')
            }
            let active = document.querySelector(".slick__item-active")
            let leftImg = document.querySelector(".slick__item-left")
            let rightImg = document.querySelector(".slick__item-right")
            rightImg.classList.add("slick__item-active")
            rightImg.classList.remove("slick__item-right")
            
            active.classList.remove("slick__item-active")
            if(rightCount == 1){
                leftImg.classList.add("hide_left")
                leftImg.classList.remove("slick__item-left")
            }
            active.classList.add("slick__item-left")
            leftCount--
            rightCount++
        }
    })
}
*/

var pc = ".header__images_pc";
var left = document.querySelector("".concat(pc, " .left"));
var right = document.querySelector("".concat(pc, " .right"));
var leftCount = 1;
var rightCount = 1;
var index = 2;
left.addEventListener('click', function () {
  if (leftCount < 2) {
    var bg = document.querySelector(".bg-".concat(index));
    bg.classList.remove("bg-".concat(index));
    index--;
    bg.classList.add("bg-".concat(index));
    var leftImg = document.querySelector("".concat(pc, " .slick__item-left"));

    if (rightCount == 2) {
      document.querySelector("".concat(pc, " .hide_left")).classList.add("slick__item-left");
      document.querySelector("".concat(pc, " .hide_left")).classList.remove('hide_left');
    }

    var active = document.querySelector("".concat(pc, " .slick__item-active"));
    var rightImg = document.querySelector("".concat(pc, " .slick__item-right"));
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
      document.querySelector("".concat(pc, " .hide_right")).classList.remove('hide_right');
    }

    var active = document.querySelector("".concat(pc, " .slick__item-active"));
    var leftImg = document.querySelector("".concat(pc, " .slick__item-left"));
    var rightImg = document.querySelector("".concat(pc, " .slick__item-right"));
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
var mob = ".header__images_mobile";
var leftM = document.querySelector("".concat(mob, " .left"));
var rightM = document.querySelector("".concat(mob, " .right"));
leftM.addEventListener('click', function () {
  if (leftCount < 2) {
    var bg = document.querySelector(".bg-".concat(index));
    bg.classList.remove("bg-".concat(index));
    index--;
    bg.classList.add("bg-".concat(index));
    var leftImg = document.querySelector("".concat(mob, " .slick__item-left"));

    if (rightCount == 2) {
      document.querySelector("".concat(mob, " .hide_left")).classList.add("slick__item-left");
      document.querySelector("".concat(mob, " .hide_left")).classList.remove('hide_left');
    }

    var active = document.querySelector("".concat(mob, " .slick__item-active"));
    var rightImg = document.querySelector("".concat(mob, " .slick__item-right"));
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
rightM.addEventListener('click', function () {
  if (rightCount < 2) {
    var bg = document.querySelector(".bg-".concat(index));
    bg.classList.remove("bg-".concat(index));
    index++;
    bg.classList.add("bg-".concat(index));

    if (leftCount == 2) {
      document.querySelector("".concat(mob, " .hide_right")).classList.remove('hide_right');
    }

    var active = document.querySelector("".concat(mob, " .slick__item-active"));
    var leftImg = document.querySelector("".concat(mob, " .slick__item-left"));
    var rightImg = document.querySelector("".concat(mob, " .slick__item-right"));
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