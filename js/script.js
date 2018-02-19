//smooth scroll
var scrolled, timer, anchor;

var anchorLink = document.getElementsByClassName('anchor-link');
for (var key in anchorLink){
	anchorLink[key].onclick = function(e){
		e.preventDefault();
		scrolled = window.pageYOffset;
		anchor = document.querySelector(this.hash).offsetTop;
		scrollToAnchor();
		if (window.innerWidth < 769){
            var nav = document.querySelector('nav');
            var menuSvg = document.querySelector('.nav-menu');
            nav.style.left = "100vw";
            menuSvg.innerHTML = `
            	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124">
					<path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
					<path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
					<path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
				</svg>`;
		}
	}
}

function scrollToAnchor(){
	if ((anchor - scrolled) > 21){
		window.scrollTo(0, scrolled);
		scrolled += 20;
		timer = setTimeout(scrollToAnchor, 1);
	}  else if ((scrolled - anchor) > 21){
			window.scrollTo(0, scrolled);
			scrolled -= 20;
			timer = setTimeout(scrollToAnchor, 1);
	} else {
		clearTimeout(timer);
		window.scrollTo(0, anchor);
	}
}

//to-top button
window.onscroll = function() {
	var scrolled = window.pageYOffset;
	var toTop = document.querySelector('#to-top');
	if (scrolled > 1000){
		toTop.style.display = "block";
	} else {
		toTop.style.display = "";
	}
}

//portfolio gallery
/*var gallery = document.getElementsByClassName('portfolioPlate');
var galleryItems = document.getElementsByClassName('gallery-item');
var galleryThumbs = document.querySelectorAll('.gallery-thumbs img');
var imgSrc, imgIndex;

for (var key in gallery){
	gallery[key].onclick = function(){
		document.querySelector('.portfolio-gallery').style.display = 'flex';
		document.querySelector('#gallery-main-photo').src = this.querySelector('.gallery-item').src;
		arrowDisplay();
	}
}

for (var key in galleryThumbs){
	galleryThumbs[key].onclick = function(){
		document.querySelector('#gallery-main-photo').src = this.src;
		arrowDisplay();
	}
}

document.querySelector('.prev svg').onclick = function(){
	imgSrc = document.querySelector('#gallery-main-photo').src;
	imgIndex = imgSrc.match(/\d(?=.png)/g);
	imgIndex = imgIndex[0];
	imgIndex--;
	document.querySelector('#gallery-main-photo').src = imgSrc.replace(/\d(?=.png)/g, imgIndex);
	arrowDisplay();
}

document.querySelector('.next svg').onclick = function(){
	imgSrc = document.querySelector('#gallery-main-photo').src;
	imgIndex = imgSrc.match(/\d(?=.png)/g);
	imgIndex = imgIndex[0];
	imgIndex++;
	document.querySelector('#gallery-main-photo').src = imgSrc.replace(/\d(?=.png)/g, imgIndex);
	arrowDisplay();
}

document.querySelector('.close-button').onclick = function(){
	document.querySelector('.portfolio-gallery').style.display = '';
}

function arrowDisplay(){
	imgSrc = document.querySelector('#gallery-main-photo').src;
	imgIndex = imgSrc.match(/\d(?=.png)/g);
	imgIndex = imgIndex[0];
	if (imgIndex == 1){
		document.querySelector('.prev svg').style.display = "none";
		document.querySelector('.next svg').style.display = "block";
	} else {
		document.querySelector('.prev svg').style.display = "block";
		document.querySelector('.next svg').style.display = "block";
	}
}

//mail
document.querySelector('#send').onclick = function(e){
	e.preventDefault();
	sendMail();
}

function sendMail(){
	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if (request.readyState == 4 && request.status == 200){
			if (request.responseText == 1){
				document.querySelector('#result').innerHTML = "Ваше повiдомлення успiшно надiслано!";
				document.querySelector('#send-mail').style.display = "none";
			} else {
				document.querySelector('#result').innerHTML = request.responseText;
			}
		}
	}

	request.open('POST', 'sendmail.php');
	request.setRequestHeader('Content-Type', 'application/x-www-urlencoded');
	request.send(params);
}
*/
//mob menu

function menuShow(event) {
	var menuSvg = document.querySelector('.nav-menu');
	var nav = document.querySelector('nav');
	nav.style.left = '0';
    menuSvg.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.9 21.9">
			<path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z"/>
		</svg>`;
}

