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

dropdownDiv.addEventListener('click', () => {
   dropdownMenu.classList.toggle("show");
})

// document.addEventListener("click", (clicked) => {
//    console.log(clicked.target)
//    if (clicked.target !== dropdownDiv) {
//       if (dropdownMenu.classList.value === "js-dropdown show") {
//          dropdownMenu.classList.toggle("show");
//       }
//    } else if (clicked.target.closest('.js-dropdown-div')) {
//       dropdownMenu.classList.toggle("show");
//    }
// }) // doesn't work //
