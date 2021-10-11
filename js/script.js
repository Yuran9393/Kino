'use strict';
const shemeSvg = document.querySelector('.sheme-svg');
const totalPriceTag = document.querySelector('.price_total')
let cost = 500;
let totalPrice = 0;
shemeSvg.addEventListener('click', (event) => {
   if (!event.target.classList.contains('booked')){
        event.target.classList.toggle('active');
        let totalSeats = shemeSvg.querySelectorAll(".active").length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
        
   }
})