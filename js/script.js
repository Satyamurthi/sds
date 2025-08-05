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
            videoId: 'zKz4QQKx_jo', // Replace with your
