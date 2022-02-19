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




$('.slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  
});
