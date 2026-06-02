const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('.menu');

console.log(menuBtn);
console.log(menu);

menuBtn.addEventListener('click', (e) => {

    e.preventDefault();
    menu.classList.toggle('show');
    
});

document.addEventListener('click', (e) => {
 const clickedInsideMenu = menu.contains(e.target);
 const clickedButton = menuBtn.contains(e.target);

 if(!clickedInsideMenu && !clickedButton){

    menu.classList.remove('show');

}
});
