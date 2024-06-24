document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.getElementById('navbar');
    const links = navbar.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            const current = document.getElementsByClassName('active');

            if (current.length > 0) {
                current[0].classList.remove('active');
            }

            this.classList.add('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.getElementById('navbar');
    const links = navbar.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            const current = document.getElementsByClassName('active');

            if (current.length > 0) {
                current[0].classList.remove('active');
            }

            this.classList.add('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.querySelector('.profile-icon');
    const dropdown = document.querySelector('.dropdown');

    profileIcon.addEventListener('click', function() {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});


$(document).ready(function() {
    // When hovering over profile icon, show dropdown
    $('.profile-icon').hover(function() {
        $('.dropdown').css('display', 'block');
    }, function() {
        $('.dropdown').css('display', 'none');
    });

    // Allow clicking on dropdown links
    $('.dropdown a').click(function() {
        // Handle link click functionality here
        // Example: redirect to link href
        window.location.href = $(this).attr('href');
    });
});



