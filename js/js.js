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



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// lấy thẻ input
var input = document.getElementById("myInput");
// định nghĩa hàm xử lý myFunction
function myFunction() {
    var filter, ul, li, a, i;
    // lấy giá trị người dùng nhập
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    // Nếu filter không có giá trị thị ẩn phần kết quare\
    if (!filter) {
      ul.style.display = "none";
    }else{
      // lặp qua tất cả các thẻ li chứa kết quả
      for (i = 0; i < li.length; i++) {
          // lấy thẻ a trong các thẻ li
          a = li[i].getElementsByTagName("a")[0];
          // kiểm tra giá trị nhập có tôn tại trong nội dung thẻ a
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            //nếu có hiển thị phàn tử ul và các thẻ li đó
              ul.style.display = "block";
              li[i].style.display = "";
          } else {
            // nếu không ẩn các thẻ li
              li[i].style.display = "none";

          }
      }
    }
}
//gán sự kiện cho thẻ input
input.addEventListener("keyup", myFunction);