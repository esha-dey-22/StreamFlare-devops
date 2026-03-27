$(document).ready(function() {
    // Load header and footer components
    $('#header').load('components/header.html');
    $('#footer').load('components/footer.html');

    // Example: Add 'scrolled' class to navbar when scrolling
    window.addEventListener("scroll", function () {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
const movies = [
  {
    title: "Venom",
    category: "Action",
    image: "https://via.placeholder.com/300x400",
    trailer: "https://www.youtube.com/embed/u9Mv98Gr5pY"
  },
  {
    title: "Avengers",
    category: "Action",
    image: "https://via.placeholder.com/300x400",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
  },
  {
    title: "Joker",
    category: "Drama",
    image: "https://via.placeholder.com/300x400",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
  }
];
// Active link highlight
const currentPage = window.location.pathname;

document.querySelectorAll(".nav-link-custom").forEach(link => {
    const linkPath = link.getAttribute("href");

    if (currentPage.includes("about") && linkPath.includes("about")) {
        link.classList.add("active");
    }

    if (currentPage.includes("index") && linkPath.includes("index")) {
        link.classList.add("active");
    }
});

// ❤️ Add to Watchlist
function addToWatchlist(movie) {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (!watchlist.includes(movie)) {
        watchlist.push(movie);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        alert(movie + " added to Watchlist ❤️");
    } else {
        alert("Already in Watchlist!");
    }
}
window.onload = function () {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    document.querySelectorAll(".watch-btn").forEach(btn => {
        const movie = btn.getAttribute("onclick").match(/'(.*?)'/)[1];

        if (watchlist.includes(movie)) {
            btn.classList.add("active");
        }
    });
};

// 🎬 Open Trailer
function playTrailer(url) {
    const modal = document.getElementById("trailerModal");
    const frame = document.getElementById("trailerFrame");

    frame.src = url;
    modal.classList.remove("hidden");
}

// ❌ Close Trailer
function closeTrailer() {
    const modal = document.getElementById("trailerModal");
    const frame = document.getElementById("trailerFrame");

    modal.classList.add("hidden");
    frame.src = "";
}