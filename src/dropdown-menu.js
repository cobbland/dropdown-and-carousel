/* dropdown-menu.js uses a div that interacts with a direct sibling ul. 
   The button has class="dropdown-menu" and the ul
*/

// const dropdownMenuButtons = Array.from(document.querySelectorAll('.dropdown-menu'));

// console.log(dropdownMenuButtons)

// for (const button in dropdownMenuButtons) {
//     const dropdownMenu = dropdownMenuButtons[button].nextElementSibling;
//     dropdownMenu.style.display = 'none';
//     dropdownMenu.style["flex-direction"] = 'column';
//     dropdownMenu.style["background-color"] = 'lightblue';
//     // dropdownMenu.style.position = 'absolute'
// }

// document.addEventListener('click', (button) => {
//     if (button.target.classList.value === 'dropdown-menu') {
//         const dropdownMenu = button.target.nextElementSibling;
//         if (dropdownMenu.style.display === 'none') {
//             dropdownMenu.style.display = "flex";
//         } else {
//             dropdownMenu.style.display = "none";
//         }
        
//     }
// })

// class DropDownMenu {
//     constructor() {

//     }
// }

const dropdownDiv = document.querySelector(".js-dropdown-div");
const dropdownMenu = document.querySelector(".js-dropdown");
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
let closeButtons = document.querySelectorAll('.close-button');

closeButtons = Array.from(closeButtons);
console.log(closeButtons);

dropdownDiv.addEventListener('click', (button) => {
  button.stopPropagation();
  dropdownMenu.classList.toggle("show");
  if (button.target.innerText === 'Carousel') {
    page1.classList.toggle('behind');
    page2.classList.toggle('show');
  }
})

document.documentElement.addEventListener("click", (clicked) => {
  if (dropdownMenu.classList.contains('show')) {
    dropdownMenu.classList.toggle("show");
  }
  for (const closeButton in closeButtons) {
    if (clicked.target === closeButtons[closeButton]) {
      clicked.target.closest('.page').classList.toggle('show');
      page1.classList.toggle('behind');
    }
  }
})
