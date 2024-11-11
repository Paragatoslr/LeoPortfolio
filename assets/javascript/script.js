function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


// For Scroll dot detection and active dot

document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const dots = document.querySelectorAll(".dot-nav");
  
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
      }
    });
  });
  

// Disable right-click
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


// Disable ctrl + shift + i

document.addEventListener('keydown', function(e) {
  if (e.key === 'F12') {
      e.preventDefault();
  }
  // Disable Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
  }
  // Disable Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
  }
  // Disable Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
  }
  // Disable Ctrl+U
  if (e.ctrlKey && e.key === 'U') {
      e.preventDefault();
  }
});

// Typing Animation

const words = ["Front-End Dev", "UI/UX Designs", "GRAPHIC Designs"];
let i = 0;
let textIndex = 0;
let currentWord = "";
let isDeleting = false;
const speed = 50; // Typing speed in milliseconds
const delay = 2000; // Delay between word changes

function type() {
    if (!isDeleting && textIndex < words[i].length) {
        // Typing
        currentWord += words[i].charAt(textIndex);
        textIndex++;
        document.getElementById("dynamic-text").textContent = currentWord;
    } else if (isDeleting && textIndex > 0) {
        // Deleting
        currentWord = currentWord.substring(0, currentWord.length - 1);
        textIndex--;
        document.getElementById("dynamic-text").textContent = currentWord;
    }

    if (textIndex === words[i].length && !isDeleting) {
        isDeleting = true;
        setTimeout(type, delay);
    } else if (isDeleting && textIndex === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, speed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

//  For Collapse Info and Exp bttn

function toggleContent(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);

    // Toggle content visibility
    content.classList.toggle("hidden");

    // Toggle icon SVG
    if (content.classList.contains("hidden")) {
        // Closed state icon (caret-right)
        icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>`;
    } else {
        // Open state icon (caret-down)
        icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>`;
    }
}



