//const mainDescription = document.querySelector ('.main__description');
//const mainImg = document.querySelector ('.main__img');
const burger = document.querySelector('.burger');

if (burger){
  const burgerNav = document.querySelector('.burger__nav');
  burger.addEventListener("click", function(e) { 
    document.body.classList.toggle('-lock');
    burger.classList.toggle('_active');
    burgerNav.classList.toggle('_active');
   // mainDescription.classList.toggle('-none');
   // mainImg.classList.toggle('-none')
  });
}