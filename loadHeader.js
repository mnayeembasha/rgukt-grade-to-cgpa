document.addEventListener('DOMContentLoaded', function () {
  const headerContainer = document.querySelector('header');

  // Fetch header.html content
  fetch('/header.html')
      .then(response => response.text())
      .then(html => {
          // Append the header content to the container
          headerContainer.innerHTML = html;

          // Call the function to set up the header after it's loaded
          setupHeader();
      })
      .catch(error => console.error('Error loading header:', error));
});


/*Hiding the scroll-text when it goes under the navbar*/
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector("header");
  const scrollTextParagraph = document.querySelector('.scroll-text p');

  if (scrollTextParagraph) {
    window.addEventListener('scroll', function () {
      const headerHeight = header.offsetHeight +18;
      const scrollTextRect = scrollTextParagraph.getBoundingClientRect();

      // Check if the scroll-text p is under the header
      const isUnderHeader = scrollTextRect.bottom > headerHeight && scrollTextRect.top < headerHeight;

      // Set opacity based on the condition
      scrollTextParagraph.style.opacity = isUnderHeader ? 1 : 0;
    });
  }
});


//For TOGGLE MODE
// Add an initialization function
function initializeMode() {
  const preferredMode = localStorage.getItem('preferredMode');
  const body = document.body;
  const toggleIcon = document.querySelector("#toggle-icon");

  if (preferredMode === 'dark') {
    body.classList.add('light-mode-colors');
    toggleIcon.title = "Toggle for Dark Mode";
  }

  // Call the setupHeader function
  setupHeader();
}

// Call the initialization function
initializeMode();

// Add your existing setupHeader function
function setupHeader() {
  let toggleIcon = document.querySelector("#toggle-icon");

  // Check if the toggleIcon element is found
  if (toggleIcon) {
      toggleIcon.addEventListener("click", () => {
          document.body.classList.toggle("light-mode-colors");

          // Save mode to localStorage
          const currentMode = document.body.classList.contains('light-mode-colors') ? 'dark' : 'light';
          localStorage.setItem('preferredMode', currentMode);

          if (document.body.classList.contains("light-mode-colors")) {
            toggleIcon.title = "Toggle for Dark Mode";
            for (item of items) {
                item.style.boxShadow = "0px 4px 8px black";
                item.addEventListener("mouseover", (event) => {
                    event.currentTarget.style.boxShadow = "0px 8px 40px black";
                });
                item.addEventListener("mouseout", (event) => {
                    event.currentTarget.style.boxShadow = "0px 4px 8px black";
                });
            }
        } else {
          toggleIcon.title = "Toggle for Light Mode";
        }
      });
  }
}



