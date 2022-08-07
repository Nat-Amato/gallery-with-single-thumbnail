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
  n %= slidesAA.length;
  modalImg.src = slidesAA[n].src;
  captionText.innerHTML = n + 1 + ' / ' + slidesAA.length;
} 