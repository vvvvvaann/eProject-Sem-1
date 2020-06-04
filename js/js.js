//
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//
var input = document.getElementById("myInput");
function myFunction() {
    var filter, ul, li, a, i;
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    if (!filter) {
      ul.style.display = "none";
    }else{
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              ul.style.display = "block";
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
    }
}
input.addEventListener("keyup", myFunction);


//
$(document).ready(function() {
  $('.content a').fancybox();
});

//
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });

//
$(document).ready(function() {
  $('body').on('click','.sent', function() {
  var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  var mobile = $('#phone').val();
  if(mobile !==''){
      if (vnf_regex.test(mobile) == false)
      {
          alert('Số điện thoại của bạn không đúng định dạng!');
      }else{
          alert('Số điện thoại của bạn hợp lệ!');
      }
  }else{
      alert('Bạn chưa điền số điện thoại!');
  }
  });
});

//
function contactus(){
  alert("gui phan hoi thanh cong");
}
                