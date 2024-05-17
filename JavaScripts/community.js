textarea = document.querySelector("#autoresizing");
textarea.addEventListener('input', autoResize, false);
 
var comments = [
  {
      name: 'John',
      time: '09:21 - 10 May 2024',
      text: 'Great movie!',
      likecount: 5,
      replycount: 2,
      reply: [
      {
          name: 'Sarah',
          time: '14:47 - 10 May 2024',
          text: 'I agree, it was amazing!',
          likecount: 3,
          replycount: 0,
          reply: [],
          hashtag: 'none'
      },
      {
          name: 'Michael',
          time: '03:15 - 11 May 2024',
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
      time: '20:36 - 11 May 2024',
      text: 'I loved the character development!',
      likecount: 8,
      replycount: 1,
      reply: [
      {
          name: 'Alex',
          time: '08:59 - 12 May 2024',
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
      time: '16:22 - 12 May 2024',
      text: 'Can\'t wait for the next season!',
      likecount: 6,
      replycount: 1,
      reply: [
      {
          name: 'David',
          time: '11:04 - 13 May 2024',
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
      time: '22:10 - 13 May 2024',
      text: 'The storyline was gripping!',
      likecount: 7,
      replycount: 0,
      reply: [],
      hashtag: '#GameOfThrones'
  },
  {
      name: 'Sophia',
      time: '03:56 - 18 May 2024',
      text: 'Conjuring 4 will be a blast!',
      likecount: 8,
      replycount: 2,
      reply: [
          {
              name: 'Daniel',
              time: '12:09 - 18 May 2024',
              text: 'Absolutely! The Conjuring series is top-notch!',
              likecount: 3,
              replycount: 0,
              reply: [],
              hashtag: '#Conjuring4',
          },
          {
              name: 'Aiden',
              time: '08:33 - 19 May 2024',
              text: 'I\'ve been counting down the days!',
              likecount: 4,
              replycount: 0,
              reply: [],
              hashtag: '#Conjuring4',
          }
      ],
      hashtag: '#Conjuring4'
  },
  {
      name: 'Sarah',
      time: '06:55 - 23 May 2024',
      text: 'Can\'t wait for the next installment of Marvels!',
      likecount: 12,
      replycount: 3,
      reply: [
          {
              name: 'Tom',
              time: '15:10 - 23 May 2024',
              text: 'Me too! Marvels movies are always a blast!',
              likecount: 7,
              replycount: 0,
              reply: [],
              hashtag: '#Marvels'
          },
          {
              name: 'Grace',
              time: '09:25 - 24 May 2024',
              text: 'I hope they introduce some new heroes!',
              likecount: 4,
              replycount: 0,
              reply: [],
              hashtag: '#Marvels'
          },
          {
              name: 'Sophia',
              time: '11:48 - 25 May 2024',
              text: 'I\'m excited for the plot twists!',
              likecount: 6,
              replycount: 0,
              reply: [],
              hashtag: '#Marvels'
          }
      ],
      hashtag: '#Marvels'
  },
  {
      name: 'Rachel',
      time: '05:30 - 31 May 2024',
      text: 'Just watched Shang-Chi and it was fantastic!',
      likecount: 18,
      replycount: 3,
      reply: [
          {
              name: 'Michael',
              time: '14:45 - 31 May 2024',
              text: 'One of the best Marvel movies in recent years!',
              likecount: 9,
              replycount: 0,
              reply: [],
              hashtag: '#ShangChi'
          },
          {
              name: 'Emma',
              time: '10:20 - 1 June 2024',
              text: 'The soundtrack was incredible too!',
              likecount: 7,
              replycount: 0,
              reply: [],
              hashtag: '#ShangChi'
          },
          {
              name: 'David',
              time: '12:48 - 2 June 2024',
              text: 'I\'m already planning to rewatch it!',
              likecount: 10,
              replycount: 0,
              reply: [],
              hashtag: '#ShangChi'
          }
      ],
      hashtag: '#ShangChi'
  },
  {
      name: 'Hye',
      time: '06:40 - 7 June 2024',
      text: 'Vincenzo is a masterpiece!',
      likecount: 30,
      replycount: 4,
      reply: [
          {
              name: 'Jae',
              time: '14:25 - 7 June 2024',
              text: 'Absolutely! It\'s one of the best K-dramas!',
              likecount: 16,
              replycount: 0,
              reply: [],
              hashtag: '#Vincenzo'
          },
          {
              name: 'Hyun',
              time: '11:55 - 8 June 2024',
              text: 'I\'m recommending Vincenzo to all my friends!',
              likecount: 22,
              replycount: 0,
              reply: [],
              hashtag: '#Vincenzo'
          },
          {
              name: 'Mi',
              time: '09:35 - 9 June 2024',
              text: 'Vincenzo deserves all the praise!',
              likecount: 25,
              replycount: 0,
              reply: [],
              hashtag: '#Vincenzo'
          },
          {
              name: 'Sung',
              time: '18:20 - 9 June 2024',
              text: 'I\'m eagerly waiting for the next episode!',
              likecount: 28,
              replycount: 0,
              reply: [],
              hashtag: '#Vincenzo'
          }
      ],
      hashtag: '#Vincenzo'
  },
  {
      name: 'Daniel',
      time: '08:45 - 15 June 2024',
      text: 'Madame Web\'s lore is so rich!',
      likecount: 40,
      replycount: 4,
      reply: [
          {
              name: 'Emma',
              time: '14:10 - 15 June 2024',
              text: 'Absolutely! She\'s a pivotal figure in the Spider-Verse!',
              likecount: 22,
              replycount: 0,
              reply: [],
              hashtag: '#MadameWeb'
          },
          {
              name: 'Ella',
              time: '12:55 - 16 June 2024',
              text: 'Madame Web\'s influence reaches far beyond just Spider-Man!',
              likecount: 28,
              replycount: 0,
              reply: [],
              hashtag: '#MadameWeb'
          },
          {
              name: 'Chloe',
              time: '09:35 - 17 June 2024',
              text: 'I\'m eagerly waiting for more Madame Web appearances!',
              likecount: 35,
              replycount: 0,
              reply: [],
              hashtag: '#MadameWeb'
          },
          {
              name: 'Tyler',
              time: '18:20 - 17 June 2024',
              text: 'Madame Web adds a whole new layer to the Spider-Man mythos!',
              likecount: 38,
              replycount: 0,
              reply: [],
              hashtag: '#MadameWeb'
          }
      ],
      hashtag: '#MadameWeb'
  },
  {
      name: 'Lily',
      time: '07:45 - 24 June 2024',
      text: 'The Wonka movie is going to be a cinematic treat!',
      likecount: 55,
      replycount: 3,
      reply: [
          {
              name: 'Mason',
              time: '14:10 - 24 June 2024',
              text: 'Absolutely! I\'m excited to revisit the chocolate factory!',
              likecount: 38,
              replycount: 0,
              reply: [],
              hashtag: '#Wonka'
          },
          {
              name: 'Oscar',
              time: '12:25 - 25 June 2024',
              text: 'I hope the new Wonka movie stays true to the spirit of the original!',
              likecount: 42,
              replycount: 0,
              reply: [],
              hashtag: '#Wonka'
          },
          {
              name: 'Quinn',
              time: '09:35 - 26 June 2024',
              text: 'I hope the new Wonka movie sparks the imagination of a new generation!',
              likecount: 48,
              replycount: 0,
              reply: [],
              hashtag: '#Wonka'
          },
      ],
      hashtag: '#Wonka'
  },
  {
      name: 'Rachel',
      time: '18:20 - 26 June 2024',
      text: 'The Wonka movie has so much potential for creativity!',
      likecount: 52,
      replycount: 0,
      reply: [],
      hashtag: '#Wonka'
  }
  ];

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

  if (postedCommentsDisplay === 'none') {
      document.getElementById('posted-comments').style.display = 'block';
      document.getElementById('search-Msg').style.display = 'none';
      document.getElementById('Temporary-comment').innerHTML = '';
  }

  var commentTextElement = document.getElementsByClassName('comment-text')[0];
  var commentText = commentTextElement.value;
  var imagePreviewContainer = document.getElementById('imagePreviewContainer');
  var imagePreview = '';

  if (imagePreviewContainer.innerHTML.trim() !== '') {
      var previewImage = document.getElementById('previewImage');
      if (previewImage) {
          imagePreview = previewImage.src;
      }
  }

  // Extract hashtags from comment text
  var hashtagRegex = /#(\w+)/g;
  var hashtags = commentText.match(hashtagRegex);
  var commentHashtag = hashtags ? hashtags.join(' ') : '';

  // Remove hashtags from the comment text
  var cleanedCommentText = commentText.replace(hashtagRegex, '').trim();

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
                  <p id="Thread-text">${cleanedCommentText}</p>
                  <p class="lexend" id="Thread-tags" onclick="filterCommentsByHashtag(this)">${commentHashtag}</p>
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
                  <p id="Thread-text">${cleanedCommentText}</p>
                  <p class="lexend" id="Thread-tags" onclick="filterCommentsByHashtag(this)">${commentHashtag}</p>
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

  // Create a new comment object and add it to the comments array
  var newComment = {
      name: 'You',
      time: formattedDate,
      text: cleanedCommentText,
      likecount: 0,
      replycount: 0,
      reply: [],
      hashtag: commentHashtag
  };

  comments.push(newComment);

  addLikeCounter();

  commentTextElement.value = "";
  imagePreviewContainer.innerHTML = "";

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

function toggleReplyInput(element) {
  // Dapatkan elemen parent (comment-1) dari tombol "Reply"
  var commentContainer = element.closest('.comment-1');
  
  // Dapatkan elemen reply-a-comment-container di dalam commentContainer
  var replyContainer = commentContainer.querySelector('.reply-a-comment-container');

  // Ubah display menjadi block jika semula none, dan sebaliknya
  if (replyContainer.style.display === 'none' || replyContainer.style.display === '') {
      replyContainer.style.display = 'block';
  } else {
      replyContainer.style.display = 'none';
  }
}

function hideReplyContainer(buttonElement) {
  // Dapatkan elemen parent (reply-a-comment-container) dari tombol "Cancel"
  var replyContainer = buttonElement.closest('.reply-a-comment-container');

  // Ubah display menjadi none
  replyContainer.style.display = 'none';
}

function replyComment() {
  var commentText = document.querySelector('.reply-comment-text').value;
  var imagePreviewContainer = document.getElementById('reply-imagePreviewContainer');
  var imagePreview = '';

  if (imagePreviewContainer.innerHTML.trim() !== '') {
      var previewImage = document.getElementById('reply-previewImage');
      if (previewImage) {
          imagePreview = previewImage.src;
      }
  }

  var currentDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];
  var formattedDate = currentDate.getHours().toString().padStart(2, '0') + ":" + currentDate.getMinutes().toString().padStart(2, '0') + " - " + currentDate.getDate() + " " + monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();

  var newPostedReplySection = document.createElement("div");
  newPostedReplySection.classList.add('reply');

  if (imagePreview !== '') {
      newPostedReplySection.innerHTML = `
      <div class="posted-reply-sections">
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
          </div>
      `;
  } else {
      newPostedReplySection.innerHTML = `
      <div class="posted-reply-sections">
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
                      <div class="comment-reply-section">
                          <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                          <p class="comment-reply-count">0</p>
                      </div>
                      <p class="reply-comment">Reply</p>
                  </div>
              </div>
          </div>
        </div>
      `;
  }

  var replyContainer = document.querySelector(".reply-a-comment-container");

  // Masukkan elemen baru di bawah replyContainer
  replyContainer.parentNode.insertBefore(newPostedReplySection, replyContainer.nextSibling);

  addLikeCounterForPostedReply();
  var commentParent = replyContainer.closest('.comment-1');

    // Mengambil semua elemen reply di dalam commentParent dan mengubah display mereka
    var replies = commentParent.querySelectorAll('.reply');
    replies.forEach(reply => {
        reply.style.display = 'block';
    });
    
    // Menambahkan 1 ke nilai comment-reply-count pada elemen parent
    var replyCountElement = commentParent.querySelector('.comment-reply-count');
    if (replyCountElement) {
        replyCountElement.textContent = parseInt(replyCountElement.textContent) + 1;
    }



  document.querySelector(".reply-comment-text").value = "";
  document.querySelector('#reply-imagePreviewContainer').innerHTML = "";

  document.getElementById('reply-button').disabled = true;
}

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
  document.getElementById('reply-button').disabled = true;
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
        // Ubah gaya CSS dari class reply-comment-text
        const replyCommentText = document.querySelector('.reply-comment-text');
        if (replyCommentText) {
          replyCommentText.style.borderRadius = '10px 10px 0 0';
        }

      };

      reader.readAsDataURL(file);
    });

    // Tambahkan elemen input file ke dalam dokumen
    document.body.appendChild(newFileInput);

    // Klik elemen input file
    newFileInput.click();
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

  if (document.getElementById('posted-comments').style.display === 'none') {
    document.getElementById('posted-comments').style.display = 'block';
    document.getElementById('search-Msg').style.display = 'none';
    document.getElementById('Temporary-comment').innerHTML = '';
  }

  var commentTextElement = document.querySelector('.comment-text-popup');
  var commentText = commentTextElement.value;
  var imagePreviewContainer = document.getElementById('imagePreviewContainer-popup');
  var imagePreview = '';
  if (imagePreviewContainer.innerHTML.trim() !== '') {
    var previewImage = document.getElementById('previewImage-popup');
    if (previewImage) {
      imagePreview = previewImage.src;
    }
  }

  var currentDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  var formattedDate = currentDate.getHours().toString().padStart(2, '0') + ":" + currentDate.getMinutes().toString().padStart(2, '0') + " - " + currentDate.getDate() + " " + monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();
  
  // Extract hashtags from comment text
  var hashtagRegex = /#(\w+)/g;
  var hashtags = commentText.match(hashtagRegex);
  var commentHashtag = hashtags ? hashtags.join(' ') : '';

  // Remove hashtags from comment text
  var cleanedCommentText = commentText.replace(hashtagRegex, '').trim();

  var newCommentSection = document.createElement("div");
  newCommentSection.classList.add("comment-1");

  if (imagePreview !== '') {
    newCommentSection.innerHTML = `
      <div class="Thread-list">
        <img class="Profile-pic" src="Assets/Icon/profilepicture.png">
        <div class="Thread-information">
          <p id="Thread-name">You</p>
          <p id="Thread-time">${formattedDate}</p>
          <p id="Thread-text">${cleanedCommentText}</p>
          <p class="lexend" id="Thread-tags" onclick="filterCommentsByHashtag(this)">${commentHashtag}</p>
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
          <p id="Thread-text">${cleanedCommentText}</p>
          <p class="lexend" id="Thread-tags" onclick="filterCommentsByHashtag(this)">${commentHashtag}</p>
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

  var newComment = {
    name: 'You',
    time: formattedDate,
    text: cleanedCommentText,
    likecount: 0,
    replycount: 0,
    reply: [],
    hashtag: commentHashtag
  };

  // Push the new comment object to the comments array
  comments.push(newComment);

  addLikeCounter();

  commentTextElement.value = "";
  imagePreviewContainer.innerHTML = "";

  document.getElementById('post-button-popup').disabled = true;

  popupOverlay.style.display = "none";
  popupContent.classList.remove("active");

  popupdone.style.display = 'block';
  popupdoneContent.classList.add('active'); 
  
  setTimeout(function() {
    popupdone.style.display = 'none';
    popupdoneContent.classList.remove('active');
  }, 2000);
}

document.querySelectorAll('.Trend-info').forEach(element => {
  element.addEventListener('click', function(event) {
      // Sembunyikan Trending-film saat sebuah Trend-info diklik
      var trendingFilm = document.querySelector('.Trending-film');
      var popupOverlay = document.getElementById('popupOverlay-Trending');
      if (trendingFilm.style.display === 'block') {
          trendingFilm.style.display = null;
          popupOverlay.style.display = 'none';
      }
      
      // Sembunyikan elemen lain yang perlu disembunyikan
      document.getElementById('posted-comments').style.display = 'none';
      document.getElementById('search-Msg').style.display = 'none';
      
      // Dapatkan hashtag yang dipilih dari Trend-info
      var selectedHashtag = element.querySelector('p:first-child').textContent;
      var temporaryCommentContainer = document.getElementById('Temporary-comment');
      temporaryCommentContainer.innerHTML = '';

      document.getElementById('Search-input').value = selectedHashtag;

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
                      <p class="lexend" id="Thread-tags" onclick="filterCommentsByHashtag(this)">${comment.hashtag}</p>
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
                      <img src="Assets/Icon/profilepicture.png" alt="" class="pp-comment">
                      <div class="flex-column">
                          <p class="comment-author">${reply.name}</p>
                          <p class="comment-date">${reply.time}</p>
                          <p class="comment-description">${reply.text}</p>
                          <div class="comment-details">
                            <div class="comment-like-section" onclick="toggleLikeReply(this)">
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

function filterCommentsByHashtag(element) {
  var hashtag = element.textContent;
  document.getElementById('posted-comments').style.display = 'none';
  document.getElementById('search-Msg').style.display = 'none';

  // Dapatkan hashtag yang dipilih dari Thread-tags
  var selectedHashtag = hashtag;

  // Dapatkan komentar yang memiliki hashtag yang sama dengan yang dipilih
  var commentsWithSameHashtag = comments.filter(comment => comment.hashtag === selectedHashtag);

  // Kosongkan Temporary-comment
  var temporaryCommentContainer = document.getElementById('Temporary-comment');
  temporaryCommentContainer.innerHTML = '';

  document.getElementById('Search-input').value = selectedHashtag;

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
                  <p class="lexend" id="Thread-tags" onclick="filterCommentsByHashtag(this)">${comment.hashtag}</p>
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
                          <div class="comment-like-section" onclick="toggleLikeReply(this)">
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

function toggleLikeReply(likeSection) {
  var likeIcon = likeSection.querySelector('.comment-like-icon');
  var likeCount = likeSection.querySelector('.comment-like-count');

  var liked = JSON.parse(likeIcon.getAttribute('data-liked'));

  if (!liked) {
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
      likeIcon.src = 'Assets/Icon/like (1).png';
      likeCount.style.color = '#47B5FF'; // Ubah warna menjadi biru
  } else {
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
      likeIcon.src = 'Assets/Icon/like.png';
      likeCount.style.color = '#FFFFFF'; // Ubah warna menjadi putih
  }

  likeIcon.setAttribute('data-liked', !liked);
}

function toggleRepliesTag(element) {
  var commentElement = element.closest('.comment-1');
  var replyPost = commentElement.querySelector('.reply-a-comment-container');
  var replyContainer = commentElement.querySelectorAll('.reply');
  if (replyPost && replyPost.style.display == 'block') {
    replyPost.style.display = 'none';
  }
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
      var hashtag = this.value.trim().toLowerCase(); // Mengubah input hashtag menjadi huruf kecil
      
      document.getElementById('posted-comments').style.display = 'none';
      document.getElementById('search-Msg').style.display = 'none';
      
      var temporaryCommentContainer = document.getElementById('Temporary-comment');
      var textContainer = document.getElementById('search-Msg');
      temporaryCommentContainer.innerHTML = '';
      
      if (hashtag === '') {
        document.getElementById('search-Msg').style.display = 'block';
        textContainer.innerText = "Please enter a hashtag to search.";
      } else {
        var filteredComments = comments.filter(comment => comment.hashtag.toLowerCase() === hashtag); // Mengubah comment.hashtag menjadi huruf kecil
        
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
                              <p class="lexend" id="Thread-tags" onclick="filterCommentsByHashtag(this)">${comment.hashtag}</p>
                              <div class="comment-details">
                                  <div class="comment-like-section posted-reply-like-counter" onclick="toggleLike(this)">
                                      <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                                      <p class="comment-like-count">${comment.likecount}</p>
                                  </div>
                                  <div class="comment-reply-section" onclick="toggleRepliesTag(this)">
                                      <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                                      <p class="comment-reply-count">${comment.replycount}</p>
                                  </div>
                                  <div class="reply-butts">
                                    <p class="reply-comment">Reply</p>
                                  </div>
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

document.getElementById('SearchIcon').addEventListener('click', function() {
  var hashtag = document.getElementsByClassName('Searchs-input')[0].value.toLowerCase(); // Mengubah nilai hashtag menjadi huruf kecil
  
  document.getElementById('posted-comments').style.display = 'none';
  document.getElementById('search-Msg').style.display = 'none';
  
  var temporaryCommentContainer = document.getElementById('Temporary-comment');
  var textContainer = document.getElementById('search-Msg');
  temporaryCommentContainer.innerHTML = '';
  
  if (hashtag === '') {
    document.getElementById('search-Msg').style.display = 'block';
    textContainer.innerText = "Please enter a hashtag to search.";
  } else {
    var filteredComments = comments.filter(comment => comment.hashtag.toLowerCase() === hashtag); // Mengubah comment.hashtag menjadi huruf kecil
    
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
                          <p class="lexend" id="Thread-tags" onclick="filterCommentsByHashtag(this)">${comment.hashtag}</p>
                          <div class="comment-details">
                              <div class="comment-like-section posted-reply-like-counter" onclick="toggleLike(this)">
                                  <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                                  <p class="comment-like-count">${comment.likecount}</p>
                              </div>
                              <div class="comment-reply-section" onclick="toggleRepliesTag(this)">
                                  <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                                  <p class="comment-reply-count">${comment.replycount}</p>
                              </div>
                              <div class="reply-butts">
                                <p class="reply-comment">Reply</p>
                              </div>
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
});

document.addEventListener('DOMContentLoaded', function() {
  // Ambil elemen yang akan memunculkan pop-up
  var trendingThreads = document.querySelectorAll('.trending-Thread');
  var popupOverlay = document.getElementById('popupOverlay-Trending');
  var images = document.getElementById('Close-trending');
  var trendingFilm = document.querySelector('.Trending-film');

  // Tambahkan variabel status pop-up
  var popupStatus = false;
  popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = 'none';
      trendingFilm.style.display = null;
      popupStatus = false;
    }
  });

  images.addEventListener('click', (event) => {
      popupOverlay.style.display = 'none';
      trendingFilm.style.display = null;
      popupStatus = false;
  });

  // Tambahkan event listener untuk setiap elemen trending-Thread
  trendingThreads.forEach(function(thread) {
      thread.addEventListener('click', function() {
          // Toggle pop-up saat elemen trending-Thread diklik
          if (!popupStatus) {
              // Tampilkan pop-up saat elemen trending-Thread diklik untuk pertama kali
              popupOverlay.style.display = 'block';
              trendingFilm.style.display = 'block';
              popupStatus = true;
            } else {
              // Tutup pop-up saat elemen trending-Thread diklik untuk kedua kali
              popupOverlay.style.display = 'none';
              trendingFilm.style.display = null;
              popupStatus = false;
          }

      });
  });
});