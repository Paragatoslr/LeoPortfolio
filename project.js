const projects = [
  {
    category: "uiux",
    title: "Portfolio Design",
    imageUrl: "./assets/projects/UIUX/project-1.png",
    link: "https://www.figma.com/design/vtxl5BVMChSU0CyJtvbtIJ/Leo-web-Portfolio?node-id=10-4&t=zRGEWnz9x0H2k10j-1"
  },
  {
    category: "Webdev",
    title: "Portfolio Website",
    imageUrl: "./assets/projects/Web-dev/Portfolio.png",
    link: "https://github.com/Paragatoslr/LeoPortfolio"
  },
  {
    category: "graphic",
    title: "Best Pasta Poster",
    imageUrl: "./assets/projects/Graphic/ItalianMenu.png",
    link: "https://www.behance.net/leoparagatos"
  },
  {
    category: "graphic",
    title: "Church Cleaners Rule",
    imageUrl: "./assets/projects/Graphic/cleanersguide.png",
    link: "https://www.behance.net/leoparagatos"
  },
  {
    category: "graphic",
    title: "Teacher holding card asset",
    imageUrl: "./assets/projects/Graphic/GraphicAsset.png",
    link: "https://www.behance.net/leoparagatos"
  },
  {
    category: "other",
    title: "Aksyon",
    imageUrl: "./assets/projects/Web-dev/Aksyon.png",
    link: "https://github.com/Blue-Hacks-2021/Team-A-Technocrats"
  }
  // Add more projects as needed
];

function createCard(project) {
  const card = document.createElement("div");
  card.className = `project-card ${project.category} relative flex-shrink-0 w-64 h-[30rem] flex-col rounded-xl bg-clip-border text-gray-700 shadow-md overflow-hidden snap-center group cursor-pointer`;
  
  // Open the link in a new tab using window.open with '_blank'
  card.onclick = () => window.open(project.link, '_blank');
  
  card.innerHTML = `
    <div class="project-image absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110" style="background-image: url('${project.imageUrl}');"></div>
    <div class="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
    <div class="eye-icon absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
      <svg xmlns="http://www.w3.org/2000/svg" height="3rem" fill="white" class="bi bi-eye-fill" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
      </svg>
    </div>
    <div class="hover-content absolute inset-x-0 bottom-0 flex justify-center text-white text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20 p-4">
      <h1>${project.title}</h1>
    </div>
  `;
  
  return card;
}

function displayCards(filter = "all") {
  const container = document.getElementById("cards-container");
  container.innerHTML = ""; // Clear the existing cards

  projects
    .filter(project => filter === "all" || project.category === filter)
    .forEach(project => {
      const card = createCard(project);
      container.appendChild(card);
    });
}

function filterProjects(category) {
  displayCards(category);
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(button => button.classList.remove("active"));
  document.querySelector(`.filter-btn[data-filter="${category}"]`).classList.add("active");
}

function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
}

// Initialize with all projects displayed
displayCards();








// JavaScript for filtering projects - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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

// Project menu desktop and mobile

function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdown');
  dropdownMenu.classList.toggle('hidden');
}

// Function to select a filter and update the dropdown button text
function selectFilter(filter) {
  // Update dropdown button text
  const selectedFilterText = {
    'all': 'All',
    'uiux': 'UI/UX',
    'Webdev': 'Web Development',
    'graphic': 'Graphic',
    'other': 'Other'
  };
  
  document.getElementById('selectedFilter').textContent = selectedFilterText[filter];

  // Filter projects
  filterProjects(filter);

  // Close the dropdown
  toggleDropdown();
}

// Function to filter projects (sample implementation)
function filterProjects(filter) {
  console.log('Filtering projects by:', filter);
  const allCards = document.querySelectorAll('.project-card');

  allCards.forEach(card => {
    if (filter === 'all' || card.classList.contains(filter)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}
