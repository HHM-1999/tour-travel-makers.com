//main-image//
$('.responsive').slick({
    dots: true,
    infinite: false,
    centerPadding: '10px',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
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

    }
    else {
        stickyNav.classList.remove("sticky");
    }
}
window.addEventListener('scroll', toggleStickyNavbar);

//chatbot///
document.getElementById('whats-chat').addEventListener("mouseover", showchatbox);
document.getElementById('chat-top-right').addEventListener("click", closechatbox);
document.getElementById('send-btn').addEventListener("click", sendmsg);
window.addEventListener("load", showchatboxtime);
function showchatbox() {
    document.getElementById('chat-box').style.right = '8%'
}
function closechatbox() {
    document.getElementById('chat-box').style.right = '-500px'


}
function showchatboxtime() {
    setTimeout(launchbox, 5000)
}
function launchbox() {
    document.getElementById('chat-box').style.right = '8%'

}
function sendmsg() {
    var msg = document.getElementById('whats-in').value;
    var relmsg = msg.replace(/ /g, "%20");
    window.open('https://api.whatsapp.com/send?phone=99999999999&text=' + relmsg, '_blank');

}