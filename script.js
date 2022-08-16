	 function openModalAA() {
	  document.getElementById("myModalAA").style.display = "block";
	}

	function closeModalAA() {
	  document.getElementById("myModalAA").style.display = "none";
	}

	var slideIndex = 0;
	showSlidesAA(slideIndex);

	function plusSlidesAA(n) {
	  showSlidesAA(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlidesAA(slideIndex = n);
	}

	function showSlidesAA(n) {
	  var i;
	  var slidesAA = document.querySelectorAll('.columnAA img');
	  var captionText = document.getElementsByClassName("numbertextAA")[0];
	  var modalImg = document.querySelector('.modal-contentAA img');
	  
	  const textAAONE = ["UNO", "DUE", "TRE", "QUATTRO", "CINQUE", "SEI"];
	  var captionTextAAONE = document.getElementsByClassName("textAAONE")[0];
	  
	  const textAATWO = ["Colore: viola", "Colore: rosso", "Colore: acquamarina", "Colore: nero", "Colore: marrone", "Colore: giallo"];
	  var captionTextAATWO = document.getElementsByClassName("textAATWO")[0];
	  
	  const textAATHREE = ["Materiale: pietra", "Materiale: pietra", "Materiale: pietra", "Materiale: sabbia", "Materiale: sabbia", "Materiale: sabbia"];
	  var captionTextAATHREE = document.getElementsByClassName("textAATHREE")[0];
	  
	  const textAAFOUR = ["Colore: viola", "Colore: rosso", "Colore: celeste", "Colore: nero", "Colore: marrone", "Colore: dorato"];
	  var captionTextAAFOUR = document.getElementsByClassName("textAAFOUR")[0];

	  
	  n %= slidesAA.length;
	  modalImg.src = slidesAA[n].src;
	  captionText.innerHTML = n + 1 + ' / ' + slidesAA.length;
	  captionTextAAONE.innerHTML = textAAONE[n];
	  captionTextAATWO.innerHTML = textAATWO[n];
	  captionTextAATHREE.innerHTML = textAATHREE[n];
	  captionTextAAFOUR.innerHTML = textAAFOUR[n];
	} 
