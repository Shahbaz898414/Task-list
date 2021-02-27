// document.getElementById

// console.log(document.getElementById('task-title'));

// // GEt thing from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// // Change stylling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// // console.log(document.getElementById('task-title').style.display = 'none');

// //  Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style = "color:red">Task List</span>';

// document.querySelector();

// console.log(document.querySelector('#task-title'));
// console.log(decument.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';
// documebnt.querySelector('li:last-child').style.color = 'red';
// documebnt.querySelector('li:last-child(3)').style.color = 'red';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// documebnt.querySelector('li:nth-child(add)').style.color = '#ccc';
// documebnt.querySelector('li:nth-child(even)').style.color = '#f4f4f4';


// document.getElementByClassName 

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.getElementsByClassName('collection-item');
// console.log(listItems);

//  document.getElementByTagName

// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';


// // conver HTML collection into array
//  lis = Array.from(lis);

//  lis.reverse();

//  lis.forEach(function(li){
//      console.log(li.className);
//      li.textContent = 'Hello';

//     //  li.textContent = `${index}: Hello`;
//  });
   
//  console.log(lis);

// document.querySelectorAll

// const items = document.querySelectorAll('ul.collectionli.collection-item');

// items.forEach(function(li){
//          items.textContent = `${index}: Hello`;
//      });

//      const liodd = document.querySelelctorAll('li:nth-child(odd)');
//      const liEven = doument.querySelectorAll('li:nth-child(even)');

//      liodd.forEach(function(item, index) {
//          li.style.background = 'red';
        
//      });

//      for(let i = 0; i< liEven.length; i++) {
//          liEven[i].style.background = '#red';
//      }

// console.log(items);

///////////////////////////////////////////////// travesing/////////////////////////

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;


// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// // val = list.childNodes[0].nodeType;
// // val = list.childNodes[1].nodeType;
// val = list.childNodes[3].nodeType;


// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';

// Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];


// console.log(val);


// // First child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
// console.log(val);

///////////////////////////////////////////

// create element//////////////////////

// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('action','New');

// // create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // create new link Element
// const link = document.createElement('a');
// // Add class
// link.className = 'delete-item secondary-content';

// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link intro li
// li.appendChild(link);

// // Append li as child to ul 
// document.querySelector('ul.collection').appendChild(li);

// // console.log(li);

///////////////////////////////////////////

// REPLACE ELEMENT

// // Create Element
// const newHeading = document.createElement('h1');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// //Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // CLASSES & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// console.log(val);

// /////////////////////////// 8. Event Listeners & The Event Object  ///////////////////////////////////

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World');

//     // e.preventDefault();
// });



// document.querySelector('.clear-tasks').addEventListener('click', onclick);

// function onclick(e){
//     // console.log('Clicked');

//     let val;
//     val = e;

//     //  Event target element

//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val= e.target.classList;

//     // e.target.innerText = 'Hello';

//     // Event target element
//     val = e.type;

//     // timetamp
//     val = e.timeStamp;

//     // coords event relative to the window
//     val = e.clientY;
//     val = e.clientX;

//     // coords event relative to the element 
//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val);
// }


// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Doubleclick
// clearBtn.addEventListener('dblclick',runEvent);

// // Mousedown
// clearBtn.addEventListener('mousedown',runEvent);
// // mouseup
// clearBtn.addEventListener('mouseup',runEvent);

// // mouseenter
// card.addEventListener('mouseenter',runEvent);
// // mouseleave
// card.addEventListener('mouseleave',runEvent);

// // mouseover
// card.addEventListener('mouseover',runEvent);
// // mouseout
// card.addEventListener('mouseout',runEvent);

// mousemove
// card.addEventListener('mousemove',runEvent);

// // Event Handler 
// function runEvent(e) {
//     console.log(`EVENT TYPE : ${e.type}`);

//     heading.textContent= `MouseX:${e.offsetX} MouseY:${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},123)`;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// clear inout
// taskInput.value = '' ;

// form.addEventListener('submit', runEvent);

// keydown
// taskInput.addEventListener('keydown', runEvent);

// keyup
// taskInput.addEventListener('keyup', runEvent);

// keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('Focus', runEvent);

// Blur
// taskInput.addEventListener('Blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// paste
// taskInput.addEventListener('paste', runEvent);

// Input
// taskInput.addEventListener('input', runEvent);

// Change
// select.addEventListener('change',runEvent);



// function runEvent(e){
    // console.log(`EVENT TYPE:${e.type}`);

    // console.log(e.target.value);

    // heading.innerText= e.target.value;

    // Get input value
    // console.log(taskInput.value);

    // e.preventdefault();
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EVENT BUBBLING

// Document.querySelector('.card-title').adEventListener('click',function(){
//     console.log('card title');
// });


// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log('card content');
// });


// document.querySelector('.card').addEventListener('click',function(){
//     console.log('card');
// });


// document.querySelector('.col').addEventListener('click',function(){
//     console.log('col');
// });

// EVENT DELGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//     // console.log('delete item');

//     // console.log(e.target);
//     // if(e.target.parentElement.className === 'delete-item secondary-content'){
//     //     console.log('delete item');
//     // }

//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }

// }



// set local storage item
// localStorage.setItem('name','John');
// localStorage.setItem('age','30');

// set session storage item
// sessionStorage.setItem('name','Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();


// console.log(name,age);

// document.querySelector('form').addEventListener('submit', function(e){
//         // console.log(123);

//     const task = document.getElementById('task').value;
  
//     let tasks;
  
//     if(localStorage.getItem('tasks') === null) {
//       tasks = [];
//     } else {
//       tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
  
//     tasks.push(task);
  
//     localStorage.setItem('tasks', JSON.stringify(tasks));
  
//     alert('Task saved');
  
//     e.preventDefault();
//   });
  
//   const tasks = JSON.parse(localStorage.getItem('tasks'));
  
//   tasks.forEach(function(task){
//     console.log(task);
//   });


// // Define UI Vars
// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');

// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {
//   // Add task event
//   form.addEventListener('submit', addTask);
// }

// // Add Task
// function addTask(e) {
//   if(taskInput.value === '') {
//     alert('Add a task');
//   }

//   // Create li element
//   const li = document.createElement('li');

//   // Add class
//   li.className = 'collection-item';

//   // Create text node and append to li
//   li.appendChild(document.createTextNode(taskInput.value));

//   // Create new link element
//   const link = document.createElement('a');

//   // Add class
//   link.className = 'delete-item secondary-content';

//   // Add icon html
//   link.innerHTML = '<i class="fa fa-remove"></i>';
  
//   // Append the link to li
//   li.appendChild(link);

//   // Append li to ul
//   taskList.appendChild(li);

//   // Clear input
//   taskInput.value = '';

//   e.preventDefault();
// }

// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerhtml-vs-removechild

  // Clear from LS
  clearTasksFromLocalStorage();
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}