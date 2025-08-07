let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-container', {
    videoId: 'zKz4QQKx_jo', // Replace with your YouTube video ID
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: 'dQw4w9WgXcQ',
      mute: 1,
      modestbranding: 1,
      showinfo: 0,
      rel: 0
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.setPlaybackRate(2); // Max allowed by YouTube
  setTimeout(() => {
    const rates = player.getAvailablePlaybackRates();
    if (rates.includes(6)) {
      player.setPlaybackRate(6); // Try to set 6x if allowed
    } else {
      console.warn('6x speed not available. Using maximum allowed:', rates);
    }
    event.target.playVideo();
  }, 1000);
}
