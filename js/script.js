
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

// FAQ ANSWER DISPLAY

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
let originalPosition = 0;

toggleBtn.addEventListener('click', () => {

    if(!expanded){
        originalPosition = window.scrollY;
    }

    expanded = !expanded;
    hiddenProducts.forEach(product => {
        product.classList.toggle('show');
       });
    toggleBtn.textContent =  expanded ? 'See Less' : 'See More';
    
    if(!expanded){
        window.scrollTo({
            top: originalPosition,
            behaviour: 'smooth'
        });
    }

});

// FAQ SEARCHBAR RESPONSIVENESS
const searchInput = document.getElementById("faq-search");
const searchBtn = document.getElementById("search-btn");
const faqItems = document.querySelectorAll(".faq-item");
const noResults = document.getElementById("no-results");

function searchFaqs() {

    const query = searchInput.value.trim().toLowerCase();
    let matchesFound = 0;

    faqItems.forEach(item => {

        const text = item.textContent.toLowerCase();

        if (text.includes(query)) {
            item.style.display = "block";
            matchesFound++;
        } else {
            item.style.display = "none";
        }

    });

    if (matchesFound === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

}

// Search while typing
searchInput.addEventListener("input", searchFaqs);

// Search when button is clicked
searchBtn.addEventListener("click", searchFaqs);

// Allow pressing enter to show results
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchFaqs();
    }
});