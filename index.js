function callnwpage()
{
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdwydVZLaiZYAC5SNctNGnIDMqSomrefOss538HwkZKWGtPpw/viewform', '_blank');
}
function facebook()
{
    window.open('https://www.facebook.com/profile.php?id=61567852370903', '_blank');
}
function instagram()
{
    window.open('https://www.instagram.com/nityastotra.parayanam', '_blank');
}
function whatsapp()
{
    window.open('https://wa.me/+918050935734', '_blank');
}
function yt()
{
    window.open('https://www.youtube.com/@NityaStotraParayanamNSP', '_blank');
}
function web()
{
    window.open('https://nspdocs.netlify.app/', '_blank');
}


document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbarCollapse.classList.remove('show');
        });
    });
});
