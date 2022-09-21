import cart from '../modules/cart.js';
import Card from '../modules/Card.js';

cart();

let accordion = document.querySelector('.accordion');


let lists = document.querySelectorAll('.checkbox-list');

accordion.addEventListener('click', () => {
	for(let list of lists) {
		for(let li of list.children) {
			for(let input of li.children) {
				if(input.checked) {
					document.querySelector('.aside-container').classList.remove('hide');
					return
				}else {
					document.querySelector('.aside-container').classList.add('hide');
				}
			}
		}
	}
})