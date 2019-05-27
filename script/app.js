// Slider
const circles = document.querySelectorAll('.circle');
const sections = document.querySelectorAll('.slider');
sections[0].style.display='block';
circles[0].style.backgroundColor='#00e0d0';
circles[0].style.borderColor='#00e0d0';

sections.forEach((item, index)=>{
	circles[index].addEventListener('click', ()=>{
		for (var i=0; i<sections.length; i++) {
		console.log('dad');
		circles[i].style.backgroundColor='';
		circles[i].style.borderColor='';
		sections[i].style.display='none';
	}
		sections[index].style.display='block';
		circles[index].style.backgroundColor='#00e0d0';
		circles[index].style.borderColor='#00e0d0';
	});
});

// Form Validation
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
// document.getElementById('subject').addEventListener('blur', validateSubject);

const form = document.getElementById('contact-form');

function validateName() {
	const name = document.getElementById('name');
	const re = /^[a-zA-Z]{2,30}$/;

	if (!re.test(name.value)&&name.value!='') {
		const errorBox = document.createElement('div');
		errorBox.className='error-box';
		errorBox.textContent='Please Insert Valid Name'
		form.insertBefore(errorBox, name);
		console.log(errorBox);

		setTimeout(()=>{
			errorBox.remove();
		}, 3000);
	} 
}

function validateEmail() {
	const email = document.getElementById('email');
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if (!re.test(email.value)&&email.value!='') {
		const errorBox = document.createElement('div');
		errorBox.className='error-box';
		errorBox.textContent='Please Insert Valid Email'
		form.insertBefore(errorBox, email);
		console.log(errorBox);

		setTimeout(()=>{
			errorBox.remove();
		}, 3000);
	} 
}

//

$(document).ready(function() {

	$('.view-header-menu').click(function(){
		$('.header-menu').slideToggle('fast');
		$('.view-header-menu').toggleClass('shown');
	});

	$(window).on('scroll', function(){
		if ($(window).scrollTop()) {
			$('.navbar').addClass('fixed');
		} else {
			$('.navbar').removeClass('fixed');
		}
	});

	// Smooth scrolling
	var scrollLink = $('.scroll');
	var navbarHeight = $('.navbar').height();
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top - navbarHeight
		}, 1000)
	});

	// Active link switching
	var footerPos = $('#footer').offset().top-100;
	$(window).scroll(function(){
		var scrollBarLocation = $(this).scrollTop()+100;
		scrollLink.each(function(){
			var sectionOffset = $(this.hash).offset().top

			if (sectionOffset <= scrollBarLocation) {
				$(this).addClass('active');
				$(this).parent().siblings().children().removeClass('active');
			} else {
				$('.scroll').children().removeClass('active');
			}
		})

		if (scrollBarLocation >= footerPos) {
			$('.scroll').removeClass('active');
		}
	});
});