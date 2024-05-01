// Fungsi untuk mengarahkan ke halaman detail film dengan judul film sebagai parameter
function goToMovieDetail(title) {
    window.location.href = 'watch.html?title=' + encodeURIComponent(title);
}

// Data film
var movies = [
    {
      posterURL: "https://upload.wikimedia.org/wikipedia/id/a/ae/1917_film_poster.jpg",
      title: "1917",
      rating: 8.5,
      year: 2019,
      duration: "1h 59m",
      synopsis: "April 1917, the Western Front. Two young British soldiers during the First World War are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men, and one of the soldiers’ brothers, from walking straight into a deadly trap.",
      type: "Film",
      genre: "Action",
      releaseDate: "25 December 2019",
      production: "Dreamworks Pictures, Reliance Entertainment",
      director: "Sam Mendes",
      cast: "Dean-Charles Chapman, Pip Carter, Daniel Mays, Colin Firth, Mark Strong, Benedict Cumberbatch",
      trailerURL: "https://www.youtube.com/embed/YqNYrYUiMfg?si=VN_WSCqYpXJNxiKk"
    },
    {
      posterURL: "https://upload.wikimedia.org/wikipedia/id/a/ae/1917_film_poster.jpg",
      title: "Argylle",
      genre: "Comedy",
      rating: 8.5,
      year: 2019,
      duration: "1h 59m",
      trailerURL: "https://www.youtube.com/embed/trailer2"
      // dll
    }
    // Data film lainnya...
  ];

  // Fungsi untuk menampilkan detail film berdasarkan judul yang diterima dari parameter
function showMovieDetailByTitle(title) {
    var movie = movies.find(movie => movie.title === title);

    document.getElementById('movie-video').src = movie.trailerURL;
    document.getElementById('movie-poster').src = movie.posterURL;
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-rating').textContent = movie.rating + "/10";
    document.getElementById('movie-year').textContent = movie.year;
    document.getElementById('movie-duration').textContent = movie.duration;
    document.getElementById('movie-synopsis').textContent = movie.synopsis;
    document.getElementById('movie-type').textContent = movie.type;
    document.getElementById('movie-genre').textContent = movie.genre;
    document.getElementById('movie-date').textContent = movie.releaseDate;
    document.getElementById('movie-production').textContent = movie.production;
    document.getElementById('movie-director').textContent = movie.director;
    document.getElementById('movie-cast').textContent = movie.cast;
    document.getElementById('movie-trailer').src = movie.trailerURL;
    
}

// Ambil judul film yang dipilih dari URL
const urlParams = new URLSearchParams(window.location.search);
const selectedMovieTitle = urlParams.get('title');
showMovieDetailByTitle(selectedMovieTitle);

const addButton = document.getElementById('add-button');
let isBookmarked = false;

addButton.addEventListener('click', function() {
    const img = this.querySelector('img');
    const desc = this.querySelector('p');
    if (isBookmarked) {
        img.src = 'Assets/Icon/bookmark.png';
        desc.textContent = "Add to Watchlist";
        this.classList.remove('clicked');
        isBookmarked = false;
    } else {
        img.src = 'Assets/Icon/bookmark\ \(1\).png';
        desc.textContent = "Added to Watchlist";
        this.classList.add('clicked');
        isBookmarked = true;
    }
});

const stars = document.querySelectorAll('.stars img');
let previousRating = 0;

stars.forEach(star => {
    star.addEventListener('click', function() {
        const value = parseInt(this.getAttribute('data-value'));

        if (value === previousRating) {
            stars.forEach(s => {
                s.classList.remove('rated');
            });
            previousRating = 0;
        } else {
            stars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('rated');
                } else {
                    s.classList.remove('rated');
                }
            });
            previousRating = value;
        }
    });
});
