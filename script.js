function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// JavaScript for filtering projects
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');

    // Toggle active class on buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));

    // Show/hide project cards based on the filter
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && !card.classList.contains(filter));
    });
  });
});


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

// document.addEventListener('keydown', function(e) {
//   if (e.key === 'F12') {
//       e.preventDefault();
//   }
//   // Disable Ctrl+Shift+I
//   if (e.ctrlKey && e.shiftKey && e.key === 'I') {
//       e.preventDefault();
//   }
//   // Disable Ctrl+Shift+C
//   if (e.ctrlKey && e.shiftKey && e.key === 'C') {
//       e.preventDefault();
//   }
//   // Disable Ctrl+Shift+J
//   if (e.ctrlKey && e.shiftKey && e.key === 'J') {
//       e.preventDefault();
//   }
//   // Disable Ctrl+U
//   if (e.ctrlKey && e.key === 'U') {
//       e.preventDefault();
//   }
// });

// Typing Animation

const words = ["Front-End Developer", "UI/UX DESIGNER", "GRAPHIC DESIGNER"];
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

