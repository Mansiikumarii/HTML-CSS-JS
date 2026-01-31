const title = document.getElementById('main-heading');
console.log(title);

//Get element by class name
const listItem = document.getElementsByClassName('container');
console.log(listItem);

//Get Elements by tag name
const TagName = document.getElementsByTagName('li')
console.log(TagName);

//query Selector
const container = document.querySelector('div');
console.log(container);

//DOM Manipulation
const title1 = document.querySelector('#main-heading');
title1.style.color = 'red';
console.log(title1);

const listItem1 = document.querySelectorAll('li');
for(i=0; i<listItem1.length; i++){
    listItem1[i].style.fontSize = '5rem';
}

//Create Element
const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding elements


li.innerText = "The Conjuring 2";

li.classList.add('list-item');
ul.append(li);