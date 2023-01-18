//selectors
//----------------------------------------
//1. document.getElementById();
//2. document.getElementByClass();
//3. document.getElementByTagName();
//4. document.getElementByquerySelector();
//5. document.getElementByquerySelectorAll();

const newId = document.getElementById('main-heading');
newId.innerHTML = "favourite Move titles";

const tagName = document.querySelector('ul');
const li = document.createElement('li');
tagName.append(li);
li.innerText = 'X-men';
li.setAttribute('id',"main-heading");
li.style.color ="blue";


const newClass = document.getElementsByClassName('list-items');
// for(const el of newClass){
//     console.log(el);
// }

Array.from(newClass).forEach((el) => el.innerHTML = `-- ${el.innerText.toUpperCase()} --`);
