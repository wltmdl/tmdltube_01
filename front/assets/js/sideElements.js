const sideIcon = document.querySelector('.side-icon');
const sideMenuBar = document.querySelector('.the-side-content');
const sideMenuBarFrame = document.querySelector('#sideContent');

sideIcon.addEventListener('click',()=>{
    sideIcon.classList.toggle('active');
    sideMenuBar.classList.toggle('active');
    sideMenuBarFrame.classList.toggle('active');
})
