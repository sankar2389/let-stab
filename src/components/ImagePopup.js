import React from 'react'
import './Popup.css';
const ImagePopup = () =>{
//     document.querySelectorAll('.image-container img').forEach(image =>{
//        image.onclick = () =>{
//            document.querySelector('.popup-imge').src = image.getAttribute('src');
//        }
//     });
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
return (
    // <div className='container'>
    //     <div className='image-container'>
    //         <div className='image'><img src='images/tab/circle.jpg'/></div>
    //         <div className='image'><img src='images/tab/fullkey.jpg'/></div>
    //         <div className='image'><img src='images/tab/fullkit.jpg'/></div>
    //         <div className='image'><img src='images/tab/fullpouch.jpg'/></div>
    //         <div className='image'><img src='images/tab/fulltype.jpg'/></div>
    //         <div className='image'><img src='images/tab/hole.jpg'/></div>

    //     </div>

    //     <div className='popup-image'>
    //         <span className='spantime'>&times;</span>
    //         <img src='images/tab/circle.jpg' />
    //     </div>

    // </div>
    <>
        <div class="row">
            <div class="column">
                <img src="img1.jpg" onclick="openModal();currentSlide(1)" class="hover-shadow" />
            </div>
            <div class="column">
                <img src="img2.jpg" onclick="openModal();currentSlide(2)" class="hover-shadow" />
            </div>
            <div class="column">
                <img src="img3.jpg" onclick="openModal();currentSlide(3)" class="hover-shadow" />
            </div>
            <div class="column">
                <img src="img4.jpg" onclick="openModal();currentSlide(4)" class="hover-shadow" />
            </div>
        </div>


        <div id="myModal" class="modal">
            <span class="close cursor" onclick="closeModal()">&times;</span>
            <div class="modal-content">

                <div class="mySlides">
                    <div class="numbertext">1 / 4</div>
                    <img src="img1_wide.jpg" style="width:100%" />
                </div>

                <div class="mySlides">
                    <div class="numbertext">2 / 4</div>
                    <img src="img2_wide.jpg" style="width:100%" />
                </div>

                <div class="mySlides">
                    <div class="numbertext">3 / 4</div>
                    <img src="img3_wide.jpg" style="width:100%" />
                </div>

                <div class="mySlides">
                    <div class="numbertext">4 / 4</div>
                    <img src="img4_wide.jpg" style="width:100%" />
                </div>


                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>


                <div class="caption-container">
                    <p id="caption"></p>
                </div>


                <div class="column">
                    <img class="demo" src="img1.jpg" onclick="currentSlide(1)" alt="Nature" />
                </div>

                <div class="column">
                    <img class="demo" src="img2.jpg" onclick="currentSlide(2)" alt="Snow" />
                </div>

                <div class="column">
                    <img class="demo" src="img3.jpg" onclick="currentSlide(3)" alt="Mountains" />
                </div>

                <div class="column">
                    <img class="demo" src="img4.jpg" onclick="currentSlide(4)" alt="Lights" />
                </div>
            </div>
        </div>
    </>
);
}
export default ImagePopup