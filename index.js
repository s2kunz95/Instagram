var overLay = document.getElementsByClassName('overlay');
var boxModal = document.getElementById('bx-modal');
var cmt = document.getElementsByClassName('cmt-content')[0];
var confirmBtn = document.getElementsByClassName('confirm-btn')[0];
for(var i = 0; i < overLay.length; i++) {
	overLay[i].addEventListener('click', showModal);
}

cmt.addEventListener('focusin', highLights);
cmt.addEventListener('focusout', fade);

window.onclick = function(event) {
	if(event.target == boxModal) {
		boxModal.style.display = 'none';
	}
}

function highLights() {
	confirmBtn.style.opacity = 1;
}

function fade() {
	confirmBtn.style.opacity = 0.3;
}

function showModal(event) {
	boxModal.style.display = 'flex';
}