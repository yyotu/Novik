const burgerBtn = document.querySelector('.burger-btn');
const navigation = document.querySelector('.navigation');


burgerBtn.onclick = (function (){
    burgerBtn.classList.toggle('active');
    navigation.classList.toggle('active');
})

console.log(burgerBtn)
console.log(navigation)