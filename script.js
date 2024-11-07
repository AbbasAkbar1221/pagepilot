let prevBtn = document.querySelector(".prev"); 
let nextBtn = document.querySelector('.next'); 
let ul = document.querySelector('.ul');

let currentPage = 5;
let totalPage = 10;
let activePage = "";



let createPage = (currPage)=>{
    ul.innerHTML="";

    let previousPage = currPage-2;
    let nextPage = currPage+2;

    if(currPage==2){
        previousPage++;
    }
    if(currPage==1){
        previousPage=currPage;
    }
    if(currPage==totalPage-1){
        nextPage--;
    }
    if(currPage==totalPage){
        nextPage=currPage;
    }

    for(let i=previousPage; i<=nextPage;i++){
        if(currPage==i){
            activePage = "active_page";
        }
        else{
            activePage="";
        }
        ul.innerHTML+=`<li onclick="createPage(`+i+`)"><a href="#" class="page_number `+activePage+`">`+i+`</a></li>`;
    }

    if(currPage<=1){
        prevBtn.style.display="none";
    }
    else{
        prevBtn.style.display="block";
    }

    if(currPage>=totalPage){
        nextBtn.style.display="none";
    }
    else{
        nextBtn.style.display="block";
    }
    

}


createPage(currentPage);

prevBtn.onclick=()=>{
    if(currentPage>1){
        currentPage--;
        createPage(currentPage);
    }
    

}

nextBtn.onclick=()=>{
    if(currentPage<totalPage){
        currentPage++;
        createPage(currentPage);
    }
}


