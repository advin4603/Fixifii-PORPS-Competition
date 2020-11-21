var isOutOfViewport = function (elem) {

	// Get element's bounding
	var bounding = elem.getBoundingClientRect();

	// Check if it's out of the viewport on each side
	var out = {};
	out.top = bounding.top < 0;
	out.left = bounding.left < 0;
	out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
	out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
	out.any = out.top || out.left || out.bottom || out.right;
	out.all = out.top && out.left && out.bottom && out.right;

	return out;

};

function appear(){
    let introTextList = document.querySelectorAll('.introduce-text-left, .introduce-text-right, .introduce-text-top');
    introTextList.forEach(introText => {
        let introPosition = introText.getBoundingClientRect().top;
        let screenPosition = window.innerHeight/1.4;
        if (introPosition < screenPosition){
            introText.classList.add("introduced-text");
        }
    });
    let removeTextList = document.querySelectorAll('.introduced-text');
    removeTextList.forEach(removeText => {
        let isOut = isOutOfViewport(removeText);
        if (isOut.top || isOut.bottom){
            removeText.classList.remove("introduced-text");
        }
    });
}

window.addEventListener('scroll', appear)
appear();
