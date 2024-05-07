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
  var commentText = document.getElementsByClassName('comment-text')[0].value;
  var imagePreviewContainer = document.getElementById('imagePreviewContainer');
  var imagePreview = '';

  // Periksa apakah imagePreviewContainer memiliki isi
  if (imagePreviewContainer.innerHTML.trim() !== '') {
    // Jika ada, ambil src dari gambar di dalamnya
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

  // Tentukan konten berdasarkan keberadaan gambar di imagePreviewContainer
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
                    <div class="comment-like-section">
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
                    <div class="comment-like-section">
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

  // Reset input textarea dan preview gambar setelah posting komentar
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

const replyParagraph = document.querySelector('.reply-comment');
const cancelButton = document.querySelector('.cancel-button');
const replyContainer = document.querySelector('.reply-a-comment-container');

replyContainer.style.display = 'none';
function toggleReplyContainer() {
  if (replyContainer.style.display === 'none') {
    replyContainer.style.display = 'block';
  } else {
    replyContainer.style.display = 'none';
  }
}

replyParagraph.addEventListener('click', toggleReplyContainer);
cancelButton.addEventListener('click', toggleReplyContainer);

function replyComment() {
    var replyCountElements = document.querySelectorAll('.comment-reply-count');
    replyCountElements.forEach(replyCountElement => {
        var currentCount = parseInt(replyCountElement.textContent);
        replyCountElement.textContent = currentCount + 1;
    });

    if(toggleReplyStatus === 1){
      toggleReplies();
      toggleReplyStatus = 0;
    }
    
    var commentText = document.getElementsByClassName('reply-comment-text')[0].value;
    // window.alert(commentText);
    
    var currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var formattedDate = currentDate.getHours().toString().padStart(2, '0') + ":" + currentDate.getMinutes().toString().padStart(2, '0') + " - " + currentDate.getDate() + " " + monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();

    var newPostedReplySection = document.createElement("div");
    newPostedReplySection.classList.add('posted-reply-section');
    
    newPostedReplySection.innerHTML = `
        <div class="flex-row">
          <img src="Assets/Icon/profilepicture.png" alt="">
          <div class="flex-column">
            <p class="comment-author">You</p>
            <p class="comment-date">${formattedDate}</p>
            <p class="comment-description">${commentText}</p>
            <div class="comment-details">
            <div class="comment-like-section">
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

    var postedReplyContainer = document.querySelector(".posted-reply-container");    

    postedReplyContainer.appendChild(newPostedReplySection);
    
    addLikeCounterForPostedReply();

    toggleReplyContainer();
    toggleReplies();

    document.querySelector(".reply-comment-text").value = "";
    
    document.getElementById('reply-button').disabled = true;
};

function imageUpload() {
  const fileInput = document.getElementById('fileInput');

  if (!fileInput) {
    // Jika elemen input file belum ada, maka buat yang baru
    const imageSelector = document.getElementById('imageSelector');
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

