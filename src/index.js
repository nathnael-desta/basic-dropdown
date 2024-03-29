import { forEach } from 'lodash';
import './style.css';

const close = document.querySelector('.close');
const basic = document.querySelector('.basic');
const mobile_menu = document.querySelector('.mobile_menu');
const dropdowns  = document.querySelectorAll('.dropdown_v');
const names = document.querySelectorAll(".name");

mobile_menu.addEventListener('click', () => {
    close.classList.toggle('hidden');
    basic.classList.toggle('hidden');
    let parent = mobile_menu.parentElement;
    let vertical = parent.nextElementSibling;
    vertical.classList.toggle('none')
})


names.forEach((name) => {
    name.addEventListener('click', () => {
        let holder = name.nextElementSibling;
        holder.classList.toggle('none');
        let svgs = name.querySelectorAll('.svg');

        svgs.forEach((svg) => {
            svg.classList.toggle('none')
        })
        /*
        for (let node of name.childNodes) {
            
            if (node.classList.contains('svg')){
                node.classList.toggle('none')
            }
            
        }
        */

    })
})

