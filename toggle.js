document.addEventListener("DOMContentLoaded", () => {
    let toggleIcon = document.querySelector("#toggle-icon");
    let items = document.querySelectorAll(".item");

    // Retrieve the mode from localStorage
    let isLightMode = localStorage.getItem("isLightMode") === "true";

    // Apply the mode on page load
    applyMode(isLightMode);

    if (toggleIcon) {
        toggleIcon.addEventListener("click", () => {
            isLightMode = !isLightMode;

            // Store the mode in localStorage
            localStorage.setItem("isLightMode", isLightMode);

            // Dispatch a custom event to notify other pages
            document.dispatchEvent(new CustomEvent("modeChanged", { detail: isLightMode }));

            applyMode(isLightMode);
        });
    }

    // Listen for the custom event from other pages
    document.addEventListener("modeChanged", (event) => {
        isLightMode = event.detail;
        applyMode(isLightMode);
    });

    function applyMode(isLightMode) {
        document.body.classList.toggle("light-mode-colors", isLightMode);

        if (isLightMode) {
            toggleIcon.title = "Toggle for Dark Mode";
            for (let item of items) {
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
    }
});
    