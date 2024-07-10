'use strict';


const videoItems = [...document.querySelectorAll(".wrapper__bg-video")];
const videoItem = document.querySelector('.wrapper__bg-video');
const headerLinks = [...document.querySelectorAll(".wrapper__header-item-link")];
const colorsBlock = document.querySelector('.wrapper__switcher-colors');
const quoteBlock = document.querySelector('.wrapper__introduction-content--text');
const introSection = document.querySelector('.wrapper__introduction');
const introductionContent = document.querySelector('.wrapper__introduction-content--block');
const header = document.querySelector('.wrapper__introduction-header');
const container = document.querySelector('.wrapper__tours-block--container');
const tourCard = document.querySelector('.wrapper__container-card');
export const tourMovingLeftButton = document.querySelector('#left-indicator');
export const tourMovingRightButton = document.querySelector('#right-indicator');

// theme change
const logoIndicator = document.querySelector('.wrapper__header-content--logo');
const headerIcons = [...document.querySelectorAll('.wrapper__header-item--icon')];
const switcher = document.querySelector('.wrapper__switcher-block');
const titleText = document.querySelector('.wrapper__intriduction-content--title');
const introductionBtns = [...document.querySelectorAll('.wrapper__introduction-content--button')];
const introductionAdaptiveBtns = [...document.querySelectorAll('.wrapper__introduction-adaptive--button')];
const arrowIndicator = document.querySelector('.wrapper__arrow-down');
const advantageImageBlock = [...document.querySelectorAll('.wrapper__about-image--block')];
const advantageImage = [...document.querySelectorAll('.wrapper__about-image--img')];

// theme change indicators
export const blueIndicator = document.querySelector('#blue-color');
export const greenIndicator = document.querySelector('#green-color');
export const pinkIndicator = document.querySelector('#pink-color');
export const orangeIndicator = document.querySelector('#orange-color');

//common 

export const windowHeight = document.documentElement.clientHeight;

//testimonials 

export const modalButton = document.querySelector('.wrapper__testimonials-modal--button');
export const modalWindow = document.querySelector('.wrapper__testimonials-modal--block');

// offer

const images = document.querySelector('.wrapper__offer-content');
const animItems = document.querySelectorAll('.anim_items');
const offerButton = document.querySelector('.wrapper__offer-block--button');

// order

const orderImages = document.querySelectorAll('.wrapper__order-block--img');
const orderImagesBlock = document.querySelectorAll('.wrapper__order-image--block');
const orderForm = document.forms.order;
const orderName =orderForm.orderName;
const orderSurname = orderForm.orderSurname;
const orderCountry = orderForm.orderCountry;
const orderPhone = orderForm.orderPhone;
const orderEmail = orderForm.orderEmail;
const orderPeople = orderForm.orderPeople;
export const orderTour = orderForm.orderTour;
const orderMessage = orderForm.orderMessage;
const orderConfirmBtn = document.querySelector('.wrapper__order-form-btn');

// intro videos

const quotes = [
	'The world is your playground; let your wanderlust guide you to its wonders...',
	'Traveling is a symphony of emotions that plays the strings of your heart...',	
	'Each journey is an artist’s brushstroke, painting your soul with vivid colors...',	
	'Adventure knows no boundaries; it is the spirit’s boundless flight...'
];

const titlePosition = [	
	{top: '29%', left: '7%'},
	{top: '26%', left: '28%'},
	{top: '31%', left: '18%'}
];


const titles = [	
	"See world's pearls!",
	"Be in love with us!",
	'Open your world with us!',
];

export let themeColor = 'blue';

let hover1 = false;
let hover2 = false;
let hover3 = false;

async function loadInfo(link){
	try{
		const response = await fetch(`${link}`);
		const data = await response.json();	
		return data;	
	}
	catch(e){
		throw new Error(e)
	}
}

introductionContent.style.top = titlePosition[titlePosition.length - 1]?.top;
introductionContent.style.left = titlePosition[titlePosition.length - 1]?.left;

headerIcons.forEach((icon) => icon.classList.add("blue"));
switcher.classList.add("blue");
titleText.textContent = titles[titles.length -1];
introductionBtns.forEach((btn) => btn.classList.add("blue"));
introductionAdaptiveBtns.forEach((btn) => btn.classList.add("blue"));
arrowIndicator.classList.add('blue');
advantageImageBlock.forEach((image) => image.classList.add('blueBorder'));
advantageImage.forEach((image) => image.classList.add('blueFill'));
modalButton.classList.add('blue');
modalWindow.classList.add('blue');
offerButton.classList.add('blue');
orderImagesBlock.forEach((block) => block.classList.add('blueBorderTransparent'));
orderImages.forEach((image) => image.classList.add('blueFill'));
orderConfirmBtn.classList.add('blue');
logoIndicator.classList.add('blue');

async function setVideoItems(){
	const data = await loadInfo('./content/videos.json');
	const data2 = await loadInfo('./content/backgrounds.json');
	if(window.innerWidth <= 576){introSection.style.backgroundImage = `url(${data2[0]?.bg})`;}
	videoItem.src = data[data.length - 1].video;
	quoteBlock.textContent = quotes[quotes.length - 1];
	introductionContent.style.top = titlePosition[titlePosition.length - 1]?.top;
	introductionContent.style.left = titlePosition[titlePosition.length - 1]?.left;
	headerIcons.forEach((icon) => icon.classList.add("blue"));
	switcher.classList.add("blue");
	titleText.textContent = titles[titles.length -1];
	introductionBtns.forEach((btn) => btn.classList.add("blue"));
	introductionAdaptiveBtns.forEach((btn) => btn.classList.add("blue"));
	arrowIndicator.classList.add('blue');
	advantageImageBlock.forEach((image) => image.classList.add('blueBorder'));
	advantageImage.forEach((image) => image.classList.add('blueFill'));
	modalButton.classList.add('blue');
	modalWindow.classList.add('blue');
	offerButton.classList.add('blue');
	orderImagesBlock.forEach((block) => block.classList.add('blueBorderTransparent'));
	orderImages.forEach((image) => image.classList.add('blueFill'));
	orderConfirmBtn.classList.add('blue');
	logoIndicator.classList.add('blue');
}

let count = 0;

async function setSlider(){
	const data = await loadInfo('./content/videos.json');
	const data2 = await loadInfo('./content/backgrounds.json');

	setInterval(() => {		
		setTimeout(() => {
			if(window.innerWidth <= 576){introSection.style.backgroundImage = data2[count]?.bgWebp ? `url(${data2[count]?.bgWebp})` : `url(${data2[count]?.bg})`;}			
			videoItem.src = data[count]?.video; // pixabay.com
			quoteBlock.textContent = quotes[count];
			introductionContent.style.top = titlePosition[count]?.top;
			introductionContent.style.left = titlePosition[count]?.left;
			titleText.textContent = titles[count];

			if(count >= 2){count = 0;}
			else{count = count + 1;}
		}, 2000);
	}, 6000);
};

window.onload = setVideoItems();

setSlider();

window.onscroll = function scrollWindow(){	
	if(window.screenY === 0 || window.pageYOffset < 300){
		header.className = 'wrapper__introduction-header';
		arrowIndicator.style.display = 'none';
	}
	if(window.pageYOffset >= 300){
		header.classList.add('_scrolled');
		arrowIndicator.style.display = 'flex';
	}			
}

document.body.addEventListener('scroll', () => {
	scrollWindow();
});

arrowIndicator.addEventListener('click', (e) => {
	console.log(window.pageYOffset);	
	if(window.pageYOffset >= 500){window.scrollTo(0,0);}			
});

// switcher

switcher.addEventListener('click', e => {
	colorsBlock.classList.toggle('active')
});

blueIndicator.addEventListener('click', e => {
	headerIcons.forEach((icon) => icon.className = 'wrapper__header-item--icon');
	headerIcons.forEach((icon) => icon.classList.add("blue"));
	logoIndicator.className = 'wrapper__header-content--logo';
	logoIndicator.classList.add('blue');
	switcher.className = 'wrapper__switcher-block';
	switcher.classList.add("blue");
	introductionBtns.forEach((btn) => btn.className = 'wrapper__introduction-content--button');
	introductionBtns.forEach((btn) => btn.classList.add("blue"));	
	introductionAdaptiveBtns.forEach((btn) => btn.className = 'wrapper__introduction-adaptive--button');
	introductionAdaptiveBtns.forEach((btn) => btn.classList.add("blue"));	
	arrowIndicator.className = 'wrapper__arrow-down';
	arrowIndicator.classList.add('blue');	
	themeColor = 'blue';
	if(hover1 === false){
		document.querySelector('#block-image-1').className = "wrapper__about-image--block";
		advantageImage[0].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-1').classList.add("blueBorder"); 
		advantageImage[0].classList?.add('blueFill');
	};
	if(hover2 === false){
		document.querySelector('#block-image-2').className = "wrapper__about-image--block";
		advantageImage[1].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-2').classList.add("blueBorder"); 
		advantageImage[1].classList?.add('blueFill');
	};
	if(hover3 === false){
		document.querySelector('#block-image-3').className = "wrapper__about-image--block";
		advantageImage[2].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-3').classList.add("blueBorder"); 
		advantageImage[2].classList?.add('blueFill');
	};
	offerButton.className = 'wrapper__offer-block--button';
	offerButton.classList.add('blue');
});
greenIndicator.addEventListener('click', e => {
	headerIcons.forEach((icon) => icon.className = 'wrapper__header-item--icon');
	headerIcons.forEach((icon) => icon.classList.add("green"));
	logoIndicator.className = 'wrapper__header-content--logo';
	logoIndicator.classList.add('green');
	switcher.className = 'wrapper__switcher-block';
	switcher.classList.add("green");
	introductionBtns.forEach((btn) => btn.className = 'wrapper__introduction-content--button');
	introductionBtns.forEach((btn) => btn.classList.add("green"));
	introductionAdaptiveBtns.forEach((btn) => btn.className = 'wrapper__introduction-adaptive--button');
	introductionAdaptiveBtns.forEach((btn) => btn.classList.add("green"));	
	arrowIndicator.className = 'wrapper__arrow-down';
	arrowIndicator.classList.add('green');
	themeColor = 'green';
	if(hover1 === false){
		document.querySelector('#block-image-1').className = "wrapper__about-image--block";
		advantageImage[0].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-1').classList.add("greenBorder"); 
		advantageImage[0].classList?.add('greenFill');
	};
	if(hover2 === false){
		document.querySelector('#block-image-2').className = "wrapper__about-image--block";
		advantageImage[1].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-2').classList.add("greenBorder"); 
		advantageImage[1].classList?.add('greenFill');
	};
	if(hover3 === false){
		document.querySelector('#block-image-3').className = "wrapper__about-image--block";
		advantageImage[2].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-3').classList.add("greenBorder"); 
		advantageImage[2].classList?.add('greenFill');
	};
	offerButton.className = 'wrapper__offer-block--button';
	offerButton.classList.add('green');	
});
pinkIndicator.addEventListener('click', e => {
	headerIcons.forEach((icon) => icon.className = 'wrapper__header-item--icon');
	headerIcons.forEach((icon) => icon.classList.add("pink"));
	logoIndicator.className = 'wrapper__header-content--logo';
	logoIndicator.classList.add('pink');
	switcher.className = 'wrapper__switcher-block';
	switcher.classList.add("pink");
	introductionBtns.forEach((btn) => btn.className = 'wrapper__introduction-content--button');
	introductionBtns.forEach((btn) => btn.classList.add("pink"));
	introductionAdaptiveBtns.forEach((btn) => btn.className = 'wrapper__introduction-adaptive--button');
	introductionAdaptiveBtns.forEach((btn) => btn.classList.add("pink"));	
	arrowIndicator.className = 'wrapper__arrow-down';
	arrowIndicator.classList.add('pink');
	themeColor = 'pink';
	if(hover1 === false){
		document.querySelector('#block-image-1').className = "wrapper__about-image--block";
		advantageImage[0].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-1').classList.add("pinkBorder"); 
		advantageImage[0].classList?.add('pinkFill');
	};
	if(hover2 === false){
		document.querySelector('#block-image-2').className = "wrapper__about-image--block";
		advantageImage[1].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-2').classList.add("pinkBorder"); 
		advantageImage[1].classList?.add('pinkFill');
	};
	if(hover3 === false){
		document.querySelector('#block-image-3').className = "wrapper__about-image--block";
		advantageImage[2].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-3').classList.add("pinkBorder"); 
		advantageImage[2].classList?.add('pinkFill');
	};	
	offerButton.className = 'wrapper__offer-block--button';
	offerButton.classList.add('pink');	
});
orangeIndicator.addEventListener('click', e => {
	headerIcons.forEach((icon) => icon.className = 'wrapper__header-item--icon');	
	headerIcons.forEach((icon) => icon.classList.add("orange"));
	logoIndicator.className = 'wrapper__header-content--logo';
	logoIndicator.classList.add('orange');
	switcher.className = 'wrapper__switcher-block';	
	switcher.classList.add("orange");
	introductionBtns.forEach((btn) => btn.className = 'wrapper__introduction-content--button');
	introductionBtns.forEach((btn) => btn.classList.add("orange"));
	introductionAdaptiveBtns.forEach((btn) => btn.className = 'wrapper__introduction-adaptive--button');
	introductionAdaptiveBtns.forEach((btn) => btn.classList.add("orange"));	
	arrowIndicator.className = 'wrapper__arrow-down';
	arrowIndicator.classList.add('orange');
	themeColor = 'orange';
	if(hover1 === false){
		document.querySelector('#block-image-1').className = "wrapper__about-image--block";
		advantageImage[0].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-1').classList.add("orangeBorder"); 
		advantageImage[0].classList?.add('orangeFill');
	};
	if(hover2 === false){
		document.querySelector('#block-image-2').className = "wrapper__about-image--block";
		advantageImage[1].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-2').classList.add("orangeBorder"); 
		advantageImage[1].classList?.add('orangeFill');
	};
	if(hover3 === false){
		document.querySelector('#block-image-3').className = "wrapper__about-image--block";
		advantageImage[2].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-3').classList.add("orangeBorder"); 
		advantageImage[2].classList?.add('orangeFill');
	};
	offerButton.className = 'wrapper__offer-block--button';
	offerButton.classList.add('orange');	
});



// about event

document.querySelector('#advantage-1').addEventListener('mouseover', e => {
		hover1 = true;
		document.querySelector('#block-image-1').className = "wrapper__about-image--block";
		advantageImage[0].className = "wrapper__about-image--img";
		advantageImage[0].classList?.add('hoverFill'); 
		advantageImage[0].style.transform = "scale(1.35)"; 

		if(themeColor === "blue"){document.querySelector('#block-image-1').classList.add("hoverBlueBorder");}
		if(themeColor === "green"){document.querySelector('#block-image-1').classList.add("hoverGreenBorder");}
		if(themeColor === "pink"){document.querySelector('#block-image-1').classList.add("hoverPinkBorder");}
		if(themeColor === "orange"){document.querySelector('#block-image-1').classList.add("hoverOrangeBorder");}

		blueIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-1').className = "wrapper__about-image--block";
			document.querySelector('#block-image-1').classList.add("hoverBlueBorder");
		});
		greenIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-1').className = "wrapper__about-image--block";
			document.querySelector('#block-image-1').classList.add("hoverGreenBorder");
		});
		pinkIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-1').className = "wrapper__about-image--block";
			document.querySelector('#block-image-1').classList.add("hoverPinkBorder");
		});
		orangeIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-1').className = "wrapper__about-image--block";
			document.querySelector('#block-image-1').classList.add("hoverOrangeBorder");
		});
});

document.querySelector('#advantage-1').addEventListener('mouseout', e => {
	hover1 = true;
	document.querySelector('#block-image-1').className = "wrapper__about-image--block";
	advantageImage[0].className = "wrapper__about-image--img";	
	advantageImage[0].style.transform = "scale(1)"; 
	if(themeColor === "blue"){document.querySelector('#block-image-1').classList?.add("blueBorder"); advantageImage[0].classList?.add('blueFill'); }
	if(themeColor === "green"){document.querySelector('#block-image-1').classList.add("greenBorder"); advantageImage[0].classList?.add('greenFill');}
	if(themeColor === "pink"){document.querySelector('#block-image-1').classList.add("pinkBorder"); advantageImage[0].classList?.add('pinkFill');}
	if(themeColor === "orange"){document.querySelector('#block-image-1').classList.add("orangeBorder"); advantageImage[0].classList?.add('orangeFill');}	

	blueIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-1').className = "wrapper__about-image--block";
		advantageImage[0].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-1').classList.add("blueBorder"); 
		advantageImage[0].classList?.add('blueFill');
	});
	greenIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-1').className = "wrapper__about-image--block";
		advantageImage[0].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-1').classList.add("greenBorder"); 
		advantageImage[0].classList?.add('greenFill');
	});
	pinkIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-1').className = "wrapper__about-image--block";
		advantageImage[0].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-1').classList.add("pinkBorder"); 
		advantageImage[0].classList?.add('pinkFill');
	});
	orangeIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-1').className = "wrapper__about-image--block";
		advantageImage[0].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-1').classList.add("orangeBorder"); 
		advantageImage[0].classList?.add('orangeFill');
	});
	
});

document.querySelector('#advantage-2').addEventListener('mouseover', e => {
		hover2 = true;
		document.querySelector('#block-image-2').className = "wrapper__about-image--block";
		advantageImage[1].className = "wrapper__about-image--img";
		advantageImage[1].classList?.add('hoverFill'); 
		advantageImage[1].style.transform = "scale(1.35)"; 

		if(themeColor === "blue"){document.querySelector('#block-image-2').classList.add("hoverBlueBorder");}
		if(themeColor === "green"){document.querySelector('#block-image-2').classList.add("hoverGreenBorder");}
		if(themeColor === "pink"){document.querySelector('#block-image-2').classList.add("hoverPinkBorder");}
		if(themeColor === "orange"){document.querySelector('#block-image-2').classList.add("hoverOrangeBorder");}	

		blueIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-2').className = "wrapper__about-image--block";
			document.querySelector('#block-image-2').classList.add("hoverBlueBorder");
		});
		greenIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-2').className = "wrapper__about-image--block";
			document.querySelector('#block-image-2').classList.add("hoverGreenBorder");
		});
		pinkIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-2').className = "wrapper__about-image--block";
			document.querySelector('#block-image-2').classList.add("hoverPinkBorder");
		});
		orangeIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-2').className = "wrapper__about-image--block";
			document.querySelector('#block-image-2').classList.add("hoverOrangeBorder");
		});
});

document.querySelector('#advantage-2').addEventListener('mouseout', e => {
	hover2 = true;
	document.querySelector('#block-image-2').className = "wrapper__about-image--block";	
	advantageImage[1].className = "wrapper__about-image--img";	
	advantageImage[1].style.transform = "scale(1)"; 
	if(themeColor === "blue"){document.querySelector('#block-image-2').classList?.add("blueBorder"); advantageImage[1].classList?.add('blueFill'); }
	if(themeColor === "green"){document.querySelector('#block-image-2').classList.add("greenBorder"); advantageImage[1].classList?.add('greenFill');}
	if(themeColor === "pink"){document.querySelector('#block-image-2').classList.add("pinkBorder"); advantageImage[1].classList?.add('pinkFill');}
	if(themeColor === "orange"){document.querySelector('#block-image-2').classList.add("orangeBorder"); advantageImage[1].classList?.add('orangeFill');}	

	blueIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-2').className = "wrapper__about-image--block";
		advantageImage[1].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-2').classList.add("blueBorder"); 
		advantageImage[1].classList?.add('blueFill');
	});
	greenIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-2').className = "wrapper__about-image--block";
		advantageImage[1].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-2').classList.add("greenBorder"); 
		advantageImage[1].classList?.add('greenFill');
	});
	pinkIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-2').className = "wrapper__about-image--block";
		advantageImage[1].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-2').classList.add("pinkBorder"); 
		advantageImage[1].classList?.add('pinkFill');
	});
	orangeIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-2').className = "wrapper__about-image--block";
		advantageImage[1].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-2').classList.add("orangeBorder"); 
		advantageImage[1].classList?.add('orangeFill');
	});
	
});

document.querySelector('#advantage-3').addEventListener('mouseover', e => {
	    hover3 = true;
		document.querySelector('#block-image-3').className = "wrapper__about-image--block";
		advantageImage[2].className = "wrapper__about-image--img";
		advantageImage[2].classList?.add('hoverFill'); 
		advantageImage[2].style.transform = "scale(1.35)"; 

		if(themeColor === "blue"){document.querySelector('#block-image-3').classList.add("hoverBlueBorder");}
		if(themeColor === "green"){document.querySelector('#block-image-3').classList.add("hoverGreenBorder");}
		if(themeColor === "pink"){document.querySelector('#block-image-3').classList.add("hoverPinkBorder");}
		if(themeColor === "orange"){document.querySelector('#block-image-3').classList.add("hoverOrangeBorder");}	

		blueIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-3').className = "wrapper__about-image--block";
			document.querySelector('#block-image-3').classList.add("hoverBlueBorder");
		});
		greenIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-3').className = "wrapper__about-image--block";
			document.querySelector('#block-image-3').classList.add("hoverGreenBorder");
		});
		pinkIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-3').className = "wrapper__about-image--block";
			document.querySelector('#block-image-3').classList.add("hoverPinkBorder");
		});
		orangeIndicator.addEventListener('click', e => {
			document.querySelector('#block-image-3').className = "wrapper__about-image--block";
			document.querySelector('#block-image-3').classList.add("hoverOrangeBorder");
		});
});

document.querySelector('#advantage-3').addEventListener('mouseout', e => {
	hover3 = true;
	document.querySelector('#block-image-3').className = "wrapper__about-image--block";
	advantageImage[2].className = "wrapper__about-image--img";	
	advantageImage[2].style.transform = "scale(1)"; 
	if(themeColor === "blue"){document.querySelector('#block-image-3').classList?.add("blueBorder"); advantageImage[2].classList?.add('blueFill'); }
	if(themeColor === "green"){document.querySelector('#block-image-3').classList.add("greenBorder"); advantageImage[2].classList?.add('greenFill');}
	if(themeColor === "pink"){document.querySelector('#block-image-3').classList.add("pinkBorder"); advantageImage[2].classList?.add('pinkFill');}
	if(themeColor === "orange"){document.querySelector('#block-image-3').classList.add("orangeBorder"); advantageImage[2].classList?.add('orangeFill');}	

	blueIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-3').className = "wrapper__about-image--block";
		advantageImage[2].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-3').classList.add("blueBorder"); 
		advantageImage[2].classList?.add('blueFill');
	});
	greenIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-3').className = "wrapper__about-image--block";
		advantageImage[2].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-3').classList.add("greenBorder"); 
		advantageImage[2].classList?.add('greenFill');
	});
	pinkIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-3').className = "wrapper__about-image--block";
		advantageImage[2].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-3').classList.add("pinkBorder"); 
		advantageImage[2].classList?.add('pinkFill');
	});
	orangeIndicator.addEventListener('click', e => {
		document.querySelector('#block-image-3').className = "wrapper__about-image--block";
		advantageImage[2].className = "wrapper__about-image--img";	
		document.querySelector('#block-image-3').classList.add("orangeBorder"); 
		advantageImage[2].classList?.add('orangeFill');
	});
	
});



// offer section functions

async function getImages(){
	try{
		const response = await fetch('./content/images.json');
		const data = await response.json();	
		return data;	
	}
	catch(e){
		throw new Error(e)
	}
}

async function setImages(){
	const imagePathes = await getImages();
	images.style.backgroundImage = imagePathes[0]?.imageWebp ? `url(${imagePathes[0]?.imageWebp})` : `url(${imagePathes[0]?.image})`;
	// console.log(document.querySelector('.wrapper__offer').getBoundingClientRect());
	// console.log(window.screen.width);
}

window.onload = setImages();


let a = 0;

async function setAnimationSlider(){
	const data = await getImages();
	setInterval(() => {		
		setTimeout(() => {
			images.style.backgroundImage  = `url(${data[a]?.image})`;
			if(a >= 3){a = 0;}
			else{a = a + 1;}
		}, 2000);
	}, 6000);
};

setAnimationSlider();

// animated elements 
if(animItems?.length > 0){
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll(params){
		for(let i = 0; i < animItems.length; i++){
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset - animItemHeight)){
				animItem.classList.add('_active');
			}else {
				if(!animItem.classList.contains('anim_no_hide')){
				animItem.classList.remove('_active');}
			}
		}
	}
	// function for defining position due to Top

	function offset(el){
		const rect = el.getBoundingClientRect();
		let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	setTimeout(() => {
		animOnScroll();
	}, 300)
	
}


