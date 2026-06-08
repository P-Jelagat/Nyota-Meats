
// MENU BUTTON FUNCTIONALITY
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

// FAQ SECTION JS

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {

    const question = faq.querySelector(".faq-question");
    const answer = faq.querySelector(".faq-answer");
    const icon = faq.querySelector(".display");

    question.addEventListener('click', () => {
        answer.classList.toggle("show");

        if(answer.classList.contains("show")){

            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.textContent = "-";

        }else{

            answer.style.maxHeight = 0;
            icon.textContent = "+"

        }
    })
});

// SEE MORE FUNCTIONALITY ON PRODUCTS
const toggleBtn = document.getElementById('toggle-products');
const hiddenProducts = document.querySelectorAll('.hidden-product');

let expanded = false;

toggleBtn.addEventListener('click', () => {

    expanded = !expanded;
    hiddenProducts.forEach(product => {
        product.classList.toggle('show');
       });
       toggleBtn.textContent =  expanded ? 'See Less' : 'See More';
});