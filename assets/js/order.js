import { blueIndicator, greenIndicator, pinkIndicator, orangeIndicator, themeColor} from './script.js';

const orderImages = document.querySelectorAll('.wrapper__order-block--img');
const orderImagesBlock = document.querySelectorAll('.wrapper__order-image--block');
const orderForm = document.forms.order;
const orderName =orderForm.orderName;
const orderSurname = orderForm.orderSurname;
const orderCountry = orderForm.orderCountry;
const orderPhone = orderForm.orderPhone;
const orderEmail = orderForm.orderEmail;
const orderPeople = orderForm.orderPeople;
const orderTour = orderForm.orderTour;
const orderMessage = orderForm.orderMessage;
const orderConfirmBtn = document.querySelector('.wrapper__order-form-btn');

let orderHover1 = false;
let orderHover2 = false;
let orderHover3 = false;

let ordersArray = [];
let storageOrders = localStorage.getItem('orders');

blueIndicator.addEventListener('click', e => {		
	if(orderHover1 === false){
		document.querySelector('#order-image-1').className = "wrapper__order-image--block";
		orderImages[0].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-1').classList.add("blueBorderTransparent"); 
		orderImages[0].classList?.add('blueFill');
	};
	if(orderHover2 === false){
		document.querySelector('#order-image-2').className = "wrapper__order-image--block";
		orderImages[1].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-2').classList.add("blueBorderTransparent"); 
		orderImages[1].classList?.add('blueFill');
	};
	if(orderHover3 === false){
		document.querySelector('#order-image-3').className = "wrapper__order-image--block";
		orderImages[2].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-3').classList.add("blueBorderTransparent"); 
		orderImages[2].classList?.add('blueFill');
	};
	orderConfirmBtn.className = 'wrapper__order-form-btn';
	orderConfirmBtn.classList.add('blue');	
	offerButton.className = 'wrapper__offer-block--button';
	offerButton.classList.add('blue');
});

greenIndicator.addEventListener('click', e => {	
	if(orderHover1 === false){
		document.querySelector('#order-image-1').className = "wrapper__order-image--block";
		orderImages[0].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-1').classList.add("greenBorderTransparent"); 
		orderImages[0].classList?.add('greenFill');
	};
	if(orderHover2 === false){
		document.querySelector('#order-image-2').className = "wrapper__order-image--block";
		orderImages[1].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-2').classList.add("greenBorderTransparent"); 
		orderImages[1].classList?.add('greenFill');
	};
	if(orderHover3 === false){
		document.querySelector('#order-image-3').className = "wrapper__order-image--block";
		orderImages[2].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-3').classList.add("greenBorderTransparent"); 
		orderImages[2].classList?.add('greenFill');
	};
	orderConfirmBtn.className = 'wrapper__order-form-btn';
	orderConfirmBtn.classList.add('green');
});

pinkIndicator.addEventListener('click', e => {	
	if(orderHover1 === false){
		document.querySelector('#order-image-1').className = "wrapper__order-image--block";
		orderImages[0].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-1').classList.add("pinkBorderTransparent"); 
		orderImages[0].classList?.add('pinkFill');
	};
	if(orderHover2 === false){
		document.querySelector('#order-image-2').className = "wrapper__order-image--block";
		orderImages[1].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-2').classList.add("pinkBorderTransparent"); 
		orderImages[1].classList?.add('pinkFill');
	};
	if(orderHover3 === false){
		document.querySelector('#order-image-3').className = "wrapper__order-image--block";
		orderImages[2].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-3').classList.add("pinkBorderTransparent"); 
		orderImages[2].classList?.add('pinkFill');
	};
	orderConfirmBtn.className = 'wrapper__order-form-btn';
	orderConfirmBtn.classList.add('pink');
});

orangeIndicator.addEventListener('click', e => {
	if(orderHover1 === false){
		document.querySelector('#order-image-1').className = "wrapper__order-image--block";
		orderImages[0].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-1').classList.add("orangeBorderTransparent"); 
		orderImages[0].classList?.add('orangeFill');
	};
	if(orderHover2 === false){
		document.querySelector('#order-image-2').className = "wrapper__order-image--block";
		orderImages[1].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-2').classList.add("orangeBorderTransparent"); 
		orderImages[1].classList?.add('orangeFill');
	};
	if(orderHover3 === false){
		document.querySelector('#order-image-3').className = "wrapper__order-image--block";
		orderImages[2].className = "wrapper__order-block--img";	
		document.querySelector('#order-image-3').classList.add("orangeBorderTransparent"); 
		orderImages[2].classList?.add('orangeFill');
	};
	orderConfirmBtn.className = 'wrapper__order-form-btn';
	orderConfirmBtn.classList.add('orange');
});

// order section

document.querySelector('#item-1').addEventListener('mouseover', (e) => {
	orderHover1 = true;
	document.querySelector('#order-image-1').className = "wrapper__order-image--block";		
	orderImages[0].className = "wrapper__order-block--img";
	orderImages[0].classList?.add('hoverFill'); 
	orderImages[0].style.transform = "scale(1.4)"; 

	if(themeColor === "blue"){document.querySelector('#order-image-1').classList.add("hoverBlueBorder");}
	if(themeColor === "green"){document.querySelector('#order-image-1').classList.add("hoverGreenBorder");}
	if(themeColor === "pink"){document.querySelector('#order-image-1').classList.add("hoverPinkBorder");}
	if(themeColor === "orange"){document.querySelector('#order-image-1').classList.add("hoverOrangeBorder");}

	blueIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-1').className = "wrapper__order-image--block";
		document.querySelector('#order-image-1').classList.add("hoverBlueBorder");
	});
	greenIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-1').className = "wrapper__order-image--block";
		document.querySelector('#order-image-1').classList.add("hoverGreenBorder");
	});
	pinkIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-1').className = "wrapper__order-image--block";
		document.querySelector('#order-image-1').classList.add("hoverPinkBorder");
	});
	orangeIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-1').className = "wrapper__order-image--block";
		document.querySelector('#order-image-1').classList.add("hoverOrangeBorder");
	});
});

document.querySelector('#item-1').addEventListener('mouseout', e => {
orderHover1 = true;
document.querySelector('#order-image-1').className = "wrapper__order-image--block";	
orderImages[0].className = "wrapper__order-block--img";	
orderImages[0].style.transform = "scale(1)"; 
if(themeColor === "blue"){document.querySelector('#order-image-1').classList?.add("blueBorderTransparent"); orderImages[0].classList?.add('blueFill'); }
if(themeColor === "green"){document.querySelector('#order-image-1').classList.add("greenBorderTransparent"); orderImages[0].classList?.add('greenFill');}
if(themeColor === "pink"){document.querySelector('#order-image-1').classList.add("pinkBorderTransparent"); orderImages[0].classList?.add('pinkFill');}
if(themeColor === "orange"){document.querySelector('#order-image-1').classList.add("orangeBorderTransparent"); orderImages[0].classList?.add('orangeFill');}	

blueIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-1').className = "wrapper__order-image--block";
	orderImages[0].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-1').classList.add("blueBorderTransparent"); 
	orderImages[0].classList?.add('blueFill');
});
greenIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-1').className = "wrapper__order-image--block";
	orderImages[0].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-1').classList.add("greenBorder"); 
	orderImages[0].classList?.add('greenFill');
});
pinkIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-1').className = "wrapper__order-image--block";
	orderImages[0].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-1').classList.add("pinkBorder"); 
	orderImages[0].classList?.add('pinkFill');
});
orangeIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-1').className = "wrapper__order-image--block";
	orderImages[0].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-1').classList.add("orangeBorder"); 
	orderImages[0].classList?.add('orangeFill');
});

});

document.querySelector('#item-2').addEventListener('mouseover', (e) => {
	orderHover2 = true;
	document.querySelector('#order-image-2').className = "wrapper__order-image--block";		
	orderImages[1].className = "wrapper__order-block--img";
	orderImages[1].classList?.add('hoverFill'); 
	orderImages[1].style.transform = "scale(1.4)"; 

	if(themeColor === "blue"){document.querySelector('#order-image-2').classList.add("hoverBlueBorder");}
	if(themeColor === "green"){document.querySelector('#order-image-2').classList.add("hoverGreenBorder");}
	if(themeColor === "pink"){document.querySelector('#order-image-2').classList.add("hoverPinkBorder");}
	if(themeColor === "orange"){document.querySelector('#order-image-2').classList.add("hoverOrangeBorder");}

	blueIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-2').className = "wrapper__order-image--block";
		document.querySelector('#order-image-2').classList.add("hoverBlueBorder");
	});
	greenIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-2').className = "wrapper__order-image--block";
		document.querySelector('#order-image-2').classList.add("hoverGreenBorder");
	});
	pinkIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-2').className = "wrapper__order-image--block";
		document.querySelector('#order-image-2').classList.add("hoverPinkBorder");
	});
	orangeIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-2').className = "wrapper__order-image--block";
		document.querySelector('#order-image-2').classList.add("hoverOrangeBorder");
	});
});

document.querySelector('#item-2').addEventListener('mouseout', e => {
orderHover2 = true;
document.querySelector('#order-image-2').className = "wrapper__order-image--block";	
orderImages[1].className = "wrapper__order-block--img";	
orderImages[1].style.transform = "scale(1)"; 
if(themeColor === "blue"){document.querySelector('#order-image-2').classList?.add("blueBorderTransparent"); orderImages[1].classList?.add('blueFill'); }
if(themeColor === "green"){document.querySelector('#order-image-2').classList.add("greenBorderTransparent"); orderImages[1].classList?.add('greenFill');}
if(themeColor === "pink"){document.querySelector('#order-image-2').classList.add("pinkBorderTransparent"); orderImages[1].classList?.add('pinkFill');}
if(themeColor === "orange"){document.querySelector('#order-image-2').classList.add("orangeBorderTransparent"); orderImages[1].classList?.add('orangeFill');}	

blueIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-2').className = "wrapper__order-image--block";
	orderImages[1].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-2').classList.add("blueBorderTransparent"); 
	orderImages[1].classList?.add('blueFill');
});
greenIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-2').className = "wrapper__order-image--block";
	orderImages[1].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-2').classList.add("greenBorderTransparent"); 
	orderImages[1].classList?.add('greenFill');
});
pinkIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-2').className = "wrapper__order-image--block";
	orderImages[1].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-2').classList.add("pinkBorderTransparent"); 
	orderImages[1].classList?.add('pinkFill');
});
orangeIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-2').className = "wrapper__order-image--block";
	orderImages[1].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-2').classList.add("orangeBorderTransparent"); 
	orderImages[1].classList?.add('orangeFill');
});

});

document.querySelector('#item-3').addEventListener('mouseover', (e) => {
	orderHover3 = true;
	document.querySelector('#order-image-3').className = "wrapper__order-image--block";		
	orderImages[2].className = "wrapper__order-block--img";
	orderImages[2].classList?.add('hoverFill'); 
	orderImages[2].style.transform = "scale(1.4)"; 

	if(themeColor === "blue"){document.querySelector('#order-image-3').classList.add("hoverBlueBorder");}
	if(themeColor === "green"){document.querySelector('#order-image-3').classList.add("hoverGreenBorder");}
	if(themeColor === "pink"){document.querySelector('#order-image-3').classList.add("hoverPinkBorder");}
	if(themeColor === "orange"){document.querySelector('#order-image-3').classList.add("hoverOrangeBorder");}

	blueIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-3').className = "wrapper__order-image--block";
		document.querySelector('#order-image-3').classList.add("hoverBlueBorder");
	});
	greenIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-3').className = "wrapper__order-image--block";
		document.querySelector('#order-image-3').classList.add("hoverGreenBorder");
	});
	pinkIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-3').className = "wrapper__order-image--block";
		document.querySelector('#order-image-3').classList.add("hoverPinkBorder");
	});
	orangeIndicator.addEventListener('click', e => {
		document.querySelector('#order-image-3').className = "wrapper__order-image--block";
		document.querySelector('#order-image-3').classList.add("hoverOrangeBorder");
	});
});

document.querySelector('#item-3').addEventListener('mouseout', e => {
orderHover3 = true;
document.querySelector('#order-image-3').className = "wrapper__order-image--block";	
orderImages[2].className = "wrapper__order-block--img";	
orderImages[2].style.transform = "scale(1)"; 
if(themeColor === "blue"){document.querySelector('#order-image-3').classList?.add("blueBorderTransparent"); orderImages[2].classList?.add('blueFill'); }
if(themeColor === "green"){document.querySelector('#order-image-3').classList.add("greenBorderTransparent"); orderImages[2].classList?.add('greenFill');}
if(themeColor === "pink"){document.querySelector('#order-image-3').classList.add("pinkBorderTransparent"); orderImages[2].classList?.add('pinkFill');}
if(themeColor === "orange"){document.querySelector('#order-image-3').classList.add("orangeBorderTransparent"); orderImages[2].classList?.add('orangeFill');}	

blueIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-3').className = "wrapper__order-image--block";
	orderImages[2].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-3').classList.add("blueBorderTransparent"); 
	orderImages[2].classList?.add('blueFill');
});
greenIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-3').className = "wrapper__order-image--block";
	orderImages[2].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-3').classList.add("greenBorderTransparent"); 
	orderImages[2].classList?.add('greenFill');
});
pinkIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-3').className = "wrapper__order-image--block";
	orderImages[2].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-3').classList.add("pinkBorderTransparent"); 
	orderImages[2].classList?.add('pinkFill');
});
orangeIndicator.addEventListener('click', e => {
	document.querySelector('#order-image-3').className = "wrapper__order-image--block";
	orderImages[2].className = "wrapper__order-block--img";	
	document.querySelector('#order-image-3').classList.add("orangeBorderTransparent"); 
	orderImages[2].classList?.add('orangeFill');
});

});


orderForm.addEventListener('submit', (e) => {
	e.preventDefault()
	bookTour();
});

async function bookTour(){

	let error = formValidate(orderForm);

	const storage = JSON.parse(storageOrders);

	if(error === 0){
		orderForm.classList.add('_sending');			
		const orderObject = {
			id: `${Date.now()}${orderName?.value?.slice(2)}${orderSurname?.value?.slice(2)}${orderTour?.value?.slice(2)}`,
			name: orderName.value,
			surname: orderSurname.value,
			country: orderCountry.value,
			phone: orderPhone.value,
			email: orderEmail.value,
			people: orderPeople.value,
			tour: orderTour.value,
			message: orderMessage.value
		}
		
		if(!storageOrders?.length || storage?.length === 0){
			ordersArray.push(orderObject)
			localStorage.setItem('orders', JSON.stringify(ordersArray));
		}
		if(storage?.length > 0){
			ordersArray.push([...storage, orderObject]);	
			localStorage.setItem('orders', JSON.stringify([...ordersArray]));		
		};		
			
		orderForm.reset();

		setTimeout(()=> {
			orderForm.className = 'wrapper__order-container--form';
		}, 7000);

		alert('Our managers will contact you within 12 working hours');

	}else {
		document.querySelector('.wrapper__order-form--message').textContent = '*fill all fields correctly!';
		setTimeout(() => {
			document.querySelector('.wrapper__order-form--message').textContent = ''
		}, 3000);
	}
}

function formValidate(form){
	let error = 0;
	let formReq = document.querySelectorAll('._req');	
	

	for(let i = 0; i < formReq.length; i++){
		const input = formReq[i];

		formRemoveError(input);	
		

		if(input.classList.contains('_email')){
			if(emailTest(input)){
				formAddError(input);
				error++;
			};
		}else if(input.classList.contains('_name') || input.classList.contains('_surname')){				
			if(!input?.value?.length > 0){
				formAddError(input);
				error++;
			}
		}else if(input.classList.contains('_country')){
			if(input?.value?.length < 2 || input?.value?.length > 56){
				formAddError(input);
				error++;
			}
		}else if(input.classList.contains('_phone')){
			if(phoneTest(input)){
				formAddError(input);
				error++;
			};
		}else if(input.classList.contains('_people')){				
			if(!input?.value > 0){					
				formAddError(input);
				error++;
			};
		}else if(input.classList.contains('_tour')){
			if(input.value === 'Select your tour*'){
				formAddError(input);
				error++;
			};
		}else{
			if(input === ''){
			formAddError(input);
				error++;
			}
		}
	}	
	return error;	
};

function  formAddError(input){
	// input.parentElement.classList.add('_error');
	input.classList.add('_error');
};
function  formRemoveError(input){
	// input.parentElement.classList.remove('_error');
	input.classList.remove('_error');
};

function emailTest(input){
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
function phoneTest(input){
	return !/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d*)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i.test(input.value);
};

