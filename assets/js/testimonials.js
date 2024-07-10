import { windowHeight, blueIndicator, greenIndicator, pinkIndicator, orangeIndicator, themeColor,  modalButton, modalWindow} from './script.js';

// testimonials

const testimonialContainer = document.querySelector('.wrapper__testimonials-block--container');
const testimonialLeftButton = document.querySelector('#left-testimonial');
const testimonialRightButton = document.querySelector('#right-testimonial');
const sendReviewButton = document.querySelector('#send-review');
const closeReviewModalWindowButton = document.querySelector('#close-review');

const reviewForm = document.forms.review;
const reviewText =  reviewForm.reviewText;
const reviewAuthor =  reviewForm.reviewAuthor;
const reviewCountry =  reviewForm.reviewCountry;
const reviewMessage = document.querySelector('.wrapper__testimonials-form--message');

const testimonialContainerPosition = testimonialContainer.getBoundingClientRect().top + window.pageYOffset;

let clickTestimonialLeft = false;
let clickTestimonialRight = false;
let modal = false;

let testimonialArray = [];
let storageTestimonials = localStorage.getItem('testimonials');

// testimonials section functions

async function getTestimonial(){
	try{
		const response = await fetch('./content/testimonials.json');
		const data = await response.json();
		return data;
	}
	catch(e){ 
		throw new Error(e)
	}
};

async function setTestimonials(){

	testimonialArray = await getTestimonial();

	if(!storageTestimonials?.length > 0){localStorage.setItem('testimonials', JSON.stringify(testimonialArray))};	
	const arrayTestimonials = JSON.parse(storageTestimonials);

	if(window.pageYOffset > testimonialContainerPosition - windowHeight){
		if(arrayTestimonials){
			testimonialContainer.innerHTML = '';
			document.querySelector('.wrapper__testimonials').style.background = 'fff';
			arrayTestimonials?.forEach((testimonial) => {
				const testimonialCard = document.createElement('div');
				testimonialCard.classList.add = 'wrapper__testimonials-container--card';
				const testimonialCardBlock = document.createElement('div');
				testimonialCardBlock.classList.add('wrapper__testimonials-card--block');
				const testimonialText = document.createElement('p');
				testimonialText.classList.add('wrapper__testimonials-card--text');
				testimonialText.textContent = testimonial?.text;
				testimonialCardBlock.append(testimonialText);
				const testimonialAuthor = document.createElement('p');
				testimonialAuthor.classList.add('wrapper__testimonials-card-author');
				testimonialAuthor.textContent = testimonial.author;
				const testimonialCountry = document.createElement('p');
				testimonialCountry.classList.add('wrapper__testimonials-card-country');
				testimonialCountry.textContent = testimonial.country;
				testimonialCard.append(testimonialCardBlock, testimonialAuthor, testimonialCountry);
				testimonialContainer.append(testimonialCard);
		
				// event on buttons slider moving
		
				const firstTestimonialCardWidth = testimonialCard.offsetWidth + 17;
				const secondTestimonialCardWidth = testimonialCard.offsetWidth + 15;
		
				let isDraggingTestimonials = false, startTestimonialsX, startTestimonialsScrollLeft;	
		
				const dragTestimonialsStart = (e) => {
					isDraggingTestimonials = true;
					testimonialContainer.classList.add('dragging');
					startTestimonialsX = e.pageX;
					startTestimonialsScrollLeft = testimonialContainer.scrollLeft;
				};
		
				const draggingTestimonials = (e) => {
					if(!isDraggingTestimonials) return;
					testimonialContainer.scrollLeft = startTestimonialsScrollLeft - (e.pageX - startTestimonialsX);
				};
		
				const dragStopTestimonials = () => {
					isDraggingTestimonials = false;
					testimonialContainer.classList.remove('dragging');
				};
		
				testimonialContainer.addEventListener('mousedown', dragTestimonialsStart);
				testimonialContainer.addEventListener('mousemove', draggingTestimonials); 
				document.addEventListener('mouseup', dragStopTestimonials);
		
				testimonialLeftButton.addEventListener('click', (e) => {
					testimonialContainer.scrollLeft += -secondTestimonialCardWidth;	
		
					clickTestimonialRight = false;
					testimonialRightButton.className = 'wrapper__testimonials-indicators--item';
					clickTestimonialLeft = true;
					testimonialLeftButton.className = 'wrapper__testimonials-indicators--item';
					if(themeColor === 'blue') testimonialLeftButton.classList.add('hoverBlueBackground');						
					if(themeColor === 'green') testimonialLeftButton.classList.add('hoverGreenBackground');						
					if(themeColor === 'pink') testimonialLeftButton.classList.add('hoverPinkBackground');						
					if(themeColor === 'orange') testimonialLeftButton.classList.add('hoverOrangeBackground');							
				});
		
				testimonialRightButton.addEventListener('click', (e) => {					
					testimonialContainer.scrollLeft += firstTestimonialCardWidth;		
					
					clickTestimonialLeft = false;
					testimonialLeftButton.className = 'wrapper__testimonials-indicators--item';
					clickTestimonialRight = true;			
					testimonialRightButton.className = 'wrapper__testimonials-indicators--item';
					if(themeColor === 'blue') testimonialRightButton.classList.add('hoverBlueBackground');						
					if(themeColor === 'green') testimonialRightButton.classList.add('hoverGreenBackground');						
					if(themeColor === 'pink') testimonialRightButton.classList.add('hoverPinkBackground');						
					if(themeColor === 'orange') testimonialRightButton.classList.add('hoverOrangeBackground');
				});
		
			});
		}else {document.querySelector('.wrapper__testimonials').style.background = 'url(../icons/loading.gif ) center top 150px/ 40px no-repeat;';}
	}else {document.querySelector('.wrapper__testimonials').style.background = 'url(../icons/loading.gif ) center top 150px/ 40px no-repeat;';}	
};

window.addEventListener("scroll", setTestimonials);

function setModalMode(e){
	e.preventDefault()	
	modal = true;
	modalWindow.className = 'wrapper__testimonials-modal--block';
	if(themeColor === 'blue') modalWindow.classList.add('blue');
	if(themeColor === 'green') modalWindow.classList.add('green');
	if(themeColor === 'pink') modalWindow.classList.add('pink');
	if(themeColor === 'orange') modalWindow.classList.add('orange');
	modalWindow.classList.add('visual');	
};

modalButton.addEventListener('click', setModalMode);

closeReviewModalWindowButton.addEventListener('click', (e) => {
	e.preventDefault();
	modal = false;
	modalWindow.className = 'wrapper__testimonials-modal--block';
	modalWindow.classList.add('hide');	
});

 function addTestimonial(){
	let storage = JSON.parse(storageTestimonials);

	const reviewObject = {
		id: storage?.length + 1,
		author: reviewAuthor?.value,
		country: reviewCountry?.value,
		text: reviewText?.value	
	};	

	if(reviewAuthor?.value?.length < 1  || reviewCountry?.value?.length < 1 || reviewText?.value?.length < 1){
		reviewMessage.textContent = '*Fill empty fields';
		reviewMessage.className = 'wrapper__testimonials-form--message';		
		setTimeout(() => {
			reviewMessage.classList.add('hide');
		}, 3000);
	}else{
		if(reviewText?.value?.length < 10){
			reviewMessage.textContent = '*Text review length can not be less than 10 symbols';
			reviewMessage.className = 'wrapper__testimonials-form--message';
			setTimeout(() => {
				reviewMessage.classList.add('hide');
			}, 3000);
		}else{
			storage.push(reviewObject);
			localStorage.setItem('testimonials', JSON.stringify(storage));
			modal = false;
			modalWindow.className = 'wrapper__testimonials-modal--block';
			modalWindow.classList.add('hide');	
		}
	}

	
}

 sendReviewButton.addEventListener('click', (e) => {
	e.preventDefault();
	addTestimonial()
});


blueIndicator.addEventListener('click', e => {
	if(clickTestimonialLeft === true){
		testimonialLeftButton.className = 'wrapper__testimonials-indicators--item';
		testimonialLeftButton.classList.add('hoverBlueBackground');
	};
	if(clickTestimonialRight === true){
		testimonialRightButton.className = 'wrapper__testimonials-indicators--item';
		testimonialRightButton.classList.add('hoverBlueBackground');
	};
	modalButton.className = 'wrapper__testimonials-modal--button';
	modalButton.classList.add('blue');

	if(modal === true){	
		modalWindow.className = 'wrapper__testimonials-modal--block';
		modalWindow.classList.add('blue');
		modalWindow.classList.add('visual');	
	};		
});

greenIndicator.addEventListener('click', e => {
	if(clickTestimonialLeft === true){
		testimonialLeftButton.className = 'wrapper__testimonials-indicators--item';
		testimonialLeftButton.classList.add('hoverGreenBackground');
	};
	if(clickTestimonialRight === true){
		testimonialRightButton.className = 'wrapper__testimonials-indicators--item';
		testimonialRightButton.classList.add('hoverGreenBackground');
	};	
	modalButton.className = 'wrapper__testimonials-modal--button';
	modalButton.classList.add('green');	
	if(modal === true){	
		modalWindow.className = 'wrapper__testimonials-modal--block';
		modalWindow.classList.add('green');
		modalWindow.classList.add('visual');	
	};	
});

pinkIndicator.addEventListener('click', e => {
	if(clickTestimonialLeft === true){
		testimonialLeftButton.className = 'wrapper__testimonials-indicators--item';
		testimonialLeftButton.classList.add('hoverPinkBackground');
	};
	if(clickTestimonialRight === true){
		testimonialRightButton.className = 'wrapper__testimonials-indicators--item';
		testimonialRightButton.classList.add('hoverPinkBackground');
	};	
	modalButton.className = 'wrapper__testimonials-modal--button';
	modalButton.classList.add('pink');
	if(modal === true){	
		modalWindow.className = 'wrapper__testimonials-modal--block';
		modalWindow.classList.add('pink');
		modalWindow.classList.add('visual');	
	}
});

orangeIndicator.addEventListener('click', e => {
	if(clickTestimonialLeft === true){
		testimonialLeftButton.className = 'wrapper__testimonials-indicators--item';
		testimonialLeftButton.classList.add('hoverOrangeBackground');
	};
	if(clickTestimonialRight === true){
		testimonialRightButton.className = 'wrapper__testimonials-indicators--item';
		testimonialRightButton.classList.add('hoverOrangeBackground');
	};	
	modalButton.className = 'wrapper__testimonials-modal--button';
	modalButton.classList.add('orange');
	if(modal === true){	
		modalWindow.className = 'wrapper__testimonials-modal--block';
		modalWindow.classList.add('orange');
		modalWindow.classList.add('visual');	
	};	
});

