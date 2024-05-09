textarea = document.querySelector("#autoresizing");
textarea.addEventListener('input', autoResize, false);
 
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

function toggleButton() {
    var commentText = document.getElementsByClassName('comment-text')[0].value;
    var postButton = document.getElementById('post-button');

    if (commentText.trim() === "") {
        postButton.disabled = true;
    } else {
        postButton.disabled = false;
    }
}

function toggleButtonpopup() {
  var commentText = document.getElementsByClassName('comment-text-popup')[0].value;
  var postButton = document.getElementById('post-button-popup');

  if (commentText.trim() === "") {
      postButton.disabled = true;
  } else {
      postButton.disabled = false;
  }
}

function toggleReplyButton(){
    var commentText = document.getElementsByClassName('reply-comment-text')[0].value;
    var replyButton = document.getElementById('reply-button');
  
    if(commentText.trim() === ""){
      replyButton.disabled = true;
    } else {
      replyButton.disabled = false;
    }
  }

function addLikeCounter(){
    // Get all elements with the class 'comment-like-section'
  const commentLikeSections = document.querySelectorAll('.comment-like-section');
  // alert(commentLikeSections.length);
// Loop through each comment-like-section element
  commentLikeSections.forEach(commentLikeSection => {
    let isLiked = false;

    // Add click event listener to toggle like
    commentLikeSection.addEventListener('click', function(){
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if(isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like.png';
            // commentLikeCount.textContent = parseInt(commentLikeCount.textContent) - 1;
            if(commentLikeCount.textContent === "1"){
              commentLikeCount.textContent = 0;
            }
            else if(commentLikeCount.textContent === "4"){
              commentLikeCount.textContent = 3;
            }
            commentLikeCount.style.color = "#FFFFFF";
            isLiked = false;
        }
        else {
            commentLikeIcon.src = 'Assets/Icon/like (1).png';
            // commentLikeCount.textContent = parseInt(commentLikeCount.textContent) + 1;
            if(commentLikeCount.textContent === "0"){
              commentLikeCount.textContent = 1;
            }
            else if(commentLikeCount.textContent === "3"){
              commentLikeCount.textContent = 4;
            }
            commentLikeCount.style.color = "#47B5FF";
            isLiked = true;
        }
    });

    // Add mouseover event listener to change icon and count color
    commentLikeSection.addEventListener('mouseover', function() {
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if (!isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like (1).png';
            commentLikeCount.style.color = "#47B5FF";
        }
    });

    // Add mouseout event listener to change icon and count color
    commentLikeSection.addEventListener('mouseout', function() {
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if (!isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like.png';
            commentLikeCount.style.color = "#FFFFFF";
        }
    });
  });
};

addLikeCounter();

function addLikeCounterForPostedReply(){
  // Get all elements with the class 'comment-like-section'
  const commentLikeSections = document.querySelectorAll('.posted-reply-like-counter');

  // Loop through each comment-like-section element
  commentLikeSections.forEach(commentLikeSection => {
  let isLiked = false;

  // Add click event listener to toggle like
    commentLikeSection.addEventListener('click', function(){
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if(isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like.png';
            // commentLikeCount.textContent = parseInt(commentLikeCount.textContent) - 1;
            if(commentLikeCount.textContent === "1"){
              commentLikeCount.textContent = 0;
            }
            else if(commentLikeCount.textContent === "4"){
              commentLikeCount.textContent = 3;
            }
            commentLikeCount.style.color = "#FFFFFF";
            isLiked = false;
        }
        else {
            commentLikeIcon.src = 'Assets/Icon/like (1).png';
            // commentLikeCount.textContent = parseInt(commentLikeCount.textContent) + 1;
            if(commentLikeCount.textContent === "0"){
              commentLikeCount.textContent = 1;
            }
            else if(commentLikeCount.textContent === "3"){
              commentLikeCount.textContent = 4;
            }
            commentLikeCount.style.color = "#47B5FF";
            isLiked = true;
        }
    });

    // Add mouseover event listener to change icon and count color
    commentLikeSection.addEventListener('mouseover', function() {
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if (!isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like (1).png';
            commentLikeCount.style.color = "#47B5FF";
        }
    });

    // Add mouseout event listener to change icon and count color
    commentLikeSection.addEventListener('mouseout', function() {
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if (!isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like.png';
            commentLikeCount.style.color = "#FFFFFF";
        }
    });
  });
};

function postComment() {
  var postedCommentsDisplay = document.getElementById('posted-comments').style.display;
  var commentsDemoDisplay = document.getElementById('comments-demo').style.display;

  if (postedCommentsDisplay === 'none' && commentsDemoDisplay === 'none') {
    document.getElementById('posted-comments').style.display = 'block';
    document.getElementById('comments-demo').style.display = 'block';
    document.getElementById('search-Msg').style.display = 'none';
    document.getElementById('Temporary-comment').innerHTML = '';
  }

  var commentText = document.getElementsByClassName('comment-text')[0].value;
  var imagePreviewContainer = document.getElementById('imagePreviewContainer');
  var imagePreview = '';

  if (imagePreviewContainer.innerHTML.trim() !== '') {
    var previewImage = document.getElementById('previewImage');
    if (previewImage) {
      imagePreview = previewImage.src;
    }
  }

  var currentDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];
  var formattedDate = currentDate.getHours().toString().padStart(2, '0') + ":" + currentDate.getMinutes().toString().padStart(2, '0') + " - " + currentDate.getDate() + " " + monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();

  var newCommentSection = document.createElement("div");
  newCommentSection.classList.add("comment-1");

  if (imagePreview !== '') {
    newCommentSection.innerHTML = `
        <div class="Thread-list">
            <img class="Profile-pic" src="Assets/Icon/profilepicture.png">
            <div class="Thread-information">
                <p id="Thread-name">You</p>
                <p id="Thread-time">${formattedDate}</p>
                <p id="Thread-text">${commentText}</p>
                <img src="${imagePreview}" id="thread-img" style="max-width:150px; height=auto;">
                <div class="comment-details">
                    <div class="comment-like-section posted-reply-like-counter">
                        <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                        <p class="comment-like-count">0</p>
                    </div>
                    <div class="comment-reply-section">
                        <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                        <p class="comment-reply-count">0</p>
                    </div>
                    <p class="reply-comment">Reply</p>
                </div>
            </div>
        </div>
    `;
  } else {
    newCommentSection.innerHTML = `
        <div class="Thread-list">
            <img class="Profile-pic" src="Assets/Icon/profilepicture.png">
            <div class="Thread-information">
                <p id="Thread-name">You</p>
                <p id="Thread-time">${formattedDate}</p>
                <p id="Thread-text">${commentText}</p>
                <div class="comment-details">
                    <div class="comment-like-section posted-reply-like-counter">
                        <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                        <p class="comment-like-count">0</p>
                    </div>
                    <div class="comment-reply-section">
                        <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                        <p class="comment-reply-count">0</p>
                    </div>
                    <p class="reply-comment">Reply</p>
                </div>
            </div>
        </div>
    `;
  }

  var postedComments = document.getElementById("posted-comments");
  postedComments.insertBefore(newCommentSection, postedComments.firstChild);

  addLikeCounter();

  document.querySelector(".comment-text").value = "";
  document.querySelector('#imagePreviewContainer').innerHTML = "";

  document.getElementById('post-button').disabled = true;
}

var toggleReplyStatus = 0;

function toggleReplies() {
    const postedReplySections = document.querySelectorAll('.posted-reply-section');
    
    postedReplySections.forEach(postedReplySection => {
        postedReplySection.classList.toggle('show');
    });

    if(toggleReplyStatus === 0){
      toggleReplyStatus = 1;
    }
    else {
      toggleReplyStatus = 0;
    }
}

// const replyParagraph = document.querySelector('.reply-comment');
// const cancelButton = document.querySelector('.cancel-button');
// const replyContainer = document.querySelector('.reply-a-comment-container');

// replyContainer.style.display = 'none';
// function toggleReplyContainer() {
//   if (replyContainer.style.display === 'none') {
//     replyContainer.style.display = 'block';
//   } else {
//     replyContainer.style.display = 'none';
//   }
// }

// replyParagraph.addEventListener('click', toggleReplyContainer);
// cancelButton.addEventListener('click', toggleReplyContainer);

function replyComment() {
  var replyCountElements = document.querySelectorAll('#comments-demo .comment-reply-count');
  replyCountElements.forEach(replyCountElement => {
      var currentCount = parseInt(replyCountElement.textContent);
      replyCountElement.textContent = currentCount + 1;
  });

  if(toggleReplyStatus === 1){
    toggleReplies();
    toggleReplyStatus = 0;
  }
  
  var commentText = document.getElementsByClassName('reply-comment-text')[0].value;
  var imagePreviewContainer = document.getElementById('reply-imagePreviewContainer');
  var imagePreview = '';

  if (imagePreviewContainer.innerHTML.trim() !== '') {
    var previewImage = document.getElementById('reply-previewImage');
    if (previewImage) {
      imagePreview = previewImage.src;
    }
  }
  // window.alert(commentText);
  
  var currentDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  var formattedDate = currentDate.getHours().toString().padStart(2, '0') + ":" + currentDate.getMinutes().toString().padStart(2, '0') + " - " + currentDate.getDate() + " " + monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();

  var newPostedReplySection = document.createElement("div");
  newPostedReplySection.classList.add('posted-reply-section');
  
  if (imagePreview !== '') {
    newPostedReplySection.innerHTML = `
        <div class="flex-row">
          <img src="Assets/Icon/profilepicture.png" alt="">
          <div class="flex-column">
            <p class="comment-author">You</p>
            <p class="comment-date">${formattedDate}</p>
            <p class="comment-description">${commentText}</p>
            <img src="${imagePreview}" id="reply-img" style="max-width:150px; height=auto;">
            <div class="comment-details">
            <div class="comment-like-section posted-reply-like-counter">
                <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                <p class="comment-like-count">0</p>
            </div>
            <div class="comment-reply-section" onclick="toggleReplies()">
                <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                <p class="comment-reply-count">0</p>
            </div>
            <p class="reply-comment">Reply</p>
        </div>
        </div>
    </div>
    `;
  }else {
    newPostedReplySection.innerHTML = `
        <div class="flex-row">
          <img src="Assets/Icon/profilepicture.png" alt="">
          <div class="flex-column">
            <p class="comment-author">You</p>
            <p class="comment-date">${formattedDate}</p>
            <p class="comment-description">${commentText}</p>
            <div class="comment-details">
            <div class="comment-like-section posted-reply-like-counter">
                <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                <p class="comment-like-count">0</p>
            </div>
            <div class="comment-reply-section" onclick="toggleReplies()">
                <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                <p class="comment-reply-count">0</p>
            </div>
            <p class="reply-comment">Reply</p>
        </div>
        </div>
    </div>
    `;
  }

  var postedReplyContainer = document.querySelector("#comments-demo .posted-reply-container");    

  postedReplyContainer.appendChild(newPostedReplySection);
  
  addLikeCounterForPostedReply();

  toggleReplyContainer();
  toggleReplies();

  document.querySelector(".reply-comment-text").value = "";
  document.querySelector('#reply-imagePreviewContainer').innerHTML = "";
  
  document.getElementById('reply-button').disabled = true;
};


function imageUpload() {
  const fileInput = document.getElementById('fileInput');

  if (!fileInput) {
    // Jika elemen input file belum ada, maka buat yang baru
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');

    const newFileInput = document.createElement('input');
    newFileInput.type = 'file';
    newFileInput.id = 'fileInput'; // Beri id agar dapat dikenali jika sudah ada
    newFileInput.accept = 'image/*';

    newFileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
        const imageUrl = e.target.result;
        imagePreviewContainer.innerHTML = `<img src="${imageUrl}" id="previewImage" alt="Preview" style="width: 100%; height: 100%;">`;
        
        // Tampilkan imageContainer saat gambar dipilih
        imagePreviewContainer.style.display = 'block';
      };

      reader.readAsDataURL(file);
    });

    // Tambahkan elemen input file ke dalam dokumen
    document.body.appendChild(newFileInput);

    // Klik elemen input file
    newFileInput.click();
  } else {
    // Jika elemen input file sudah ada, cukup klik saja
    fileInput.click();
  }
}

function replyimageUpload() {
  const replyfileInput = document.getElementById('reply-fileInput');

  if (!replyfileInput) {
    // Jika elemen input file belum ada, maka buat yang baru
    const imagePreviewContainer = document.getElementById('reply-imagePreviewContainer');

    const newFileInput = document.createElement('input');
    newFileInput.type = 'file';
    newFileInput.id = 'reply-fileInput'; // Beri id agar dapat dikenali jika sudah ada
    newFileInput.accept = 'image/*';

    newFileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
        const imageUrl = e.target.result;
        imagePreviewContainer.innerHTML = `<img src="${imageUrl}" id="reply-previewImage" alt="Preview" style="width: 100%; height: 100%;">`;
        
        // Tampilkan imageContainer saat gambar dipilih
        imagePreviewContainer.style.display = 'block';
      };

      reader.readAsDataURL(file);
    });

    // Tambahkan elemen input file ke dalam dokumen
    document.body.appendChild(newFileInput);

    // Klik elemen input file
    newFileInput.click();
  } else {
    // Jika elemen input file sudah ada, cukup klik saja
    fileInput.click();
  }
}

function popUpCreate() {
  const createThreadButton = document.querySelector('.Create-thread');
  const popupOverlay = document.getElementById('popupOverlay');
  const popupContent = document.getElementById('popupContent');

  createThreadButton.addEventListener('click', () => {
    popupOverlay.style.display = 'block';
    popupContent.classList.add('active');
  });

  popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = 'none';
      popupContent.classList.remove('active');
    }
  });
}

function closepopUpCreate() {
  const closeButton = document.getElementById("Close-popupCreate");

  closeButton.addEventListener("click", () => {
    popupOverlay.style.display = "none";
    popupContent.classList.remove("active");
  });
}

function imageUploadPopup() {
  const fileInput = document.getElementById('fileInput-Popup');

  if (!fileInput) {
    // Jika elemen input file belum ada, maka buat yang baru
    const imagePreviewContainer = document.getElementById('imagePreviewContainer-popup');

    const newFileInput = document.createElement('input');
    newFileInput.type = 'file';
    newFileInput.id = 'fileInput-popup'; // Beri id agar dapat dikenali jika sudah ada
    newFileInput.accept = 'image/*';

    newFileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
        const imageUrl = e.target.result;
        imagePreviewContainer.innerHTML = `<img src="${imageUrl}" id="previewImage-popup" alt="Preview" style="width: 100%; height: 100%;">`;
        
        // Tampilkan imageContainer saat gambar dipilih
        imagePreviewContainer.style.display = 'block';
      };

      reader.readAsDataURL(file);
    });

    // Tambahkan elemen input file ke dalam dokumen
    document.body.appendChild(newFileInput);

    // Klik elemen input file
    newFileInput.click();
  } else {
    // Jika elemen input file sudah ada, cukup klik saja
    fileInput.click();
  }
}

function postCommentpopup() {
  const popupOverlay = document.getElementById('popupOverlay');
  const popupContent = document.getElementById('popupContent');
  const popupdone = document.getElementById('popupDone');
  const popupdoneContent = document.getElementById('popupMessage');

  // Cek apakah posted-comments dan comments-demo sedang disembunyikan
  if (document.getElementById('posted-comments').style.display === 'none' &&
      document.getElementById('comments-demo').style.display === 'none') {
    // Ubah display menjadi block
    document.getElementById('posted-comments').style.display = 'block';
    document.getElementById('comments-demo').style.display = 'block';
    document.getElementById('search-Msg').style.display = 'none';
    
    // Kosongkan isi Temporary-comment
    document.getElementById('Temporary-comment').innerHTML = '';
  }

  // Ambil nilai komentar dari textarea input pada pop-up
  var commentText = document.querySelector('.comment-text-popup').value;
  
  // Ambil URL gambar yang dipilih dari preview gambar pada pop-up
  var imagePreviewContainer = document.getElementById('imagePreviewContainer-popup');
  var imagePreview = '';
  if (imagePreviewContainer.innerHTML.trim() !== '') {
    var previewImage = document.getElementById('previewImage-popup');
    if (previewImage) {
      imagePreview = previewImage.src;
    }
  }
  
  // Buat objek Date untuk mendapatkan tanggal dan waktu saat ini
  var currentDate = new Date();
  
  // Buat string yang memuat tanggal dan waktu dalam format yang diinginkan
  const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var formattedDate = currentDate.getHours().toString().padStart(2, '0') + ":" + currentDate.getMinutes().toString().padStart(2, '0') + " - " + currentDate.getDate() + " " + monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();
    
    // Buat elemen div baru untuk menampilkan komentar yang baru ditambahkan
    var newCommentSection = document.createElement("div");
    newCommentSection.classList.add("comment-1");
    
    // Periksa apakah ada gambar yang dipilih, jika ada, tambahkan HTML dengan gambar ke dalam newCommentSection
    if (imagePreview !== '') {
      newCommentSection.innerHTML = `
      <div class="Thread-list">
      <img class="Profile-pic" src="Assets/Icon/profilepicture.png">
      <div class="Thread-information">
      <p id="Thread-name">You</p>
      <p id="Thread-time">${formattedDate}</p>
      <p id="Thread-text">${commentText}</p>
      <img src="${imagePreview}" style="max-width:150px; height=auto;">
      <div class="comment-details">
      <div class="comment-like-section posted-reply-like-counter">
      <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
      <p class="comment-like-count">0</p>
                    </div>
                    <div class="comment-reply-section">
                        <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                        <p class="comment-reply-count">0</p>
                        </div>
                    <p class="reply-comment">Reply</p>
                </div>
            </div>
        </div>
    `;
  } else {
    // Jika tidak ada gambar yang dipilih, tambahkan HTML tanpa gambar ke dalam newCommentSection
    newCommentSection.innerHTML = `
    <div class="Thread-list">
    <img class="Profile-pic" src="Assets/Icon/profilepicture.png">
    <div class="Thread-information">
    <p id="Thread-name">You</p>
    <p id="Thread-time">${formattedDate}</p>
    <p id="Thread-text">${commentText}</p>
    <div class="comment-details">
    <div class="comment-like-section posted-reply-like-counter">
                        <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                        <p class="comment-like-count">0</p>
                    </div>
                    <div class="comment-reply-section">
                        <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                        <p class="comment-reply-count">0</p>
                    </div>
                    <p class="reply-comment">Reply</p>
                </div>
            </div>
            </div>
    `;
  }
  
  // Sisipkan newCommentSection ke dalam elemen dengan id "posted-comments"
  var postedComments = document.getElementById("posted-comments");
  postedComments.insertBefore(newCommentSection, postedComments.firstChild);
  
  // Panggil fungsi addLikeCounter untuk menambahkan fungsi like ke komentar yang baru ditambahkan
  addLikeCounter();

  // Kosongkan nilai textarea dan preview gambar pada pop-up setelah komentar diposting
  document.querySelector('.comment-text-popup').value = "";
  document.querySelector('#imagePreviewContainer-popup').innerHTML = "";
  
  // Matikan tombol post setelah komentar diposting
  document.getElementById('post-button-popup').disabled = true;
  
  // Sembunyikan pop-up setelah komentar diposting
  popupOverlay.style.display = "none";
  popupContent.classList.remove("active");

  popupdone.style.display = 'block';
  popupdoneContent.classList.add('active'); 
  
  setTimeout(function() {
    popupdone.style.display = 'none';
    popupdoneContent.classList.remove('active');
  }, 500);
}


var comments = [
  {
    name: 'John',
    time: '10:00',
    text: 'Great movie!',
    likecount: 5,
    replycount: 2,
    reply: [
      {
        name: 'Sarah',
        time: '10:05',
        text: 'I agree, it was amazing!',
        likecount: 3,
        replycount: 0,
        reply: [],
        hashtag: 'none'
      },
      {
        name: 'Michael',
        time: '10:10',
        text: 'Epic battle scenes!',
        likecount: 2,
        replycount: 0,
        reply: [],
        hashtag: 'none'
      }
    ],
    hashtag: '#GodzillaXKong'
  },
  {
    name: 'Emma',
    time: '11:30',
    text: 'I loved the character development!',
    likecount: 8,
    replycount: 1,
    reply: [
      {
        name: 'Alex',
        time: '11:35',
        text: 'Yes, it was so well done!',
        likecount: 4,
        replycount: 0,
        reply: [],
        hashtag: 'none'
      }
    ],
    hashtag: '#QueenOfTears'
  },
  {
    name: 'Lisa',
    time: '12:45',
    text: 'Can\'t wait for the next season!',
    likecount: 6,
    replycount: 1,
    reply: [
      {
        name: 'David',
        time: '12:50',
        text: 'Me too! It\'s going to be epic!',
        likecount: 2,
        replycount: 0,
        reply: [],
        hashtag: 'none'
      }
    ],
    hashtag: '#Exhuma'
  },
  {
    name: 'Chris',
    time: '13:15',
    text: 'The storyline was gripping!',
    likecount: 7,
    replycount: 0,
    reply: [],
    hashtag: '#GameOfThrones'
  },
];

document.querySelectorAll('.Trend-info').forEach(element => {
  element.addEventListener('click', function(event) {
      // Sembunyikan Trending-film saat sebuah Trend-info diklik
      var trendingFilm = document.querySelector('.Trending-film');
      var popupOverlay = document.getElementById('popupOverlay-Trending');
      if (trendingFilm.style.display === 'block') {
          trendingFilm.style.display = 'none';
          popupOverlay.style.display = 'none';
      }
      
      // Sembunyikan elemen lain yang perlu disembunyikan
      document.getElementById('posted-comments').style.display = 'none';
      document.getElementById('search-Msg').style.display = 'none';
      document.getElementById('comments-demo').style.display = 'none';
      
      // Dapatkan hashtag yang dipilih dari Trend-info
      var selectedHashtag = element.querySelector('p:first-child').textContent;
      var temporaryCommentContainer = document.getElementById('Temporary-comment');
      temporaryCommentContainer.innerHTML = '';

      // Filter komentar yang memiliki hashtag yang sama dengan yang dipilih
      var commentsWithSameHashtag = comments.filter(comment => comment.hashtag === selectedHashtag);

      // Tampilkan komentar yang telah difilter di dalam Temporary-comment
      commentsWithSameHashtag.forEach(comment => {
          var commentElement = document.createElement('div');
          commentElement.classList.add('comment-1');
          commentElement.innerHTML = `
              <div class="Thread-list">
                  <img class="Profile-pic" src="Assets/Icon/profilepicture.png">
                  <div class="Thread-information">
                      <p id="Thread-name">${comment.name}</p>
                      <p id="Thread-time">${comment.time}</p>
                      <p id="Thread-text">${comment.text}</p>
                      <div class="comment-details">
                          <div class="comment-like-section posted-reply-like-counter" onclick="toggleLike(this)">
                              <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                              <p class="comment-like-count">${comment.likecount}</p>
                          </div>
                          <div class="comment-reply-section" onclick="toggleRepliesTag(this)">
                              <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                              <p class="comment-reply-count">${comment.replycount}</p>
                          </div>
                          <p class="reply-comment">Reply</p>
                      </div>
                  </div>
              </div>
          `;
          temporaryCommentContainer.appendChild(commentElement);

          // Tampilkan balasan yang sesuai di bawah komentar
          comment.reply.forEach(reply => {
              var replyElement = document.createElement('div');
              replyElement.classList.add('reply');
              replyElement.style.display = 'none'; 
              replyElement.innerHTML = `
              <div class="posted-reply-sections">
                  <div class="flex-row">
                      <img src="Assets/Icon/profilepicture.png" alt="">
                      <div class="flex-column">
                          <p class="comment-author">${reply.name}</p>
                          <p class="comment-date">${reply.time}</p>
                          <p class="comment-description">${reply.text}</p>
                          <div class="comment-details">
                              <div class="comment-like-section">
                                  <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                                  <p class="comment-like-count">${reply.likecount}</p>
                              </div>
                              <div class="comment-reply-section" onclick="toggleReplies()">
                                  <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                                  <p class="comment-reply-count">${reply.replycount}</p>
                              </div>
                              <p class="reply-comment">Reply</p>
                          </div>
                      </div>
                  </div>
              </div>
              `;
              commentElement.appendChild(replyElement);
          });
      });
  });
});

function toggleRepliesTag(element) {
  var commentElement = element.closest('.comment-1');
  var replyContainer = commentElement.querySelectorAll('.reply');
  replyContainer.forEach(reply => {
      if (reply.style.display === 'none') {
          reply.style.display = 'block';
      } else {
          reply.style.display = 'none';
      }
  });
}


function toggleLike(element) {
    var likeIcon = element.querySelector('.comment-like-icon');
    var likeCount = element.querySelector('.comment-like-count');
    
    if (likeIcon.src.includes('like.png')) {
        likeIcon.src = 'Assets/Icon/like (1).png';
        likeCount.style.color = '#47B5FF';
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else {
        likeIcon.src = 'Assets/Icon/like.png';
        likeCount.style.color = '#FFFFFF';
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
    }
}

document.getElementById('Search-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      var hashtag = this.value.trim();
      
      document.getElementById('posted-comments').style.display = 'none';
      document.getElementById('comments-demo').style.display = 'none';
      document.getElementById('search-Msg').style.display = 'none';
      
      var temporaryCommentContainer = document.getElementById('Temporary-comment');
      var textContainer = document.getElementById('search-Msg');
      temporaryCommentContainer.innerHTML = '';
      
      if (hashtag === '') {
        document.getElementById('search-Msg').style.display = 'block';
        textContainer.innerText = "Please enter a hashtag to search.";
      } else {
        var filteredComments = comments.filter(comment => comment.hashtag === hashtag);
        
        if (filteredComments.length === 0) {
          document.getElementById('search-Msg').style.display = 'block';
          textContainer.innerText = "There is no result for \"" + hashtag +"\"";
        } else {
          document.getElementById('search-Msg').style.display = 'none';
              filteredComments.forEach(comment => {
                  var commentElement = document.createElement('div');
                  commentElement.classList.add('comment-1');
                  commentElement.innerHTML = `
                      <div class="Thread-list">
                          <img class="Profile-pic" src="Assets/Icon/profilepicture.png">
                          <div class="Thread-information">
                              <p id="Thread-name">${comment.name}</p>
                              <p id="Thread-time">${comment.time}</p>
                              <p id="Thread-text">${comment.text}</p>
                              <div class="comment-details">
                                  <div class="comment-like-section posted-reply-like-counter" onclick="toggleLike(this)">
                                      <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                                      <p class="comment-like-count">${comment.likecount}</p>
                                  </div>
                                  <div class="comment-reply-section" onclick="toggleRepliesTag(this)">
                                      <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                                      <p class="comment-reply-count">${comment.replycount}</p>
                                  </div>
                                  <p class="reply-comment">Reply</p>
                              </div>
                          </div>
                      </div>
                  `;
                  temporaryCommentContainer.appendChild(commentElement);

                  comment.reply.forEach(reply => {
                      var replyElement = document.createElement('div');
                      replyElement.classList.add('reply');
                      replyElement.style.display = 'none'; // Menyembunyikan balasan secara default
                      replyElement.innerHTML = `
                          <div class="posted-reply-sections">
                              <div class="flex-row">
                                  <img src="Assets/Icon/profilepicture.png" alt="">
                                  <div class="flex-column">
                                      <p class="comment-author">${reply.name}</p>
                                      <p class="comment-date">${reply.time}</p>
                                      <p class="comment-description">${reply.text}</p>
                                      <div class="comment-details">
                                          <div class="comment-like-section">
                                              <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                                              <p class="comment-like-count">${reply.likecount}</p>
                                          </div>
                                          <div class="comment-reply-section" onclick="toggleReplies()">
                                              <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                                              <p class="comment-reply-count">${reply.replycount}</p>
                                          </div>
                                          <p class="reply-comment">Reply</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      `;
                      commentElement.appendChild(replyElement);
                  });
              });
          }
      }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Ambil elemen yang akan memunculkan pop-up
  var trendingThreads = document.querySelectorAll('.trending-Thread');
  var popupOverlay = document.getElementById('popupOverlay-Trending');
  var popupContent = document.getElementById('popupContent-Trending');
  var trendingFilm = document.querySelector('.Trending-film');

  // Tambahkan variabel status pop-up
  var popupStatus = false;

  // Tambahkan event listener untuk setiap elemen trending-Thread
  trendingThreads.forEach(function(thread) {
      thread.addEventListener('click', function() {
          // Toggle pop-up saat elemen trending-Thread diklik
          if (!popupStatus) {
              // Tampilkan pop-up saat elemen trending-Thread diklik untuk pertama kali
              popupOverlay.style.display = 'block';
              popupContent.style.display = 'none';
              trendingFilm.style.display = 'block';
              popupStatus = true;
          } else {
              // Tutup pop-up saat elemen trending-Thread diklik untuk kedua kali
              popupOverlay.style.display = 'none';
              popupContent.style.display = 'none';
              trendingFilm.style.display = 'none';
              popupStatus = false;
          }

          // Isi konten pop-up
          popupContent.innerHTML = `
              <div class="Trending-film">
                  <div class="Trending-content">
                      <p class="Title-trending">#TrendingFilm</p>
                      <hr>
                      <div class="Trend-1">
                          <p id="Number-1">1.</p>
                          <div class="Trend-info">
                              <p id="Trendtitle-1">#QueenOfTears</p>
                              <p id="Trendthreads-1">2435 threads</p>
                          </div>
                      </div>
                      <div class="Trend-1">
                          <p id="Number-1">2.</p>
                          <div class="Trend-info">
                              <p id="Trendtitle-1">#GodzillaXKong</p>
                              <p id="Trendthreads-1">2019 threads</p>
                          </div>
                      </div>
                      <div class="Trend-1">
                          <p id="Number-1">3.</p>
                          <div class="Trend-info">
                              <p id="Trendtitle-1">#Exhuma</p>
                              <p id="Trendthreads-1">1499 threads</p>
                          </div>
                      </div>
                      <div class="Trend-1">
                          <p id="Number-1">4.</p>
                          <div class="Trend-info">
                              <p id="Trendtitle-1">#GameOfThrones</p>
                              <p id="Trendthreads-1">642 threads</p>
                          </div>
                      </div>
                  </div>
              </div>
          `;
      });
  });
});