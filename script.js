let button = document.getElementById('enter');
let input = document.getElementById('userinput');
let list = document.querySelector('ul');

const inputLength = () => {
    return input.value.length;
};

const markItemDone = () => {
    event.srcElement.classList.toggle('done');
};

const createListElement = () => {
    let li = document.createElement('li');
    let btn = document.createElement('button');

    btn.appendChild(document.createTextNode('Delete'));
    btn.classList.add('listbutton');

    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);
    li.classList.add('listitem');

    list.appendChild(li);
    li.addEventListener('click', markItemDone);
    btn.addEventListener('click', () => {
        list.removeChild(li);
    });
    input.value = '';
};

const addListAfterClick = () => {
    if (inputLength() > 0) {
        createListElement();
    }
};

const addListAfterEnter = event => {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
};

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterEnter);
