// let pro = document.getElementById('product')
// fetch('https://fakestoreapi.com/products?limit=5').then((v) => {
//     return v.json();
// }).then((p) => {
//     html = ""
//     for (i in p) {
//         html += `
//         <div class="carousel-item active" data-bs-interval="5000">
//            <img src=${p[i].image} class="d-block certi-width certi-img" alt="...">

//             <div class="carousel-cap d-none d-md-block">
//             <h5 class="product-heading">${p[i].title}</h5>
//             <p class="product-des">${p[i].description}</p>
//             </div>
//         </div>`

//     }
//     pro.innerHTML = html;
// })
{/* <h3 class="product-price">Price:  ${p[i].rating.count} $</h3> */ }

// const cloth = document.getElementById('clothes')
// fetch(`https://fakestoreapi.com/products/category/men's%20clothing`).then((men)=>{
//     return men.json();
// }).then((feature)=>{
//     featurePro = " "
//     for(img in feature){
//         featurePro += `
//         <div class="card mx-3" style="width: 18rem;">
//         <img src=${feature[img].image} class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${feature[img].title}</h5>
//           <p class="card-text">Starting From ₹${feature[img].rating.count}</p>
//           <a href="#" class="btn btn-dark">Go somewhere</a>
//         </div>
//       </div>`
//     }
//     cloth.innerHTML = featurePro;
// })


var testim = document.getElementById("testim")
var testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children)

var testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children)
var testimLeftArrow = document.getElementById("left-arrow")
var testimRightArrow = document.getElementById("right-arrow")
var testimSpeed = 4500 
var currentSlide = 0
var currentActive = 0
var testimTimer
var touchStartPos 
var touchEndPos
var touchPosDiff
var ignoreTouch = 30;
window.onload = function () {
    // Testim Script     
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }

        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");
        currentActive = currentSlide;
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
    testimLeftArrow.addEventListener("click", function () { playSlide(currentSlide -= 1); })
    testimRightArrow.addEventListener("click", function () { playSlide(currentSlide += 1); })
    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);
    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 37: testimLeftArrow.click();
                break;
            case 39: testimRightArrow.click();
                break;
            case 39: testimRightArrow.click();
                break;
            default:
                break;
        }
    })

    testim.addEventListener("touchstart", function (e) {

        touchStartPos = e.changedTouches[0].clientX;
    })
    testim.addEventListener("touchend", function (e) {

        touchEndPos = e.changedTouches[0].clientX;
        touchPosDiff = touchStartPos - touchEndPos;
        console.log(touchPosDiff);
        console.log(touchStartPos);
        console.log(touchEndPos);
        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        }
        else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }
    })
}  