let prevBtn = document.querySelector(".prev"); 
let nextBtn = document.querySelector('.next'); 
let ul = document.querySelector('.ul');
let itemsContainer = document.querySelector('.items-container');

// Sample data: let's assume you have 50 items to display, like products on an e-commerce site.
const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);
let itemsPerPage = 5; // Number of items per page
let currentPage = 1;
let totalPage = Math.ceil(items.length / itemsPerPage); // Calculate total pages
let activePage = "";

let createPage = (currPage) => {
    ul.innerHTML = "";
    itemsContainer.innerHTML = ""; // Clear previous items

    let previousPage = currPage - 2;
    let nextPage = currPage + 2;

    if (currPage == 2) previousPage++;
    if (currPage == 1) previousPage = currPage;
    if (currPage == totalPage - 1) nextPage--;
    if (currPage == totalPage) nextPage = currPage;

    // Populate pagination buttons
    for (let i = previousPage; i <= nextPage; i++) {
        if (currPage == i) {
            activePage = "active_page";
        } else {
            activePage = "";
        }
        ul.innerHTML += `<li onclick="createPage(${i})"><a href="#" class="page_number ${activePage}">${i}</a></li>`;
    }

    // Show/hide previous and next buttons
    prevBtn.style.display = currPage <= 1 ? "none" : "block";
    nextBtn.style.display = currPage >= totalPage ? "none" : "block";

    // Display items for the current page
    displayItems(currPage);
};

let displayItems = (page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = items.slice(start, end);

    pageItems.forEach(item => {
        itemsContainer.innerHTML += `<div class="item">${item}</div>`;
    });
};

createPage(currentPage);

prevBtn.onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        createPage(currentPage);
    }
};

nextBtn.onclick = () => {
    if (currentPage < totalPage) {
        currentPage++;
        createPage(currentPage);
    }
};
