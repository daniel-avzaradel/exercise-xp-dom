const richard = document.getElementsByTagName('li');
richard[1].innerText = "Richard";

const ulnode = document.getElementsByClassName('list');
ulnode[0].firstElementChild.textContent = "Daniel";
ulnode[1].firstElementChild.textContent = "Daniel";

const heystuds0 = document.createElement('li');
heystuds0.textContent = "Hey students";

const heystuds1 = document.createElement('li');
heystuds1.textContent = "Hey students";

ulnode[0].appendChild(heystuds0);
ulnode[1].appendChild(heystuds1);

const sarah = document.getElementsByTagName('li')[4];
sarah.remove()

const student_list0 = document.getElementsByTagName('ul')[0];
const student_list1 = document.getElementsByTagName('ul')[1];
student_list0.classList.add('student_list')
student_list1.classList.add('student_list')

const uniclass = document.getElementsByTagName('ul')[0];
uniclass.classList.add('university')
uniclass.classList.add('attendance')