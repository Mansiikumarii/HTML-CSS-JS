function addLanguage(langName){
const li = document.createElement('li');
li.innerHTML = `${langName}`;
document.querySelector('.language').appendChild(li);
}
addLanguage("JavaScript");
addLanguage("Java");

function addOptLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
addOptLanguage("C#");

//Edit
