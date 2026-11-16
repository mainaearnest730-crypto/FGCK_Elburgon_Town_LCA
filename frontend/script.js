// FGCK ELBURGON TOWN LCA WEBSITE

document.addEventListener("DOMContentLoaded", function () {

    console.log("FGCK Elburgon Town LCA website loaded successfully.");

    // Navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigation selected:", link.textContent);
        });
    });

    // Sunday service information
    const services = [
        {
            name: "Morning Devotion",
            time: "8:00 AM - 10:00 AM"
        },
        {
            name: "Main Sunday Service",
            time: "10:00 AM - 1:00 PM"
        }
    ];

    console.log("Sunday services:", services);

    // Update footer year and church information
    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML = `
            <p>&copy; ${new Date().getFullYear()}
            FGCK Elburgon Town LCA. All Rights Reserved.</p>

            <p class="developer-credit">
                Website Designed &amp; Developed by
                <strong>@EMM_SDS CONCEPTS</strong>
            </p>

            <p>Faith &bull; Fellowship &bull; Service</p>
        `;
    }

});