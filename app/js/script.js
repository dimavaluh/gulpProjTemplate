let sentence = prompt('Введите любой текст', "любой текст");


let me = {
    name: 'Dima',
    age: '25'
};
let newDiv = document.body.appendChild(document.createElement('div'));
let string = sentence.split('');
let newString = string.map(i => {
   return i === ' ' ? `<p>&nbsp;</p>` : `<p>${i}</p>`
});
newDiv.innerHTML = newString.join('');

const p = document.querySelectorAll('p');

p.forEach(function (i) {
    i.addEventListener('mouseover',() => {
        i.style.fontSize = '100px';
    });

    i.addEventListener('mouseout',() => {
        i.style.fontSize = '50px';
    });
});