document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent instant jump
            const targetId = this.getAttribute("href").substring(0); // Get target page
            document.body.style.opacity = "0"; // Fade out effect

            setTimeout(() => {
                window.location.href = targetId; // Navigate
                document.body.style.opacity = "1"; // Fade in effect
            }, 500); // Delay transition
        });
    });
});