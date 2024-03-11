

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

