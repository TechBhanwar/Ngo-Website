
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // or 'vertical'
      loop: true,
      centeredSlides: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Autoplay
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

      // Use slide or fade transition effect
      speed: 2000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  });

  const swiper = new Swiper('.custom-swiper-container', {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  
  
function openModal(img) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = img.src; // Set the clicked image as the modal image
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
  const gridItems = document.querySelectorAll('.grid-item');
  const initialItems = 8; // Show 12 images initially

  // Show only the first 12 images initially
  for (let i = 0; i < initialItems; i++) {
      if (gridItems[i]) {
          gridItems[i].classList.add('show');
      }
  }

  // Function to show more images
  window.showMoreImages = function() {
      for (let i = initialItems; i < gridItems.length; i++) {
          gridItems[i].classList.add('show');
      }

      // Hide the "View More" button after displaying all images
      document.getElementById('viewMoreBtn').style.display = 'none';
  };
});




// gallery js 
document.getElementById('uploadButton').addEventListener('click', function() {
  const imageUpload = document.getElementById('imageUpload').files[0];
  const imageTitle = document.getElementById('imageTitle').value;

  if (imageUpload && imageTitle) {
      const reader = new FileReader();
      reader.onload = function(e) {
          // Create new card element
          const newCard = document.createElement('div');
          newCard.className = 'card';
          newCard.style.width = '100%'; // Ensure it takes full width

          // Set card's inner HTML
          newCard.innerHTML = `
              <img src="${e.target.result}" class="card-img-top" alt="${imageTitle}">
              <div class="card-body">
                  <h5 class="card-title">${imageTitle}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          `;

          // Add the new card to the top of the gallery
          const galleryGrid = document.querySelector('.gallery-grid');
          galleryGrid.insertBefore(newCard, galleryGrid.firstChild);
      };
      reader.readAsDataURL(imageUpload);
  } else {
      alert('Please select an image and enter a title.');
  }
});


