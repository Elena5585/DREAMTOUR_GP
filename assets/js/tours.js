import { windowHeight, blueIndicator, greenIndicator, pinkIndicator, orangeIndicator, themeColor, tourMovingLeftButton, tourMovingRightButton,  orderTour } from './script.js';


let scrollIndicator = 0;
let clickLeft = false;
let clickRight = false;

let click = 1;

 // tours

async function getTours(){
	try{
		const response = await fetch('./content/tours.json');
		const data = response.json();
		return data;

	}catch(e){
		throw new Error(e);
	}
}

async function setTours(){

	const tours = await getTours();

	const container = document.querySelector('.wrapper__tours-block--container');	
	const containerPosition = container.getBoundingClientRect().top + window.pageYOffset;

	if(scrollIndicator === 0){
		if(window.pageYOffset > containerPosition - windowHeight){
			if(tours){	
				// container.innerHTML = '';		
				scrollIndicator++;
				document.querySelector('.wrapper__tours').style.background = 'fff';
				tours?.forEach((tour, index) => {		
					const tourCard = document.createElement('div');
					tourCard.classList.add('wrapper__container-card');
					const cardImg = document.createElement('img');
					cardImg.classList.add('wrapper__card-img');
					cardImg.src = tour?.webpImg ? tour?.webpImg : tour?.img;
					cardImg.style.draggable = "false";
					const cardInfoBlock = document.createElement('div');
					cardInfoBlock.classList.add('wrapper__container-block');
					cardInfoBlock.style.draggable = "false";
					const cardTitle = document.createElement('a');
					cardTitle.href = "#current-tour";		
					cardTitle.classList.add('wrapper__container-title');
					cardTitle.textContent = tour?.title;	
					if(themeColor === 'blue') cardTitle.classList.add("blueColor");
					if(themeColor === 'green') cardTitle.classList.add("greenColor");
					if(themeColor === 'pink') cardTitle.classList.add("pinkColor");
					if(themeColor === 'orange') cardTitle.classList.add("orangeColor");
			
				
					blueIndicator.addEventListener('click', e => {	
						e.preventDefault();			
						cardTitle.className = 'wrapper__container-title';
						cardTitle.classList.add('blueColor');
					});		
					greenIndicator.addEventListener('click', e => {
						e.preventDefault();
						cardTitle.className = 'wrapper__container-title';
						cardTitle.classList.add('greenColor');
					});
					pinkIndicator.addEventListener('click', e => {
						e.preventDefault();
						cardTitle.className = 'wrapper__container-title';
						cardTitle.classList.add('pinkColor');
					});
					orangeIndicator.addEventListener('click', e => {
						e.preventDefault();
						cardTitle.className = 'wrapper__container-title';
						cardTitle.classList.add('orangeColor');
					});	
			
					// event on click - create tour
					cardTitle.addEventListener('click', () => {	
						click = 1;		
						const tourSection = document.querySelector('.wrapper__tour');
						tourSection.innerHTML = '';		
						const tourContent = document.createElement('div');
						tourContent.classList.add('wrapper__tour-content');
						const imageBlock = document.createElement('div');
						imageBlock.classList.add('wrapper__tour-image--block');
						const imageTour = document.createElement('img');					
						imageTour.classList.add('wrapper__tour-content-image');					
						imageTour.src = tour.webpImg ? tour.webpImg : tour.img;
						const sliderButton = document.createElement('button');
						sliderButton.classList.add('wrapper__tour-slider--btn');						
						sliderButton.textContent = '❯';			
			
						//Slider image button event	
			
						sliderButton.addEventListener('click', (e) => {
							e.preventDefault();
							imageTour.classList.add('show-image');
							
							if((tour?.minImages?.length > 0) || tour?.images?.length > 0){						
								if(window.screen.width <= 768){																							
									imageTour.src = tour?.minImages[click]?.sourceWebp ? tour?.minImages[click]?.sourceWebp : tour?.minImages[click]?.source;
									imageTour.addEventListener('load', () => {imageTour.className = 'wrapper__tour-content-image';});																
									if(click < ( tour?.minImages?.length - 1 )){ click++; }
									else{ click = 0;}								
								}else{								
									imageTour.src = tour?.images[click]?.sourceWebp ? tour?.images[click]?.sourceWebp : tour?.images[click]?.source;
									imageTour.addEventListener('load', () => {imageTour.className = 'wrapper__tour-content-image';});	
									if(click < ( tour?.images?.length - 1 )){ click++; }
									else{ click = 0; }								
								}
							}else {console.log('error in load tour images');}				
						});
			
						imageBlock.append(imageTour, sliderButton);
						const tourContentBlock = document.createElement('div');
						tourContentBlock.classList.add('wrapper__tour-content-block');
						const tourBlockTitle = document.createElement('h3');
						tourBlockTitle.classList.add('wrapper__tour-content--title');
						tourBlockTitle.textContent = tour.title;
						const tourBlockPlace = document.createElement('p');
						tourBlockPlace.classList.add('wrapper__tour-content--place');
						tourBlockPlace.textContent = tour.place;
						const tourBlockItenarary = document.createElement('div');
						tourBlockItenarary.classList.add('wrapper__tour-content--itenarary');
						tour?.itenarary?.forEach((item, index) => {
							const tourItenararyItem = document.createElement('div');
							tourItenararyItem.classList.add('wrapper__tour-itenarary--item');
							const tourItemDay = document.createElement('div');
							tourItemDay.classList.add('wrapper__tour-item--day');
							tourItemDay.textContent = `Day ${index + 1}`;
							const tourItemItem = document.createElement('div');
							tourItemItem.classList.add('wrapper__tour-item--item');
							tourItemItem.textContent = item.action;
							tourItenararyItem.append(tourItemDay, tourItemItem);
							tourBlockItenarary.append(tourItenararyItem);
						});
						const tourPriceBlock = document.createElement('div');
						tourPriceBlock.classList.add('wrapper__tour-content--price');
			
						if(themeColor === 'blue'){	
							sliderButton.className = 'wrapper__tour-slider--btn';
							sliderButton.classList.add('blue');
							tourPriceBlock.className = 'wrapper__tour-content--price';
							tourPriceBlock.classList.add('blue');
						};
						
						blueIndicator.addEventListener('click', e => {	
							sliderButton.className = 'wrapper__tour-slider--btn';
							sliderButton.classList.add('blue');
							tourPriceBlock.className = 'wrapper__tour-content--price';
							tourPriceBlock.classList.add('blue');
						});			
						
						if(themeColor === 'green') {
							sliderButton.className = 'wrapper__tour-slider--btn';
							sliderButton.classList.add('green');
							tourPriceBlock.className = 'wrapper__tour-content--price';
							tourPriceBlock.classList.add('green');
						};
			
						greenIndicator.addEventListener('click', e => {
							sliderButton.className = 'wrapper__tour-slider--btn';
							sliderButton.classList.add('green');
							tourPriceBlock.className = 'wrapper__tour-content--price';
							tourPriceBlock.classList.add('green');
						});
			
						if(themeColor === 'pink') {
							sliderButton.className = 'wrapper__tour-slider--btn';
							sliderButton.classList.add('pink');
							tourPriceBlock.className = 'wrapper__tour-content--price';
							tourPriceBlock.classList.add('pink');
						};			
						
						pinkIndicator.addEventListener('click', e => {
							sliderButton.className = 'wrapper__tour-slider--btn';
							sliderButton.classList.add('pink');
							tourPriceBlock.className = 'wrapper__tour-content--price';
							tourPriceBlock.classList.add('pink');
						});
			
						if(themeColor === 'orange'){
							sliderButton.className = 'wrapper__tour-slider--btn';
							sliderButton.classList.add('orange');
							tourPriceBlock.className = 'wrapper__tour-content--price';
							tourPriceBlock.classList.add('orange');
						};	
			
						orangeIndicator.addEventListener('click', e => {
							sliderButton.className = 'wrapper__tour-slider--btn';
							sliderButton.classList.add('orange');
							tourPriceBlock.className = 'wrapper__tour-content--price';
							tourPriceBlock.classList.add('orange');
						});	
			
						const tourPrice = document.createElement('p');
						tourPrice.classList.add('wrapper__tour-price--price');
						tourPrice.textContent = `$ ${tour.discount_price}`;
						tourPrice.setAttribute("translate", "no");
						const tourPeriod = document.createElement('p');
						tourPeriod.classList.add('wrapper__tour-price--period');
						tourPeriod.textContent = `${tour.period}`;
						tourPriceBlock.append(tourPrice, tourPeriod);
						tourContentBlock.append(tourBlockTitle, tourBlockPlace, tourBlockItenarary);
						tourContent.append(imageBlock, tourContentBlock, tourPriceBlock );
						tourSection.append(tourContent);
						tourSection.style.display = 'flex';	
							
					});
			
					const cardPlace = document.createElement('p');
					cardPlace.classList.add('wrapper__container-place');
					cardPlace.textContent = tour?.place;
					const cardPriceBlock = document.createElement('div');
					cardPriceBlock.classList.add('wrapper__container-price--block');
					const cardDiscountPrice = document.createElement('span');
					cardDiscountPrice.classList.add('wrapper__container-discount--price');
					cardDiscountPrice.setAttribute("translate", "no");
					if(tour?.discount_price){cardDiscountPrice.textContent = `$${tour?.discount_price}`}
					const cardRegularPrice = document.createElement('span');
					cardRegularPrice.classList.add('wrapper__container-regular--price');
					cardRegularPrice.textContent = `$${tour?.regular_price}`;
					cardRegularPrice.setAttribute("translate", 'no');
					cardPriceBlock.append(cardDiscountPrice, cardRegularPrice);
					cardInfoBlock.append(cardTitle, cardPlace, cardPriceBlock);
					tourCard.append(cardImg, cardInfoBlock);
					container.append(tourCard);	
					
					// event on tours moving buttons	
					let firstCardWidth, secondCardWidth;			
					if(window.screen.width > 1300){firstCardWidth = tourCard.offsetWidth + 17; secondCardWidth = tourCard.offsetWidth + 15;}
					if(window.screen.width <= 1300){firstCardWidth = tourCard.offsetWidth + 15; secondCardWidth = tourCard.offsetWidth + 15;}
					
					
			
					let isDragging = false, startX, startScrollLeft;		
			
					const dragStart = (e) => {
						isDragging = true;
						container.classList.add('dragging');
						startX = e.pageX;
						startScrollLeft = container.scrollLeft;
					};
			
					const dragging = (e) => {
						if(!isDragging) return;
						container.scrollLeft = startScrollLeft - (e.pageX - startX);
					};
			
					const dragStop = () => {
						isDragging = false;
						container.classList.remove('dragging');
					};
			
					
					container.addEventListener('mousedown', dragStart);
					container.addEventListener('mousemove', dragging); 
					document.addEventListener('mouseup', dragStop);
					
			
					tourMovingLeftButton.addEventListener('click', (e) => {
						e.preventDefault();
						container.scrollLeft += -secondCardWidth;	
			
						clickRight = false;
						tourMovingRightButton.className = 'wrapper__tours-indicators--item';
						clickLeft = true;
						tourMovingLeftButton.className = 'wrapper__tours-indicators--item';
						if(themeColor === 'blue') tourMovingLeftButton.classList.add('hoverBlueBackground');						
						if(themeColor === 'green') tourMovingLeftButton.classList.add('hoverGreenBackground');						
						if(themeColor === 'pink') tourMovingLeftButton.classList.add('hoverPinkBackground');						
						if(themeColor === 'orange') tourMovingLeftButton.classList.add('hoverOrangeBackground');		
										
					});
			
					tourMovingRightButton.addEventListener('click', (e) => {
						e.preventDefault();					
						container.scrollLeft += firstCardWidth;		
						
						clickLeft = false;
						tourMovingLeftButton.className = 'wrapper__tours-indicators--item';
						clickRight = true;			
						tourMovingRightButton.className = 'wrapper__tours-indicators--item';
						if(themeColor === 'blue') tourMovingRightButton.classList.add('hoverBlueBackground');						
						if(themeColor === 'green') tourMovingRightButton.classList.add('hoverGreenBackground');						
						if(themeColor === 'pink') tourMovingRightButton.classList.add('hoverPinkBackground');						
						if(themeColor === 'orange') tourMovingRightButton.classList.add('hoverOrangeBackground');
					});
					
					const tourOption = document.createElement('option');
					tourOption.value = tour?.title;
					tourOption.textContent = tour?.title;
					orderTour.append(tourOption);
			
				});			
			}
		}
	}

};

window.addEventListener('scroll', setTours)

blueIndicator.addEventListener('click', e => {
	if(clickLeft === true){
		tourMovingLeftButton.className = 'wrapper__tours-indicators--item';
		tourMovingLeftButton.classList.add('hoverBlueBackground');
	};
	if(clickRight === true){
		tourMovingRightButton.className = 'wrapper__tours-indicators--item';
		tourMovingRightButton.classList.add('hoverBlueBackground');
	};	
});
greenIndicator.addEventListener('click', e => {	
	if(clickLeft === true){
		tourMovingLeftButton.className = 'wrapper__tours-indicators--item';
		tourMovingLeftButton.classList.add('hoverGreenBackground');
	};
	if(clickRight === true){
		tourMovingRightButton.className = 'wrapper__tours-indicators--item';
		tourMovingRightButton.classList.add('hoverGreenBackground');
	};	
});
pinkIndicator.addEventListener('click', e => {
	if(clickLeft === true){
		tourMovingLeftButton.className = 'wrapper__tours-indicators--item';
		tourMovingLeftButton.classList.add('hoverPinkBackground');
	};
	if(clickRight === true){
		tourMovingRightButton.className = 'wrapper__tours-indicators--item';
		tourMovingRightButton.classList.add('hoverPinkBackground');
	};	
});
orangeIndicator.addEventListener('click', e => {	
	if(clickLeft === true){
		tourMovingLeftButton.className = 'wrapper__tours-indicators--item';
		tourMovingLeftButton.classList.add('hoverOrangeBackground');
	};
	if(clickRight === true){
		tourMovingRightButton.className = 'wrapper__tours-indicators--item';
		tourMovingRightButton.classList.add('hoverOrangeBackground');
	}

});