function changeText(event){
    console.log(event);
 let fpan = document.getElementById('fpan');
fpan.textContent = "Hello Sai";   
}
let fpan = document.getElementById('fpan');

fpan.addEventListener('click',changeText);

let anchorElement = document.getElementById('fanchor');

anchorElement.addEventListener('click',function(event){
    event.preventDefault(anchorElement);
    anchorElement.textContent = "Click done bhai";
})
