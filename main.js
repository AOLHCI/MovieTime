// Fungsi untuk mengarahkan ke halaman detail film dengan judul film sebagai parameter
function goToMovieDetail(title) {
    window.location.href = 'film-detail.html?title=' + encodeURIComponent(title);
}

// Data film
var movies = [
    {
      title: "1917",
      genre: "Action",
      rating: 8.5,
      duration: "2 hours",
      trailerURL: "https://www.youtube.com/embed/trailer1"
      // dll
    },
    {
      title: "Argylle",
      genre: "Comedy",
      rating: 7.8,
      duration: "1 hour 45 minutes",
      trailerURL: "https://www.youtube.com/embed/trailer2"
      // dll
    }
    // Data film lainnya...
  ];

  // Fungsi untuk menampilkan detail film berdasarkan judul yang diterima dari parameter
function showMovieDetailByTitle(title) {
    var movie = movies.find(movie => movie.title === title);

    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-genre').textContent = movie.genre;
    document.getElementById('movie-rating').textContent = movie.rating;
    document.getElementById('movie-duration').textContent = movie.duration;
    document.getElementById('trailer-video').src = movie.trailerURL;
}

// Ambil judul film yang dipilih dari URL
const urlParams = new URLSearchParams(window.location.search);
const selectedMovieTitle = urlParams.get('title');
showMovieDetailByTitle(selectedMovieTitle);