const form = document.getElementById('myForm');
const input = document.getElementById('toDoInput');
const ul = document.getElementById('ul-list');
let x = [];
// let arr = ['Drink coffee', 'workout', 'working'];

let localArr = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (localStorage.getItem('todo')) {
    localArr = JSON.parse(localStorage.getItem('todo'));
    localArr.push(input.value);
    localStorage.setItem('todo', JSON.stringify(localArr));
  } else {
    localArr.push(input.value);
    localStorage.setItem('todo', JSON.stringify(localArr));
  }
  showLi();
  input.value = '';
});

// showing the todo list
function showLi() {
  ul.innerHTML = '';
  if (localStorage.getItem('todo')) {
    localArr = JSON.parse(localStorage.getItem('todo'));
    for (let i = 0; i < localArr.length; i++) {
      const li = document.createElement('li');
      li.innerHTML = `<button class="remove">X</button>${localArr[i]}`;
      ul.appendChild(li);
    }
    x = document.querySelectorAll('.remove');
  } else {
    console.log('error');
  }
  x.forEach((e) => {
    e.addEventListener('click', () => {
      let el = '';
      el = e.parentElement.innerText.split('').splice(1).join('');
      let arr = JSON.parse(localStorage.getItem('todo'));
      let newArr = arr?.filter((e) => {
        return e !== el;
      });
      localStorage.setItem('todo', JSON.stringify(newArr));
      ul.innerHTML = '';
      showLi();
    });
  });
}
showLi();
