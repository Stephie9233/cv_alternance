const pictureCtn = document.querySelector(".picture-ctn");
const pictures = document.querySelectorAll('.picture')
const statics = document.querySelectorAll('.static');
const dynamics = document.querySelectorAll('.dynamic')

const asas = document.querySelector("#asas");
const jma = document.querySelector("#jma");
const kaamelott = document.querySelector("#kaamelott");
const jackpot = document.querySelector("#jackpot");

document.addEventListener('DOMContentLoaded', () => {
    statics.forEach((el) => {
        el.style.display = 'none';
    })

    dynamics.forEach((el) => {
        el.style.display = 'none';
    })
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
        if(target.id == array[i].id+'-pict') {
            array[i].style.display = 'flex';
            array[i].style.flexDirection = 'column';
        }
    }    
}

document.addEventListener('click', (e) => {          
    console.log(e.target.id == (statics[0].id+'-pict'));
    hide(statics)
    showReal(e.target, statics)
    showReal(e.target, dynamics)
})




