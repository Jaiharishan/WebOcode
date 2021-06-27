// ALL SCRIPTS GOES HERE

// SCROLL FUNCTION FOR NAVBAR TO RESIZE
window.addEventListener('scroll', ()=> {
    let topBar = document.querySelector('.top-bar');
    topBar.classList.toggle('sticky', window.scrollY > 0);
})


// SWITCH IMAGES IN CLICK

// ARRAY TO STORE CONTENT
let gameNews = {
    'pubg':'Pubg State reaches 17M downloads on playStore',
    'fortnite':"Fortnite Creative featured Guidlines | see what's new",
    'ApexLegends':"Apex Legends Genesis Patch, What's new in patch 9.1",
    'csgo':'The road to Stockholm 2021, gear up for more updates',
    'dota2':'Nemistice falls and new Power rises, the GameChanger?',
}

let mainGameImgContainer = document.querySelector('.game-img');
let sideGameImgContainer = document.querySelector('.side-game-imgs');

let sideGameImg = document.querySelectorAll('.side-game-img');
let gameNameContainer = document.querySelector('#title');
let gameNewsContainer = document.querySelector('.game-content > .sub-header');


for (let i = 0; i < sideGameImg.length; i++) {
    sideGameImg[i].addEventListener('click', ()=> {
        let childImg = sideGameImg[i].children[0];
        let mainImg = mainGameImgContainer.querySelector('.main-img');
        mainGameImgContainer.appendChild(childImg);

        childImg.getElementsByClassName.order = '1';
        childImg.setAttribute('class', 'main-img');
        sideGameImg[i].appendChild(mainImg);
        gameNewsContainer.textContent = gameNews[childImg.id];
        gameNameContainer.textContent = childImg.id;
    })
}

