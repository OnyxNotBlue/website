window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60) {
        document.getElementById("fixed").classList.add("fixedHeader");
        document.getElementById("space").classList.add("space");
        document.getElementById("spacetwo").classList.add("spacetwo");
    } else {
        document.getElementById("fixed").classList.remove("fixedHeader");
        document.getElementById("space").classList.remove("space");
        document.getElementById("spacetwo").classList.remove("spacetwo");
    }
}