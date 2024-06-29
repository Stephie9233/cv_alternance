const puces = document.querySelector("#puces");
const left = document.querySelector('#picture');
const right = document.querySelector('#right');
const cards = document.querySelectorAll('.card');

const etsBat = document.querySelector("#etsBat");
const bouygues = document.querySelector("#bouygues");
const sita = document.querySelector("#sita");

document.addEventListener('DOMContentLoaded', () => {
    cards.forEach((el) => {
        el.style.display = 'none';
    })

    etsBat.style.display = 'flex';
})

function hide(array) {
    array.forEach((el) => {
        if(el.style.display == 'flex' || el.style.display == 'block') {
            el.style.display = 'none';
        }
    })
}

function showReal(target, array) {
    for(let i = 0; i < array.length; i++) {
        if(target.id == array[i].id+'-enum') {
            array[i].style.display = 'flex';
            array[i].style.flexDirection = 'column';
        }
    }    
}

document.addEventListener('click', (e) => {          
    console.log(e.target.id == (cards[0].id+'-enum'));
    hide(cards)
    showReal(e.target, cards)
})

