var searchIcon = document.getElementById("search");
var searchItems = document.getElementById("searchI");
function convert() {
  if (searchIcon.classList.contains("fa-magnifying-glass")) {
    searchIcon.classList.remove("fa-magnifying-glass");
    searchIcon.classList.add("fa-xmark");
    searchItems.style.display = "block";
  } else {
    searchIcon.classList.add("fa-magnifying-glass");
    searchIcon.classList.remove("fa-xmark");
    searchItems.style.display = "none";
  }
}



// task 2 
// 
// buttons this.src re

// var prodImg1 = document.getElementById('prod_img1');
// var prodImg2 = document.getElementById('prod_img2');

// var prodImg3 = document.getElementById('prod_img3');

// var prodImg4 = document.getElementById('prod_img4');

// var prodImg5 = document.getElementById('prod_img5');

// function Showit1(){
//     prodImg1.style.display = 'block';
// }

var prodImg = document.getElementById('prod_img');

function Showit(element, imgsrc) {
    var imgElement = element.querySelector('img');
    imgElement.src = imgsrc;

    var contentE = element.querySelector('div')
    
    if(contentE.classList.contains('hide-prod')) {
      contentE.classList.remove('hide-prod');
    }
    else {
      contentE.classList.add('hide-prod');
    }
}   

//Error maybe check later
// want if any click over body it will add hide-prod
// function bdclicked() {
//   document.addEventListener('click', bdclicked);
//   if(!prodImg.classList.contains('hide-prod')) 
//     {
//       prodImg.classList.add('hide-prod');
//     }
//   }
//     bdclicked();

// }



// var bodyClick = document.addEventListener('click', bdClicked);

// function bdClicked() {
//   console.log("Body clicked.");
//     var prodImg = document.getElementById('prod_img');

//     if(prodImg.style.display == "block")
//       {
//         prodImg.style.display == "none";
//       }
//     prodImg.style.display = "none";
// }


// task 3

var scrollSection1 = document.querySelector('.bubble.section1');

var scrollSection2 = document.querySelector('.bubble.section2');

var scrollSection3 = document.querySelector('.bubble.section3');

var scrollSection4 = document.querySelector('.bubble.section4');

var scrollSection5 = document.querySelector('.bubble.section5');

var scrollSection6 = document.querySelector('.bubble.section6');

var scrollSection7 = document.querySelector('.bubble.section7');


// maybe try later with switch case
// function scrollit(){
//   switch(true){
//     case this.scrollY > 100 && this.scrollY < 110:
//       scrollSection1.classList.add('bgscroll');
//       break;
//     case this.scrollY > 110:
//       scrollSection2.classList.add('bgscroll');
//       break;
//     case this.scrollY > 140:
//       scrollSection3.classList.add('bgscroll');
//       break;
//     case this.scrollY > 160:
//       scrollSection4.classList.add('bgscroll');
//       break;
//     case this.scrollY > 180:
//       scrollSection5.classList.add('bgscroll');
//       break;
//     case this.scrollY > 200:
//       scrollSection6.classList.add('bgscroll');
//       break;
//       case this.scrollY > 200:
//       scrollSection7.classList.add('bgscroll');
//       break;
      
      
//   }
// }

function scrollit(){
  if (scrollY > 200)
    {
      scrollSection1.classList.add('bgscroll');
    }
  else {
    scrollSection1.classList.remove('bgscroll');
  }
  if (scrollY > 250)
    {
      scrollSection2.classList.add('bgscroll');
    }
  else {
      scrollSection2.classList.remove('bgscroll'); 
  }
  if (scrollY > 300)
    {
      scrollSection3.classList.add('bgscroll');
    }
  else {
      scrollSection3.classList.remove('bgscroll'); 
  }
  if (scrollY > 350)
    {
      scrollSection4.classList.add('bgscroll');
    }
  else {
      scrollSection4.classList.remove('bgscroll'); 
  }
  if (scrollY > 400)
    {
      scrollSection5.classList.add('bgscroll');
    }
  else {
      scrollSection5.classList.remove('bgscroll'); 
  }
  if (scrollY > 450)
    {
      scrollSection6.classList.add('bgscroll');
    }
  else {
      scrollSection6.classList.remove('bgscroll'); 
  }
  if (scrollY > 500)
    {
      scrollSection7.classList.add('bgscroll');
    }
  else {
      scrollSection7.classList.remove('bgscroll'); 
  }

}
// function displayN() {
//   var contentE = element.querySelector('div');
//   contentE.classList.add('hide-prod');
// }