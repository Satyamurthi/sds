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
			
			    // Load YouTube Iframe API
			    let tag = document.createElement('script');
			    tag.src = "https://www.youtube.com/iframe_api";
			    document.head.appendChild(tag);
