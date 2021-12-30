/* ham-burger menu */
let hamMenu = document.querySelector(".ham-menu");
let navBar = document.querySelector(".nav");
let textMenu = navBar.children[1];
let closeBtn = textMenu.firstElementChild;

// add event listener
hamMenu.addEventListener("click", ()=>{
    // remove the ham menu 
    hamMenu.classList.add('disp-none');
    // make whole menu column 
    navBar.classList.add('col-nav');
    // make the text menu in column format
    textMenu.classList.add('col-nav');
    // make the cross mark visible
    closeBtn.classList.replace('disp-none', 'disp-block');
    
});

// when close button is pressed 
closeBtn.addEventListener("click", () =>{
    // remove the close button 
    closeBtn.classList.replace('disp-block', 'disp-none');
    // change the layout of the menu into row 
    navBar.classList.remove('col-nav');
    textMenu.classList.remove('col-nav');
    // reveal the ham menu
    hamMenu.classList.remove('disp-none');
    
})


