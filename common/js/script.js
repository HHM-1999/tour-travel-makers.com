//main-image//
$('.package-slider').slick({
    dots: true,
    infinite: false,
    arrow: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
//travel agent
$('.center').slick({
    dots: true,
    infinite: false,
    centerPadding: '0px',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

///sticky///
const stickyNav = document.getElementById("sticky-navbar");

function toggleStickyNavbar() {
    if (window.scrollY > stickyNav.offsetTop) {
        stickyNav.classList.add('sticky');

    } else {
        stickyNav.classList.remove("sticky");
    }
}
window.addEventListener('scroll', toggleStickyNavbar);


//search box//
function showSearchBox() {
    var searchcontainer = document.getElementById("searchcontainer");
    searchcontainer.classList.remove("hidden");
    console.log("hello")
}

function hideSearchBox() {
    var searchcontainer = document.getElementById("searchcontainer");
    searchcontainer.classList.add("hidden");
    console.log("close")
}

function performSearch() {
    var searchInput = document.getElementById("searchInput").value;
    // Perform your search operation using the search input value
    // Add your search logic here (e.g., making an API request, filtering data)
    console.log("Performing search: " + searchInput);

}