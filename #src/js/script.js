const plus = document.querySelector(".form__plus")
const minus = document.querySelector(".form__minus")
const count = document.querySelector(".form__count")

plus.addEventListener("click", function(){
    const max = +count.max
    const value = +count.value 
    if ( value < max){
        count.value = value + 1
    }
    
})
minus.addEventListener("click", function(){
    const min = +count.min
    const value = +count.value 
    if (value > min){
        count.value = value - 1
    }
})

const left = document.querySelector(".left")
const right = document.querySelector(".right")
let leftCount = 1
let rightCount = 1
let index = 2



left.addEventListener('click', function(){
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
right.addEventListener('click', function(){
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
