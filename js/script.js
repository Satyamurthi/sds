document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
    });
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.stats-counter');
    const speed = 200;
				
    const animateCounter = (el) => {
      const counter = el.querySelector('div[data-target]');
      const updateCount = () => {
	const target = +counter.getAttribute('data-target');
	const count = +counter.innerText;
	const increment = target / speed;

	if (count < target) {
	  counter.innerText = Math.ceil(count + increment);
	  setTimeout(updateCount, 15);
	} else {
	  counter.innerText = target.toLocaleString(); // format with commas
	}
      };
      updateCount();
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
	if (entry.isIntersecting) {
	  entry.target.classList.add('visible'); // 💡 this makes it fade in!
	  animateCounter(entry.target); // 💡 this starts the count!
	  observer.unobserve(entry.target); // only animate once
	}
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      observer.observe(counter);
    });
  });

    // YouTube API Script
function onYouTubeIframeAPIReady() {
new YT.Player('video-container', {
    videoId: 'zKz4QQKx_jo', // Replace with your YouTube Video ID
    playerVars: {
	autoplay: 1,
	mute: 1,
	loop: 1,
	playlist: 'zKz4QQKx_jo',
	controls: 0,
	showinfo: 0,          // Legacy; may not work but harmless
	modestbranding: 1,    // Minimal branding
	fs: 0,
	rel: 0,
	disablekb: 1,
	cc_load_policy: 0,    // Prevent captions
	iv_load_policy: 3,    // Hide annotations
	playsinline: 1
    },
    events: {
	onReady: function(event) {
	    event.target.setPlaybackRate(2); // Max YouTube-supported speed
	    event.target.playVideo();
	}
    }
});
}

// Array of image groups for each slideshow
const slides = {
"slide-1": [
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4033.jpg?raw=true",
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4038.jpg?raw=true"
],
"slide-2": [
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4038.jpg?raw=true",
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4033.jpg?raw=true"
],
"slide-3": [
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4015.jpg?raw=true",
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4006.jpg?raw=true"
]
"slide-4": [
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4006.jpg?raw=true",
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4015.jpg?raw=true",
],
"slide-5": [
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4038.jpg?raw=true",
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4015.jpg?raw=true",
],
"slide-6": [
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4015.jpg?raw=true",
"https://github.com/Satyamurthi/mwb.github.io/blob/main/Photos/DSC_4006.jpg?raw=true"
]
};

// Function to rotate images
function startSlideshow(id, imageArray) {
let index = 0;
setInterval(() => {
const img = document.getElementById(id);
if (img) {
index = (index + 1) % imageArray.length;
img.src = imageArray[index];
}
}, 3000); // 3 seconds per slide
}

// Start all slideshows
Object.entries(slides).forEach(([id, images]) => {
startSlideshow(id, images);
});

// Load YouTube Iframe API
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);


  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".activities-slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev-activities");
    const nextBtn = document.getElementById("next-activities");

    let currentSlide = 0;

    function getVisibleSlides() {
      const width = window.innerWidth;
      if (width >= 1024) return 4; // Desktop
      if (width >= 640) return 2;  // Tablet
      return 1;                    // Mobile
    }

    function updateSlider() {
      const visibleSlides = getVisibleSlides();
      const slideWidth = slides[0].offsetWidth + 24; // 24px for px-3
      const offset = currentSlide * slideWidth;
      slider.style.transform = `translateX(-${offset}px)`;
    }

    prevBtn.addEventListener("click", () => {
      const visibleSlides = getVisibleSlides();
      currentSlide = Math.max(currentSlide - visibleSlides, 0);
      updateSlider();
    });

    nextBtn.addEventListener("click", () => {
      const visibleSlides = getVisibleSlides();
      const maxSlide = Math.max(slides.length - visibleSlides, 0);
      currentSlide = Math.min(currentSlide + visibleSlides, maxSlide);
      updateSlider();
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();

    setInterval(() => {
      const visibleSlides = getVisibleSlides();
      const maxSlide = Math.max(slides.length - visibleSlides, 0);
      currentSlide = (currentSlide + visibleSlides) % (maxSlide + 1);
      updateSlider();
    }, 5000);
  });


      document.addEventListener("DOMContentLoaded", function () {
	const backToTop = document.getElementById("back-to-top");
	const toast = document.getElementById("toast");
	const newsletterForm = document.getElementById("newsletter-form");
	const statsCounters = document.querySelectorAll(".stats-counter");
	let countersStarted = false;
	window.addEventListener("scroll", () => {
	  if (window.pageYOffset > 300) {
	    backToTop.classList.remove("opacity-0", "invisible");
	  } else {
	    backToTop.classList.add("opacity-0", "invisible");
	  }
	  const statsSection =
	    document.querySelector(".stats-counter").parentElement.parentElement;
	  const statsSectionTop = statsSection.offsetTop;
	  const statsSectionHeight = statsSection.offsetHeight;
	  const windowHeight = window.innerHeight;
	  const scrollPosition = window.pageYOffset;
	  if (
	    !countersStarted &&
	    scrollPosition > statsSectionTop - windowHeight + statsSectionHeight / 2
	  ) {
	    startCounters();
	    countersStarted = true;
	  }
	});
	backToTop.addEventListener("click", () => {
	  window.scrollTo({
	    top: 0,
	    behavior: "smooth",
	  });
	});
	newsletterForm.addEventListener("submit", (e) => {
	  e.preventDefault();
	  const email = e.target.querySelector('input[type="email"]');
	  if (email.value) {
	    showToast();
	    email.value = "";
	  }
	});
	function showToast() {
	  toast.classList.add("show");
	  setTimeout(() => {
	    toast.classList.remove("show");
	  }, 3000);
	}
	function startCounters() {
	  statsCounters.forEach((counter) => {
	    counter.classList.add("visible");
	    const target = parseInt(counter.querySelector("div").dataset.target);
	    const duration = 2000;
	    const increment = target / (duration / 16);
	    let current = 0;
	    const updateCounter = () => {
	      current += increment;
	      if (current < target) {
		counter.querySelector("div").textContent = Math.round(current);
		requestAnimationFrame(updateCounter);
	      } else {
		counter.querySelector("div").textContent = target;
	      }
	    };
	    requestAnimationFrame(updateCounter);
	  });
	}
      });


const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('close-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
  });
