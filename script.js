const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
window.addEventListener("load", () => {
  scroll.update();
});
let elemContainer=document.querySelector(".elem-container")
let image=document.querySelector(".fixed-image")
elemContainer.addEventListener("mouseenter",function(){
    image.style.display="block"
})
elemContainer.addEventListener("mouseleave",function(){
    image.style.display="none"
})

let elem=document.querySelectorAll(".elem")
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        image.style.backgroundImage=`url(${e.getAttribute("data-image")})`
    })
})

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
      
    });
}
swiperAnimation();