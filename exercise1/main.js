// ===== Exercise 1 : Change The Navbar ===== //

const div = document.getElementById('navBar')

div.setAttribute('id', 'socialNetworkNavigation');
console.log(div.id)

const li = document.createElement('li');
const ul = document.querySelector('ul');

const log = document.createElement('a');
log.setAttribute('href', "#");
log.innerText = "Logout";
li.append(log);
ul.appendChild(li);

const first = ul.firstElementChild.textContent;
console.log(first)
const last = ul.lastElementChild.textContent;
console.log(last)

