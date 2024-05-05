let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if(slideIndex < 1){
    slideIndex = slides.length;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
  if(slideIndex + n-1 < -1){
    showSlides(slides.length);
  }
  showSlides(slideIndex += n-1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', function() {
  showSlides();
  setInterval(showSlides, 5000);

  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide(index);
    });
  });

  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  leftArrow.addEventListener('click', () => {
    plusSlides(-1);
  });

  rightArrow.addEventListener('click', () => {
    plusSlides(1);
  });
});

function addIconChangingListeners(){
    const movieCardButtons = document.querySelectorAll('.movie-card-button');

    movieCardButtons.forEach(function(movieCardButton) {

        let isAdded = false;

        movieCardButton.addEventListener('click', function() {
            const cardImg = this.querySelector('img');
            const cardDesc = this.querySelector('p');
            
            if (isAdded) {
                cardImg.src = 'Assets/Icon/bookmark.png';
                cardDesc.textContent = "Add to Watchlist";
                this.classList.remove('clicked');
                isAdded = false;
            } else {
                cardImg.src = 'Assets/Icon/bookmark (1).png'; // Adjusted for file name
                cardDesc.textContent = "Added to Watchlist";
                this.classList.add('clicked');
                isAdded = true;
            }
        });
    });
}

function addDraggableListeners() {
    var containers = document.querySelectorAll('.movie-category-container');

    containers.forEach(function(container) {
        var isDown = false;
        var startX;
        var scrollLeft;

        container.addEventListener('mousedown', function(event) {
            isDown = true;
            startX = event.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', function() {
            isDown = false;
        });

        container.addEventListener('mouseup', function() {
            isDown = false;
        });

        container.addEventListener('mousemove', function(event) {
            if (!isDown) return;
            event.preventDefault();
            var x = event.pageX - container.offsetLeft;
            var walk = (x - startX) * 1; // Adjust scrolling speed
            container.scrollLeft = scrollLeft - walk;
        });
    });
}

var movies = [
    {
      mainPoster: "https://i.ebayimg.com/images/g/wo0AAOSwM71eN1Zg/s-l1200.jpg",
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
      trailerURL: "https://www.youtube.com/embed/YqNYrYUiMfg?si=VN_WSCqYpXJNxiKk",
      category: "Top10"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
      title: "Spider-Man: No Way Home",
      rating: 8.2,
      year: 2021,
      duration: "2h 28m",
      synopsis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      type: "Film",
      genre: "Action",
      releaseDate: "13 December 2021",
      production: "Columbia Pictures, Marvel Studios, Pascal Pictures",
      director: "Jon Watts",
      cast: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, Tobey Maguire",
      trailerURL: "https://www.youtube.com/watch?v=rt-2cxAiPJk&ab_channel=SonyPicturesEntertainment",
      category: "Top10"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      title: "The Avengers",
      rating: "8.0",
      year: 2012,
      duration: "2h 23m",
      synopsis: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's dream team are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
      type: "Film",
      genre: "Action",
      releaseDate: "4 May 2012",
      production: "Marvel Studios",
      director: "Joss Whedon",
      cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Tom Hiddleston, Stellan Skarsgard, Samuel L. Jackson",
      trailerURL: "https://www.youtube.com/watch?v=eOrNdBpGMv8&ab_channel=MarvelEntertainment",
      category: "Top10"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
      title: "The Dark Knight",
      rating: "9.0",
      year: 2008,
      duration: "2h 32m",
      synopsis: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
      type: "Film",
      genre: "Action",
      releaseDate: "18 July 2008",
      production: "	Warner Bros. Pictures, Legendary Pictures, Syncopy[a]",
      director: "Christopher Nolan",
      cast: "Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, Morgan Freeman",
      trailerURL: "https://www.youtube.com/watch?v=LDG9bisJEaI&ab_channel=DC",
      category: "Top10"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
      title: "Titanic",
      rating: 7.9,
      year: 1997,
      duration: "3h 15m",
      synopsis: "James Cameron's Titanic is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the ship of dreams -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.",
      type: "Film",
      genre: "Adventure",
      releaseDate: "5 January 1998",
      production: "Paramount Pictures(United States and Canada), 20th Century Fox(International)",
      director: "James Cameron",
      cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates, Frances Fisher, Bernard Hill, Jonathan Hyde, Danny Nucci, David Warner, Bill Paxton",
      trailerURL: "https://www.youtube.com/watch?v=CHekzSiZjrY&ab_channel=20thCenturyStudios",
      category: "Top10"
    },
   {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
      title: "Frozen",
      rating: 7.4,
      year: 2013,
      duration: "1h 42m",
      synopsis: "When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter's cold grip.",
      type: "Film",
      genre: "Drama",
      releaseDate: "29 November 2013",
      production: "Walt Disney Pictures, Walt Disney Animation Studios",
      director: "Chris Buck, Jennifer Lee",
      cast: "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad, Santino Fontana",
      trailerURL: "https://www.youtube.com/watch?v=TbQm5doF_Uc",
      category: "Top10"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
      title: "The Lion King",
      rating: 8.5,
      year: 1994,
      duration: "1h 28m",
      synopsis: "This Disney animated feature follows the adventures of the young lion Simba (Jonathan Taylor Thomas), the heir of his father, Mufasa (James Earl Jones). Simba's wicked uncle, Scar (Jeremy Irons), plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests. But Simba escapes, and only Mufasa is killed. Simba returns as an adult (Matthew Broderick) to take back his homeland from Scar with the help of his friends Timon (Nathan Lane) and Pumbaa (Ernie Sabella).",
      type: "Film",
      genre: "Animation",
      releaseDate: "24 June 1994",
      production: "Walt Disney Pictures, Walt Disney Feature Animation",
      director: "Roger Allers, Rob Minkoff",
      cast: "	Jonathan Taylor Thomas, Matthew Broderick, James Earl Jones, Jeremy Irons, Moira Kelly, Ernie Sabella, Nathan Lane, Robert Guillaume, Rowan Atkinson, Whoopi Goldberg, Cheech Marin, Jim Cummings, Madge Sinclair",
      trailerURL: "https://youtube.com/watch?v=7TavVZMewpY&ab_channel=WaltDisneyStudios",
      category: "Top10"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/6/6e/Jurassic_World_poster.jpg",
      title: "Jurassic World",
      rating: 6.9,
      year: 2015,
      duration: "2h 4m",
      synopsis: "Located off the coast of Costa Rica, the Jurassic World luxury resort provides a habitat for an array of genetically engineered dinosaurs, including the vicious and intelligent Indominus rex. When the massive creature escapes, it sets off a chain reaction that causes the other dinos to run amok. Now, it's up to a former military man and animal expert (Chris Pratt) to use his special skills to save two young brothers and the rest of the tourists from an all-out, prehistoric assault.",
      type: "Film",
      genre: "Action",
      releaseDate: "10 June 2015",
      production: "Amblin Entertainment, Legendary Pictures, The Kennedy/Marshall Company[1]",
      director: "Colin Trevorrow",
      cast: "Chris Pratt, Bryce Dallas Howard, Vincent D'Onofrio, Ty Simpkins, Nick Robinson, Omar Sy, BD Wong, Irrfan Khan",
      trailerURL: "https://www.youtube.com/watch?v=RFinNxS5KN4&ab_channel=UniversalPictures",
      category: "Top10"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
      title: "Barbie",
      rating: 6.8,
      year: 2023,
      duration: "1h 54m",
      synopsis: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      type: "Film",
      genre: "Comedy",
      releaseDate: "21 July 2023",
      production: "Heyday Films, LuckyChap Entertainment, NB/GG Pictures, Mattel Films",
      director: "Greta Gerwig",
      cast: "Margot Robbie, Ryan Gosling, America Ferrera, Kate McKinnon, Issa Rae, Rhea Perlman, Will Ferrell",
      trailerURL: "https://www.youtube.com/watch?v=pBk4NYhWNMM&ab_channel=WarnerBros.Pictures",
      category: "Top10"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
      title: "The Conjuring",
      rating: 7.5,
      year: 2013,
      duration: "1h 52m",
      synopsis: "In 1970, paranormal investigators and demonologists Lorraine (Vera Farmiga) and Ed (Patrick Wilson) Warren are summoned to the home of Carolyn (Lili Taylor) and Roger (Ron Livingston) Perron. The Perrons and their five daughters have recently moved into a secluded farmhouse, where a supernatural presence has made itself known. Though the manifestations are relatively benign at first, events soon escalate in horrifying fashion, especially after the Warrens discover the house's macabre history.",
      type: "Film",
      genre: "Horror",
      releaseDate: "16 July 2013",
      production: "New Line Cinema, The Safran Company, Evergreen Media Group",
      director: "James Wan",
      cast: "Vera Farmiga, Patrick Wilson, Ron Livingston, Lili Taylor",
      trailerURL: "https://www.youtube.com/watch?v=k10ETZ41q5o&ab_channel=WarnerBros.Pictures",
      category: "Top10"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f7/The_Idea_of_You_film_poster.jpg",
      title: "The Idea of You",
      rating: 6.2,
      year: 2024,
      duration: "1h 56m",
      synopsis: "A 40-year-old single mum begins an unexpected romance with a 24-year-old boy band singer.",
      type: "Film",
      genre: "Romance",
      releaseDate: "16 March 2024",
      production: "Amazon MGM Studios, Somewhere Pictures, Welle Entertainment, I’ll Have Another, Belle Hope Productions",
      director: "Michael Showalter",
      cast: "Anne Hathaway, Nicholas Galitzine",
      trailerURL: "https://www.youtube.com/watch?v=V8i6PB0gGOA&ab_channel=PrimeVideo",
      category: "New"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/b/b2/Article_370_film_poster.jpeg",
      title: "Article 370",
      rating: 8.1,
      year: 2024,
      duration: "2h 38m",
      synopsis: "Article 370, which came into effect in October 1949, granted Kashmir autonomy of internal administration, allowing it to make its own laws in all matters except finance, defence, foreign affairs and communications.",
      type: "Film",
      genre: "Thriller",
      releaseDate: "23 February 2024",
      production: "B62 Studios",
      director: "Aditya Suhas Jambhale",
      cast: "Yami Gautam Dhar, Priya Mani",
      trailerURL: "https://www.youtube.com/watch?v=6Pf6RUmq7S0&t=2s&ab_channel=JioStudios",
      category: "New"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/2/26/Tillu_Square_Teaser.jpeg",
      title: "Tillu Square",
      rating: "7.0",
      year: 2024,
      duration: "2h 3m",
      synopsis: "One year after a love affair bound him up in a murder case, a foolish DJ has a one-night encounter that leads to even bigger kerfuffles related to his past.",
      type: "Film",
      genre: "Comedy",
      releaseDate: "29 March 2024",
      production: "Sithara Entertainments, Fortune Four Cinemas",
      director: "Mallik Ram",
      cast: "Siddhu Jonnalagadda, Anupama Parameswaran",
      trailerURL: "https://www.youtube.com/watch?v=JrdixTnMl8E&ab_channel=SitharaEntertainments",
      category: "New"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Yuva_Movie_Poster.jpg/330px-Yuva_Movie_Poster.jpg",
      title: "Yuva",
      rating: 5.8,
      year: 2024,
      duration: "2h 42m",
      synopsis: "Three men of vastly different backgrounds and ambitions are bound together after an accident on a bridge in Calcutta, India. Michael (Ajay Devgan) is a passionate youth working for a better India. Arjun (Vivek Oberoi) is blithe and materialistic, concerned only with striking it rich. And Lallan (Abhishek Bachchan) is a violent thug working for a corrupt politician. The fateful crossing highlights each man's outlook, forcing him to make difficult choices and ultimately risk his life.",
      type: "Film",
      genre: "Action",
      releaseDate: "29 March 2024",
      production: "Hombale Films",
      director: "Santhosh Ananddram",
      cast: "Yuva Rajkumar, Sapthami Gowda",
      trailerURL: "https://www.youtube.com/watch?v=9umBUqn9NeI&ab_channel=HombaleFilms",
      category: "New"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/d/dd/Rebel_Moon_%E2%80%93_Part_Two_The_Scargiver_poster.jpg",
      title: "Rebel Moon – Part Two: The Scargiver",
      rating: 5.2,
      year: 2024,
      duration: "2h 2m",
      synopsis: "A colony on the edge of the galaxy fights for survival against a tyrannical ruling force, relying on the efforts of a small group of rebels.",
      type: "Film",
      genre: "Action",
      releaseDate: "12 April 2024",
      production: "The Stone Quarry, Grand Electric",
      director: "Zack Snyder",
      cast: "Sofia Boutella, Djimon Hounsou, Ed Skrein, Michiel Huisman, Doona Bae, Ray Fisher, Staz Nair, Fra Fee, Elise Duffy, Anthony Hopkins",
      trailerURL: "https://www.youtube.com/watch?v=Cf16jEmvJUY&t=1s&ab_channel=Netflix",
      category: "New"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0d/Fabbricante_di_lacrime%2C_poster.jpg",
      title: "The Tearsmith",
      rating: 5.1,
      year: 2024,
      duration: "1h 35m",
      synopsis: "Growing up in a ghastly orphanage run by an abusive matron, Nica coped in the only way she could—by retreating to her imagination, where she lived out fantastical stories, especially about the Tearsmith, the man who makes tears, a terrifying figure who forges all the fears that dwell in people's hearts.",
      type: "Film",
      genre: "Romance",
      releaseDate: "4 April 2024",
      production: "Alessandro Usai, Iginio Straffi",
      director: "Alessandro Genovesi",
      cast: "Simone Baldasseroni, Caterina Ferioli, Sabrina Paravicini, Alessandro Bedetti, Roberta Rovelli, Orlando Cinque, Eco Andriolo, Nicky Passarella, Sveva Romana Candelletta",
      trailerURL: "https://www.youtube.com/watch?v=qEh_90RnlD8&t=2s&ab_channel=Netflix",
      category: "New"
    },
    {
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp62WljJw6JY1AtFrejcJ3GoEj-2GZVWGYFRn7HSX1ZvLhVIVN",
      title: "The Casagrandes Movie",
      rating: 5.6,
      year: 2024,
      duration: "1h 25m",
      synopsis: "After a surprise family trip to Mexico derails Ronnie Anne's birthday plans, she is determined to prove that she's old enough to do her own thing, even if it means confronting an ancient pre-teen demigod whose angst has apocalyptic potential.",
      type: "Film",
      genre: "Fantasy",
      releaseDate: "22 March 2024",
      production: "	Nickelodeon Movies, Mighty Studios, Nickelodeon Animation Studio",
      director: "Miguel Puga",
      cast: "Izabella Alvarez, Sumalee Montano, Paulina Chávez, Angélica Aragón, Sonia Manzano, Kate del Castillo, Alex Cazares, Carlos PenaVega, Carlos Alazraqui, Ruben Garfias, Leah Mei Gold, Alexa PenaVega, Cristo Fernández, Sergio Aragonés, Roxana Ortega, Jared Kozak",
      trailerURL: "https://www.youtube.com/watch?v=jOCIRd7kQZ8&ab_channel=NetflixAfterSchool",
      category: "New"
    },
    {
    posterURL: "https://d32qys9a6wm9no.cloudfront.net/images/tvs/poster/d5/e1e3db58fbea6f2dd7c0c7a9bb8d8da4_300x442.jpg?t=1713294776",
      title: "A Man in Full",
      rating: 4.6,
      year: 2024,
      duration: "38m–48m",
      synopsis: "Follows an Atlanta real estate mogul as he faces sudden bankruptcy, and tries to defend his empire from those attempting to capitalize on his fall from grace. A racially mixed, late-century boomtown full of fresh wealth and wily politicians.",
      type: "Series",
      genre: "Drama",
      releaseDate: "2 May 2024",
      production: "Royal Ties Productions, David E. Kelley Productions",
      director: "David E. Kelley",
      cast: "Jeff Daniels, Diane Lane, William Jackson Harper, Aml Ameen, Tom Pelphrey, Sarah Jones, Jon Michael Hill, Chanté Adams, Lucy Liu, Bill Camp, Evan Roe",
      trailerURL: "https://www.youtube.com/watch?v=S9bF4X38O0o&ab_channel=Netflix",
      category: "New"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/e/e2/Queen_of_Tears_poster.png",
      title: "Queen of Tears",
      rating: 8.4,
      year: 2024,
      duration: "1h 16m",
      synopsis: "The series depicts the dizzying crisis and miraculous rekindling of love between Hong Hae-in, a third-generation chaebol heiress of Queens Group, and Baek Hyun-woo, the son of farmers from Yongdu-ri, and their three years of marriage.",
      type: "Series",
      genre: "Romance",
      releaseDate: "9 March 2024",
      production: "Studio Dragon, Culture Depot, Showrunners",
      director: "Jang Young-woo [ko], Kim Hee-won",
      cast: "Kim Soo-hyun, Kim Ji-won",
      trailerURL: "https://www.youtube.com/watch?v=Gg2D8zrzlOA&ab_channel=NetflixK-Content",
      category: "New"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/15/Night_swim_poster.jpg",
      title: "Night Swim",
      rating: 4.7,
      year: 2024,
      duration: "1h 38m",
      synopsis: "Forced into early retirement by a degenerative illness, former baseball player Ray Waller moves into a new house with his wife and two children. He hopes that the backyard swimming pool will be fun for the kids and provide physical therapy for himself. However, a dark secret from the home's past soon unleashes a malevolent force that drags the family into the depths of inescapable terror.",
      type: "Film",
      genre: "Fantasy",
      releaseDate: "5 January 2024",
      production: "Blumhouse Productions, Atomic Monster",
      director: "Bryce McGuire",
      cast: "Wyatt Russell, Kerry Condon",
      trailerURL: "https://www.youtube.com/watch?v=pcSNqteCEtE&ab_channel=UniversalPictures",
      category: "New"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/e/e2/Queen_of_Tears_poster.png",
      title: "Queen of Tears",
      rating: 8.4,
      year: 2024,
      duration: "1h 16m",
      synopsis: "The series depicts the dizzying crisis and miraculous rekindling of love between Hong Hae-in, a third-generation chaebol heiress of Queens Group, and Baek Hyun-woo, the son of farmers from Yongdu-ri, and their three years of marriage.",
      type: "Series",
      genre: "Romance",
      releaseDate: "9 March 2024",
      production: "Studio Dragon, Culture Depot, Showrunners",
      director: "Jang Young-woo [ko], Kim Hee-won",
      cast: "Kim Soo-hyun, Kim Ji-won",
      trailerURL: "https://www.youtube.com/watch?v=Gg2D8zrzlOA&ab_channel=NetflixK-Content",
      category: "TopRatedSeries"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/6/67/Lovely_Runner.png",
      title: "Lovely Runner",
      rating: 9.8,
      year: 2024,
      duration: "1h 10m",
      synopsis: "The series follows the journey of Im Sol, an ardent fan of idol Ryu Sun-jae. Sol, a once-promising film director whose dreams were shattered by an accident leaving her paralyzed, finds solace in the music of Sun-jae. However, tragedy strikes again when Sun-jae died in a tragic accident, leaving Sol devastated ",
      type: "Series",
      genre: "Fantasy",
      releaseDate: "8 April 2024",
      production: "Bon Factory",
      director: "Yoon Jong-ho, Kim Tae-yeop",
      cast: "Byeon Woo-seok, Kim Hye-yoon",
      trailerURL: "https://www.youtube.com/watch?v=5kk0dYa8Ccc&ab_channel=CJENMGlobal",
      category: "TopRatedSeries"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/7/7d/At_Eighteen-poster.jpg",
      title: "At Eighteen",
      rating: 9.4,
      year: 2019,
      duration: "1h 10m",
      synopsis: "18-year-old Choi Joon-Woo (Ong Seong-Wu) has gotten used to being lonely. He is not good at expressing his emotions, but he has a cute side. He transfers to a new school where he meets Yoo Soo-Bin (Kim Hyang-Gi). She is a top student, but her life is controlled by her mother.",
      type: "Series",
      genre: "Drama",
      releaseDate: "22 July 2019",
      production: "Drama House, KeyEast",
      director: "Shim Na-yeon",
      cast: "Ong Seong-wu, Kim Hyang-gi, Shin Seung-ho, Kang Ki-young",
      trailerURL: "https://www.youtube.com/watch?v=qLup8QT2PJI&ab_channel=ViuSingapore",
      category: "TopRatedSeries"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/id/e/e0/Excellent_Shaman_Ga_Doo-shim.jpg",
      title: "The Great Shaman Ga Doo-shim",
      rating: 9.6,
      year: 2021,
      duration: "20m",
      synopsis: "Ga Doo-shim (Kim Sae-ron), an 18-year-old girl born with the fate of becoming a shaman, tries to live a normal life. Her grandmother told her if she manages to survive being 18, she can live a normal life thereafter.",
      type: "Series",
      genre: "Fantasy",
      releaseDate: "30 July 2021",
      production: "MAYS Entertainment",
      director: "Park Ho-jin",
      cast: "Kim Sae-ron, Nam Da-reum",
      trailerURL: "https://www.youtube.com/watch?v=9DnN_g24Odg&ab_channel=VikiGlobalTV",
      category: "TopRatedSeries"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/11/Beauty_and_the_Devoted.png",
      title: "Beauty and Mr. Romantic",
      rating: 7.7,
      year: 2024,
      duration: "1h 10m",
      synopsis: "A producer tries to help his actress lover regain success after a major career setback. A family's struggles unveil secrets, leading to revenge, reconciliation, and justice. A producer tries to help his actress lover regain success after a major career setback.",
      type: "Series",
      genre: "Romance",
      releaseDate: "23 March 2024",
      production: "RaemongRaein",
      director: "Hong Seok-gu",
      cast: "Im Soo-hyang, Ji Hyun-woo",
      trailerURL: "https://www.youtube.com/watch?v=Fkcw_Kb8YK0&ab_channel=LoveBreak_Official",
      category: "TopRatedSeries"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f2/Private_Lives.jpg",
      title: "Private Lives",
      rating: 6.5,
      year: 2020,
      duration: "1h 10m",
      synopsis: "Swindlers come across a secret of the nation and try to reveal the secret. They must go up against a large company by using all of their skills. Lee Jeong-Hwan (Ko Gyung-Pyo) is a team leader for the major corporation. He looks like an ordinary company employee, but he is a mysterious figure. Cha Joo-Eun (Seohyun) is a swindler, who has the looks of a sweet & innocent woman. She supports herself with her crimes. Jeong Bok-Gi (Kim Hyo-Jin) is a professional swindler. She often targets other swindlers. She is elegant and also charismatic. Kim Jae-Wook (Kim Young-Min) is Jeong Bok-Gi’s partner in crime.",
      type: "Series",
      genre: "Drama",
      releaseDate: "7 October 2020",
      production: "Doremi Entertainment",
      director: "Nam Jun hyuk",
      cast: "Seohyun, Go Kyung-pyo, Kim Hyo-jin, Kim Young-min, Tae Won-seok",
      trailerURL: "https://www.youtube.com/watch?v=7DWO8cwUOp0&ab_channel=MyKdrama",
      category: "TopRatedSeries"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2c/Agency_TV_series.jpg",
      title: "Agency",
      rating: 7.8,
      year: 2023,
      duration: "60m-72m",
      synopsis: "An office drama depicting a woman who became the first female executive in her group to make her career beyond her first to the highest position. In the background of an advertising agency, it contains realistic stories of the daily lives of those who live a life like war and behind the scenes in the industry.",
      type: "Series",
      genre: "Drama",
      releaseDate: "7 January 2023",
      production: "How Pictures, Drama House, SLL",
      director: "Lee Chang-min",
      cast: "Lee Bo-young, Son Na-eun, Jo Sung-ha, Han Joon-woo",
      trailerURL: "https://www.youtube.com/watch?v=ZwJqlGEk13E&ab_channel=OnlyKDrama",
      category: "TopRatedSeries"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bd/My_Man_Is_Cupid.jpg",
      title: "My Man Is Cupid",
      rating: 7.9,
      year: 2023,
      duration: "1h",
      synopsis: "A cupid from 500 years awaiting his release meets a woman born with no red thread of love for all her incarnations. What would happen when they take an interest in each other amidst a series of serial killings and a complicated past life?",
      type: "Series",
      genre: "Romance",
      releaseDate: "1 December 2023",
      production: "HB Entertainment",
      director: "Nam Tae-jin",
      cast: "Jang Dong-yoon, Nana, Park Ki-woong",
      trailerURL: "https://www.youtube.com/watch?v=RLBZVHsTu7E&ab_channel=PrimeVideoIndonesia",
      category: "TopRatedSeries"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png",
      title: "My Hero Academia",
      rating: 8.3,
      year: 2016,
      duration: "20m",
      synopsis: "The story follows Izuku Midoriya, a boy born without superpowers in a world where they are the norm, but who still dreams of becoming a superhero himself, and is scouted by the world's greatest hero, All Might, who shares his powers with Izuku after recognizing his value and enrolls him in a prestigious high school for superheroes in training.",
      type: "Series",
      genre: "Animation",
      releaseDate: "3 April 2016",
      production: "Bones Studio",
      director: "Kenji Nagasaki, Tomo Okubo, Masahiro Mukai, Naomi Nakayama ",
      cast: "Daiki Yamashita(Izuku Midoriya), Masamichi Kitada(Kamui Woods), Nobuhiko Okamoto(Katsuki Bakugo), Yuki Kaji(Shoto Todoroki), Ayane Sakura(Ochaco Uraraka)",
      trailerURL: "https://www.youtube.com/watch?v=EPVkcwyLQQ8&ab_channel=AnimeBlurayUK",
      category: "TopRatedSeries"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f3/Hello%2C_Me%21.jpg",
      title: "Hello, Me!",
      rating: 7.3,
      year: 2021,
      duration: "1h 10m",
      synopsis: "Hello, Me! tells the story of Bahn Ha-ni who, one day, meets her enthusiastic, passionate and fearless 17-year-old self. With her younger self, she heals her wounds and learns how to love again.",
      type: "Series",
      genre: "Romance",
      releaseDate: "17 February 2021",
      production: "Beyond J, Acemaker Movieworks",
      director: "Lee Hyun-seok",
      cast: "Choi Kang-hee, Kim Young-kwang, Lee Re, Eum Moon-suk",
      trailerURL: "https://www.youtube.com/watch?v=0tLPYOmg4kA&ab_channel=NetflixK-Content",
      category: "TopRatedSeries"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/4/4f/Insidious_the_red_door.png",
      title: "Insidious: The Red Door",
      rating: 5.5,
      year: 2023,
      duration: "1h 47m",
      synopsis: "Josh Lambert heads east to drop his son, Dalton, off at school. However, Dalton's college dream soon becomes a living nightmare when the repressed demons of his past suddenly return to haunt them both.",
      type: "Film",
      genre: "Horror",
      releaseDate: "7 July 2023",
      production: "Screen Gems, Stage 6 Films, Blumhouse Productions",
      director: "Patrick Wilson",
      cast: "Ty Simpkins, Patrick Wilson, Sinclair Daniel, Hiam Abbass, Rose Byrne",
      trailerURL: "https://www.youtube.com/watch?v=ZuQuOnYnr3Q&ab_channel=SonyPicturesEntertainment",
      category: "Watchlist"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/d/d4/Uncharted_Official_Poster.jpg",
      title: "Uncharted",
      rating: 6.3,
      year: 2022,
      duration: "1h 56m",
      synopsis: "Treasure hunter Victor 'Sully' Sullivan recruits street-smart Nathan Drake to help him recover a 500-year-old lost fortune amassed by explorer Ferdinand Magellan. What starts out as a heist soon becomes a globe-trotting, white-knuckle race to reach the prize before the ruthless Santiago Moncada can get his hands on it. If Sully and Nate can decipher the clues and solve one of the world's oldest mysteries, they stand to find $5 billion in treasure -- but only if they can learn to work together.",
      type: "Film",
      genre: "Adventure",
      releaseDate: "16 February 2022",
      production: "Columbia Pictures, PlayStation Productions, Atlas Entertainment, Arad Productions",
      director: "Ruben Fleischer",
      cast: "Tom Holland, Mark Wahlberg, Sophia Ali, Tati Gabrielle, Antonio Banderas",
      trailerURL: "https://www.youtube.com/watch?v=eHp3MbsCbMg&ab_channel=SonyPicturesEntertainment",
      category: "Watchlist"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/4/4a/Aquaman_and_the_Lost_Kingdom_poster.jpg",
      title: "Aquaman and the Lost Kingdom",
      rating: 5.6,
      year: 2023,
      duration: "2h 4m",
      synopsis: "After failing to defeat Aquaman the first time, Black Manta wields the power of the mythic Black Trident to unleash an ancient and malevolent force. Hoping to end his reign of terror, Aquaman forges an unlikely alliance with his brother, Orm, the former king of Atlantis. Setting aside their differences, they join forces to protect their kingdom and save the world from irreversible destruction.",
      type: "Film",
      genre: "Action",
      releaseDate: "22 December 2023",
      production: "DC Studios, Atomic Monster, The Safran Company, Domain Entertainment",
      director: "James Wan",
      cast: "Jason Momoa, Patrick Wilson, Amber Heard, Yahya Abdul-Mateen II, Randall Park, Dolph Lundgren, Temuera Morrison, Martin Short, Nicole Kidman",
      trailerURL: "https://www.youtube.com/watch?v=FV3bqvOHRQo&ab_channel=DC",
      category: "Watchlist"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/3/34/TheNunPoster.jpg",
      title: "The Nun",
      rating: 5.3,
      year: 2018,
      duration: "1h 36m",
      synopsis: "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the order's unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of a demonic nun.",
      type: "Film",
      genre: "Horror",
      releaseDate: "5 September 2018",
      production: "New Line Cinema, Atomic Monster, The Safran Company",
      director: "Corin Hardy",
      cast: "Demián Bichir, Taissa Farmiga, Jonas Bloquet",
      trailerURL: "https://www.youtube.com/watch?v=pzD9zGcUNrw&ab_channel=WarnerBros.Pictures",
      category: "Watchlist"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/9/90/Wonka_2023_film_poster.jpg",
      title: "Wonka",
      rating: "7.0",
      year: 2023,
      duration: "1h 56m",
      synopsis: "Armed with nothing but a hatful of dreams, young chocolatier Willy Wonka manages to change the world, one delectable bite at a time.",
      type: "Film",
      genre: "Comedy",
      releaseDate: "8 December 2028",
      production: "Village Roadshow Pictures, The Roald Dahl Story Company, Heyday Films, Domain Entertainment",
      director: "Paul King",
      cast: "Timothée Chalamet, Calah Lane, Keegan-Michael Key, Paterson Joseph, Matt Lucas, Mathew Baynton, Sally Hawkins, Rowan Atkinson, Jim Carter, Olivia Colman, Hugh Grant",
      trailerURL: "https://www.youtube.com/watch?v=otNh9bTjXWg&ab_channel=WarnerBros.Pictures",
      category: "Watchlist"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/5/5c/Fair_play_2023poster.png",
      title: "Fair Play",
      rating: 6.4,
      year: 2023,
      duration: "1h 53m",
      synopsis: "An unexpected promotion at a cutthroat hedge fund pushes a newly engaged couple's relationship to the brink.",
      type: "Film",
      genre: "Thriller",
      releaseDate: "20 January 2023",
      production: "T-Street, Star Thrower Entertainment, MRC",
      director: "Chloe Domont",
      cast: "Phoebe Dynevor, Alden Ehrenreich, Eddie Marsan, Rich Sommer",
      trailerURL: "https://www.youtube.com/watch?v=vICUPlr3EEI&ab_channel=Netflix",
      category: "Watchlist"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
      title: "Parasite",
      rating: 8.5,
      year: 2019,
      duration: "2h 11m",
      synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      type: "Film",
      genre: "Thriller",
      releaseDate: "21 June 2019",
      production: "Barunson E&A",
      director: "Bong Joon-ho",
      cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, Jang Hye-jin",
      trailerURL: "https://www.youtube.com/watch?v=isOGD_7hNIY&ab_channel=NEON",
      category: "Watchlist"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/3/36/ExorcistBelieverPoster.jpg",
      title: "The Exorcist: Believer",
      rating: 4.8,
      year: 2023,
      duration: "1h 51m",
      synopsis: "When his daughter, Angela, and her friend Katherine, show signs of demonic possession, it unleashes a chain of events that forces single father Victor Fielding to confront the nadir of evil. Terrified and desperate, he seeks out Chris MacNeil, the only person alive who's witnessed anything like it before.",
      type: "Film",
      genre: "Horror",
      releaseDate: "6 October 2023",
      production: "Blumhouse Productions, Morgan Creek Entertainment, Rough House Pictures",
      director: "David Gordon Green",
      cast: "Leslie Odom Jr., Lidya Jewett, Olivia O’Neill, Jennifer Nettles, Norbert Leo Butz, Ann Dowd, Ellen Burstyn",
      trailerURL: "https://www.youtube.com/watch?v=PIxpPMyGcpU&ab_channel=UniversalPictures",
      category: "Watchlist"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0d/City_Couple%E2%80%99s_Way_of_Love_My_Lovable_Camera_Thief.jpg",
      title: "Lovestruck in the City",
      rating: 7.6,
      year: 2020,
      duration: "28m-40m",
      synopsis: "Heart stolen by a free-spirited woman after a beachside romance, a passionate architect sets out to reunite with her on the streets of Seoul. Heart stolen by a free-spirited woman after a beachside romance, a passionate architect sets out to reunite with her on the streets of Seoul.",
      type: "Series",
      genre: "Romance",
      releaseDate: "16 February 2021",
      production: "Kakao M, Story & Pictures Media",
      director: "Park Shin-woo",
      cast: "Ji Chang-wook, Kim Ji-won, Kim Min-seok, Han Ji-eun, Ryu Kyung-soo, So Joo-yeon",
      trailerURL: "https://www.youtube.com/watch?v=c_LSBRJB3wE&ab_channel=NetflixK-Content",
      category: "Watchlist"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/7/7f/Kung_Fu_Panda_4_poster.jpg",
      title: "Kung Fu Panda 4",
      rating: 6.3,
      year: 2024,
      duration: "1h 34m",
      synopsis: "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, when a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes he's going to need some help. Teaming up with a quick-witted corsac fox, Po soon discovers that heroes can be found in the most unexpected places.",
      type: "Film",
      genre: "Adventure",
      releaseDate: "3 March 2024",
      production: "DreamWorks Animation",
      director: "Mike Mitchell",
      cast: "Jack Black, Awkwafina, Bryan Cranston, James Hong, Ian McShane, Ke Huy Quan, Dustin Hoffman, Viola Davis",
      trailerURL: "https://www.youtube.com/watch?v=_inKs4eeHiI&ab_channel=UniversalPictures",
      category: "Watchlist"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/d/d6/Five_Nights_At_Freddy%27s_poster.jpeg",
      title: "Five Nights at Freddys",
      rating: 5.5,
      year: 2023,
      duration: "1h 49m",
      synopsis: "A troubled security guard begins working at Freddy Fazbear's Pizzeria. While spending his first night on the job, he realizes the late shift at Freddy's won't be so easy to make it through.",
      type: "Film",
      genre: "Horror",
      releaseDate: "25 October 2023",
      production: "Blumhouse Productions, Scott Cawthon Productions",
      director: "Emma Tammi",
      cast: "Josh Hutcherson, Elizabeth Lail, Piper Rubio, Mary Stuart Masterson, Matthew Lillard",
      trailerURL: "https://www.youtube.com/watch?v=0VH9WCFV6XQ&ab_channel=UniversalPictures",
      category: "History"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      title: "Interstellar",
      rating: 8.7,
      year: 2014,
      duration: "2h 49m",
      synopsis: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
      type: "Film",
      genre: "Adventure",
      releaseDate: "6 November 2014",
      production: "Paramount Pictures, Warner Bros. Pictures, Legendary Pictures, Syncopy Inc., Lynda Obst Productions",
      director: "Christopher Nolan",
      cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastai, Bill Irwin, Ellen Burstyn, Michael Caine",
      trailerURL: "https://www.youtube.com/watch?v=zSWdZVtXT7E&ab_channel=WarnerBros.UK%26Ireland",
      category: "History"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/a/ad/Spy_%C3%97_Family_Code_White_movie_poster.png",
      title: "Spy × Family Code: White",
      rating: 7.4,
      year: 2023,
      duration: "1h 50m",
      synopsis: "A spy and an assassin keep their double lives to themselves while pretending to be the perfect family.",
      type: "Film",
      genre: "Comedy",
      releaseDate: "22 December 2023",
      production: "Wit Studio, CloverWorks",
      director: "Takashi Katagiri",
      cast: "Takuya Eguchi, Atsumi Tanezaki, Saori Hayami, Kenichiro Matsuda",
      trailerURL: "https://www.youtube.com/watch?v=m5TxWbtQ7qU&ab_channel=SonyPicturesEntertainment",
      category: "History"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/7/75/The_Spies_Who_Loved_Me.jpg",
      title: "The Spy Who Loved Me",
      rating: 6.4,
      year: 2020,
      duration: "1h 10m",
      synopsis: "In a globe-trotting assignment that has him skiing off the edges of cliffs and driving a car deep underwater, British super-spy James Bond (Roger Moore) unites with sexy Russian agent Anya Amasova (Barbara Bach) to defeat megalomaniac shipping magnate Karl Stromberg (Curt Jurgens), who is threatening to destroy New York City with nuclear weapons. Bond's most deadly adversary on the case is Stromberg's henchman, Jaws (Richard Kiel), a seven-foot giant with terrifying steel teeth.",
      type: "Series",
      genre: "Romance",
      releaseDate: "21 October 2020",
      production: "Story & Pictures Media",
      director: "Lee Jae-jin",
      cast: "Eric Mun, Yoo In-na, Lim Ju-hwan",
      trailerURL: "https://www.youtube.com/watch?v=UBxG_TJvYTg&ab_channel=RottenTomatoesClassicTrailers",
      category: "History"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/4/4d/20th_Century_Girl.jpg",
      title: "20th Century Girl",
      rating: 7.3,
      year: 2022,
      duration: "1h 59m",
      synopsis: "A teen girl has her eyes set on a boy for her lovesick best friend. However, things become complicated when she falls in love and is forced to choose between love and friendship.",
      type: "Film",
      genre: "Romance",
      releaseDate: "6 October 2022",
      production: "Yong Film",
      director: "Bang Woo-ri",
      cast: "Kim Yoo-jung, Byeon Woo-seok, Park Jung-woo, Roh Yoon-seo",
      trailerURL: "https://www.youtube.com/watch?v=KFS4_qevE7M&ab_channel=NetflixK-Content",
      category: "History"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/6/6b/WildCard.2015.png",
      title: "Wild Card",
      rating: 5.6,
      year: 2015,
      duration: "1h 32m",
      synopsis: "A bodyguard (Jason Statham) goes after the sadistic thug who beat his friend, only to find that the object of his wrath is the son of a powerful mob boss.",
      type: "Film",
      genre: "Action",
      releaseDate: "30 January 2015",
      production: "Current Entertainment, Quad Films, SJ Pictures, Sierra/Affinity",
      director: "Simon West",
      cast: "Jason Statham, Stanley Tucci, Sofia Vergara, Milo Ventimiglia, Michael Angarano, Anne Heche, Jason Alexander, Hope Davis, Max Casella, Dominik Garcia-Lorido, Cedric the Entertainer",
      trailerURL: "https://www.youtube.com/watch?v=7fJGbTfFPkM&ab_channel=RottenTomatoesTrailers",
      category: "History"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/1/19/Rebel_moon_part1_poster.jpg",
      title: "Rebel Moon",
      rating: 5.6,
      year: 2023,
      duration: "2h 14m",
      synopsis: "When a colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch a young woman with a mysterious past to seek out warriors from neighbouring planets to help them take a stand.",
      type: "Film",
      genre: "Action",
      releaseDate: "15 December 2023",
      production: "The Stone Quarry, Grand Electric",
      director: "Zack Snyder",
      cast: "Sofia Boutella, Djimon Hounsou, Ed Skrein, Michiel Huisman, Doona Bae, Ray Fisher, Charlie Hunnam, Anthony Hopkins",
      trailerURL: "https://www.youtube.com/watch?v=fhr3MzT6exg&ab_channel=Netflix",
      category: "History"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg",
      title: "Weathering with You",
      rating: 7.5,
      year: 2019,
      duration: "1h 52m",
      synopsis: "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
      type: "Film",
      genre: "Animation",
      releaseDate: "19 July 2019",
      production: "CoMix Wave Films, Story Inc.",
      director: "Makoto Shinkai",
      cast: "Kotaro Daigo, Nana Mori",
      trailerURL: "https://www.youtube.com/watch?v=Q6iK6DjV_iE&ab_channel=GKIDSFilms",
      category: "History"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
      title: "A Silent Voice",
      rating: 8.9,
      year: 2016,
      duration: "2h 9m",
      synopsis: "A grade-school student with a hearing impairment is bullied and transfers to another school. Years later, the former bully is tormented by his behaviour and sets out to make amends.",
      type: "Film",
      genre: "Animation",
      releaseDate: "17 September 2016",
      production: "Kyoto Animation",
      director: "Naoko Yamada",
      cast: "Miyu Irino, Saori Hayami, Aoi Yuki, Kensho Ono, Yuki Kaneko, Yui Ishikawa, Megumi Han, Toshiyuki Toyonaga, Mayu Matsuoka",
      trailerURL: "https://www.youtube.com/watch?v=nfK6UgLra7g&ab_channel=CrunchyrollStoreAustralia",
      category: "History"
    },
    {
    posterURL: "https://upload.wikimedia.org/wikipedia/en/6/6e/DescendantsoftheSun.jpg",
      title: "Descendants of the Sun",
      rating: 8.2,
      year: 2016,
      duration: "1h",
      synopsis: "This drama tells of the love story that develops between a surgeon and a special forces officer. Some relationships are fated, despite the challenges of time and place.",
      type: "Series",
      genre: "Drama",
      releaseDate: "24 February 2016",
      production: "KBS, Next Entertainment World",
      director: "Lee Eung-bok; Baek Sang-hoon",
      cast: "Song Joong-ki, Song Hye-kyo, Jin Goo, Kim Ji-won",
      trailerURL: "https://www.youtube.com/watch?v=wTGwjDqtfzQ&ab_channel=VikiGlobalTV",
      category: "History"
    },
  ];

var categories = [
    {
        category: "Top10",
        title: "Discover the Top 10 BlockBusters!"
    },
    {
        category: "New",
        title: "Check Out the Newest Films!"
    },
    {
        category: "TopRatedSeries",
        title: "Top-Rated TV-Series You Can't Miss!"
    },
    {
        category: "Watchlist",
        title: "My Watchlist"
    },
    {
        category: "History",
        title: "Continue Watching"
    }
];

categories.forEach(categoryInfo => {
    const categoryMovies = movies.filter(movie => movie.category === categoryInfo.category); // Get up to 10 movies for each category

    const movieCardsHTML = categoryMovies.map(movie => `
        <div class="movie-card-container">
            <img class="movie-card-poster" src="${movie.posterURL}" alt="${movie.title}" width="272" height="170">
            <img onclick="goToMovieDetail('${movie.title}')" class="movie-card-play" src="Assets/Icon/PlayButton.png" alt="">
            <div class="movie-card-rating-section">
                <img src="Assets/Icon/star (1).png" alt="">
                <p class="lexend">${movie.rating}</p>
            </div>
            <p onclick="goToMovieDetail('${movie.title}')" class="movie-card-title lexend">${movie.title}</p>
            <div class="movie-card-button">
                <img src="Assets/Icon/bookmark.png" alt="">
                <p class="lexend">Add to Watchlist</p>
            </div>
        </div>
    `).join('');

    const allMoviesSection = document.querySelector('.all-movies-section');
    
    const categoryHTML = `
        <div class="all-movie-list">
            <p class="main-category-title lexend">${categoryInfo.title}</p>
            <div class="movie-category-container">
                ${movieCardsHTML}
            </div>
        </div>
    `;
    allMoviesSection.insertAdjacentHTML('beforeend', categoryHTML);
    addIconChangingListeners();
    addDraggableListeners();
});








window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

let menu = document.querySelector('#icon');
let navbar = document.querySelector('.navigation');
let dropdown = document.querySelector('.dropdown');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('nyala');
  dropdown.classList.remove('active'); 
}

dropdown.onclick = (event) => {
  event.stopPropagation();
  dropdown.classList.toggle('active');
}

if (window.matchMedia('(min-width: 1000px)').matches) {
  dropdown.onclick = (event) => {
      event.stopPropagation();
      dropdown.classList.toggle('active');
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search input[type="text"]');

  searchInput.addEventListener('input', function() {
      if (searchInput.value.trim() !== '') {
          searchInput.classList.add('expanded');
      } else {
          searchInput.classList.remove('expanded');
      }
  });

  var profileIcon = document.getElementById('profileIcon');
  var dropdownMenu = document.getElementById('dropdownMenu');

  profileIcon.addEventListener('click', function () {
      dropdownMenu.classList.toggle('show');
      setTimeout(function() {
          dropdownMenu.classList.toggle('opacity-transition');
      }, 1);
  });

  document.addEventListener('click', function (e) {
      if (!dropdownMenu.contains(e.target) && !profileIcon.contains(e.target)) {
          dropdownMenu.classList.remove('show');
      }
  });




  let dropdown = document.querySelector('.dropdown');
  let categoryDropdown = document.querySelector('.dropdown-content');

  function toggleDropdown() {
      categoryDropdown.classList.toggle('active');
  }

  dropdown.addEventListener('click', function(event) {
      event.stopPropagation();
      toggleDropdown();
  });

  document.addEventListener('click', function (e) {
      if (!categoryDropdown.contains(e.target) && !dropdown.contains(e.target)) {
          categoryDropdown.classList.remove('active');
      }
  });
  categoryDropdown.addEventListener('click', function(event) {
      event.stopPropagation();
  });

});






