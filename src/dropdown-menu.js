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