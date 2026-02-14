document.addEventListener("DOMContentLoaded", () => {
    // 1. Fade In when page loads
    document.body.classList.add("fade-in");

    // 2. Intercept all clicks on links or buttons with class 'transition-btn'
    const links = document.querySelectorAll("a, .transition-btn");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Stop immediate jump
            const target = link.getAttribute("href") || link.dataset.href;

            // Fade Out
            document.body.classList.remove("fade-in");

            // Wait for animation (1s), then go to next page
            setTimeout(() => {
                window.location.href = target;
            }, 1000);
        });
    });
});

// Helper for your logic.js functions
function transitionTo(url) {
    document.body.classList.remove("fade-in");
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}