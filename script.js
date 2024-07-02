let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.classList = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);

const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
  const dots = elem.getAttribute("data-dots");
  const marked = elem.getAttribute("data-percent");
  const points = Math.floor(dots * marked / 100);
  const rotate = 360 / dots;

  let pointsHtml = '';
  for (let i = 0; i < dots; i++) {
    pointsHtml += `<div class="point" style="--i:${i}; --rot:${rotate}deg;"></div>`;
  }
  elem.innerHTML = pointsHtml;

  const pointsMarked = elem.querySelectorAll('.point');
  for (let i = 0; i < points; i++) {
    pointsMarked[i].classList.add('marked');
  }
});


//mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');

let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){
        menuli.forEach(sec => sec.classList.remove("active"));
        menuli[len].classList.add("active");
    }
}
activeMenu();
window.addEventListener("scroll",activeMenu);




/////toggle icon navbar////////
// let menuIcon = document.querySelectorAll("#menu-icon");
// let navlist = document.querySelectorAll(".navlist");

// menuIcon.onclick = () =>{
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");

// }


// window.onscroll = () =>{
//     menuIcon.classList.remove("bx-x");
//     navlist.classList.remove("open");

// }


// let menuIcon = document.querySelectorAll("#menu-icon");
// let navlist = document.querySelectorAll(".navlist");

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// }


// menuIcon.addEventListener("click", () => {
//     menuIcon.classList.toggle("bx-x");
//     navlist.classList.toggle("open");
// });



// const header = document.querySelectorAll("header");
// window.addEventListener("scroll", function() {
//     header.classList.toggle("sticky", window.scrollY > 50);
// });









// Select the menu icon and the navigation list
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", () => {
    // Toggle the 'open' class on the navigation list to show/hide it
    navlist.classList.toggle("open");
});
