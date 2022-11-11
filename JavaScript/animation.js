let stars = document.getElementById('stars');
let blue_planet = document.getElementById('blue-planet');
let purp_planet = document.getElementById('purp-planet');
let ship = document.getElementById('ship');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = -0.1*value + 'px';
  ship.style.left = 3 * value + 'px';
  purp_planet.style.left = 0.1*value + 'px';
  purp_planet.style.top = 0.*value + 'px';
  blue_planet.style.top = -0.7*value + 'px';
  blue_planet.style.top = -0.7*value + 'px';
})

let scroll_ship = document.getElementsByClassName('scroll-ship');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 400){
    scroll_ship.classList.remove('hidden');
    scroll_ship.classList.add('transit');
  } 
  else {
    scroll_ship.classList.remove('transit');
    scroll_ship.classList.add('hidden');
  }
});


let ship2 = document.getElementById('scroll-ship');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(element => {
    console.log(element)
    if (element.isIntersecting) {
      element.target.classList.add('show');
      window.addEventListener('scroll', function(){
        let value = window.scrollY;
        ship2.style.top = 0.7*value + 'px';
      })
    }
    else {
      element.target.classList.remove('show');
    }
  });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) =>
  observer.observe(element));