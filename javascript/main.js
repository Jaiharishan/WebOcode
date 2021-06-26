// ALL SCRIPTS GOES HERE

// SCROLL FUNCTION FOR NAVBAR TO RESIZE
window.addEventListener('scroll', ()=> {
    let topBar = document.querySelector('.top-bar');
    topBar.classList.toggle('sticky', window.scrollY > 0);
})


// SWITCH IMAGES IN CLICK

// ARRAY TO STORE CONTENT
let gameNews = {
    
}

let mainGameImgContainer = document.querySelector('.game-img');
let sideGameImgContainer = document.querySelector('.side-game-imgs');

let sideGameImg = document.querySelectorAll('.side-game-img');


for (let i = 0; i < sideGameImg.length; i++) {
    sideGameImg[i].addEventListener('click', ()=> {
        let childImg = sideGameImg[i].children[0];
        let mainImg = mainGameImgContainer.querySelector('.main-img');
        mainGameImgContainer.appendChild(childImg);
        childImg.getElementsByClassName.order = '1';
        childImg.setAttribute('class', 'main-img');
        sideGameImg[i].appendChild(mainImg);
    })
}