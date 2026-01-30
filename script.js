const message = document.getElementById('message');

const toggleButton = document.getElementById('toggleButton');

//add event listener
toggleButton.addEventListener('click',()=>{
    message.classList.toggle('hide');
})