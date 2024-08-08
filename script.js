document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.card-container');
    const cards = document.querySelectorAll('.card');
    let clone = container.innerHTML; // Clone the content

    container.innerHTML += clone; // Append the clone to the container

    container.addEventListener('scroll', function () {
        if (container.scrollTop >= container.scrollHeight / 2) {
            container.scrollTop = 0; // Reset scroll position when reaching the end
        }
    });
});
