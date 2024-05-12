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
  
  //Burger
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
  
    //Munculin logout
    profileIcon.addEventListener('click', function () {
        
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('nyala');
        dropdown.classList.remove('active'); 
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
  