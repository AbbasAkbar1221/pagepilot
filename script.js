// let prevBtn = document.querySelector(".prev");
// let nextBtn = document.querySelector(".next");
// let ul = document.querySelector(".ul");
// let itemsContainer = document.querySelector(".items-container");

// // Sample data
// const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
// const itemsPerPage = 5;
// let currentPage = 1;
// const totalPages = Math.ceil(items.length / itemsPerPage);

// // Function to create pagination buttons
// const updatePagination = () => {
//     ul.innerHTML = "";

//     let startPage = Math.max(1, currentPage - 2);
//     let endPage = Math.min(totalPages, currentPage + 2);

//     for (let i = startPage; i <= endPage; i++) {
//         ul.innerHTML += `
//             <li>
//                 <a href="#" class="page_number ${currentPage === i ? "active_page" : ""}" onclick="changePage(${i})">${i}</a>
//             </li>
//         `;
//     }

//     prevBtn.style.display = currentPage > 1 ? "block" : "none";
//     nextBtn.style.display = currentPage < totalPages ? "block" : "none";
// };

// // Function to display items for the current page
// const displayItems = () => {
//     itemsContainer.innerHTML = items
//         .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
//         .map(item => `<div class="item">${item}</div>`)
//         .join("");
// };

// // Function to change the page
// const changePage = (page) => {
//     currentPage = page;
//     updatePagination();
//     displayItems();
// };

// // Event listeners for next and previous buttons
// prevBtn.onclick = () => changePage(currentPage - 1);
// nextBtn.onclick = () => changePage(currentPage + 1);

// // Initialize the pagination and display
// updatePagination();
// displayItems();


let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let ul = document.querySelector(".ul");
let itemsContainer = document.querySelector(".items-container");

// Sample data
const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
const itemsPerPage = 5;
let currentPage = 1;
const totalPages = Math.ceil(items.length / itemsPerPage);

// Function to create pagination buttons
const updatePagination = () => {
    ul.innerHTML = "";

    // Show the first page
    if (currentPage > 2) {
        ul.innerHTML += `<li><a href="#" onclick="changePage(1)" class="page_number">1</a></li>`;
    }

    // Add ellipsis if needed before current pages
    if (currentPage > 3) {
        ul.innerHTML += `<li><span class="ellipsis">...</span></li>`;
    }

    // Display pages around the current page
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
        ul.innerHTML += `
            <li>
                <a href="#" class="page_number ${currentPage === i ? "active_page" : ""}" onclick="changePage(${i})">${i}</a>
            </li>
        `;
    }

    // Add ellipsis if needed after current pages
    if (currentPage < totalPages - 2) {
        ul.innerHTML += `<li><span class="ellipsis">...</span></li>`;
    }

    // Show the last page
    if (currentPage < totalPages - 1) {
        ul.innerHTML += `<li><a href="#" onclick="changePage(${totalPages})" class="page_number">${totalPages}</a></li>`;
    }

    prevBtn.style.display = currentPage > 1 ? "block" : "none";
    nextBtn.style.display = currentPage < totalPages ? "block" : "none";
};

// Function to display items for the current page
const displayItems = () => {
    itemsContainer.innerHTML = items
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map(item => `<div class="item">${item}</div>`)
        .join("");
};

// Function to change the page
const changePage = (page) => {
    currentPage = page;
    updatePagination();
    displayItems();
};

// Event listeners for next and previous buttons
prevBtn.onclick = () => changePage(currentPage - 1);
nextBtn.onclick = () => changePage(currentPage + 1);

// Initialize the pagination and display
updatePagination();
displayItems();
