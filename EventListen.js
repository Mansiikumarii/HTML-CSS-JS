//Add event Listner
const butTwo = document.querySelector('.btn-2');
function addEvent(){
    alert('I love C');
}
butTwo.addEventListener('click',addEvent);

const newBackgroundColor = document.querySelector('.box-3');
function changeBackgroundColor(){
    newBackgroundColor.style.backgroundColor = 'blue';
}
newBackgroundColor.addEventListener('mouseover', changeBackgroundColor);

//Reveal Button
const revealBtn = document.querySelector('.reveal-btn-class');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    hiddenContent.classList.toggle('show');
}

revealBtn.addEventListener('click', revealContent);
