// ALL SCRIPTS GOES HERE

// SCROLL FUNCTION FOR NAVBAR TO RESIZE
window.addEventListener('scroll', ()=> {
    let topBar = document.querySelector('.top-bar');
    // topBar.style.padding = '.4em .8em';
    topBar.classList.toggle('sticky', window.scrollY > 0);
})