//Traverse the DOM

//Parent Node Traversal
//Child Node Traversal
//Sibling Node Traversal


//Parent Node Traversal
let ul = document.querySelector('ul');
console.log(ul.parentNode);
console.log(ul.parentElement);


//Child Node Traversal
let ui = document.querySelector('ul');
console.log(ui.childNodes);
console.log(ui.children);
console.log(ui.firstChild);
console.log(ui.firstElementChild);
console.log(ui.lastChild);
console.log(ui.lastElementChild);

ui.childNodes[3].style.color = 'blue';