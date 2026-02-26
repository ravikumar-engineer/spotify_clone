// Dummy Audio Element for Play/Pause functionality
const playButton = document.querySelector(".player-control-icon:nth-child(3)");
const progressBar = document.querySelector(".progress-bar");
const currentTime = document.querySelector(".current-time");
const totalTime = document.querySelector(".tot-time");
const volumeSlider = document.querySelector(".control-progress");

// Simulate Audio Object (Replace with real audio later)
let isPlaying = false;
let fakeDuration = 213; // seconds (3:33)

// Play/Pause Toggle
playButton.addEventListener("click", () => {
    if (!isPlaying) {
        isPlaying = true;
        playButton.style.opacity = "0.5"; // Visual change to indicate playing
        simulatePlayback();
    } else {
        isPlaying = false;
        playButton.style.opacity = "1";
        clearInterval(playbackInterval);
    }
});

// Simulate Playback Progress
let playbackInterval;

function simulatePlayback() {
    let currentSeconds = 0;
    playbackInterval = setInterval(() => {
        if (currentSeconds >= fakeDuration) {
            clearInterval(playbackInterval);
            isPlaying = false;
            playButton.style.opacity = "1";
        } else {
            currentSeconds++;
            updateProgress(currentSeconds);
        }
    }, 1000);
}

function updateProgress(seconds) {
    progressBar.value = (seconds / fakeDuration) * 100;

    // Format Time
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = "0" + sec;
    currentTime.textContent = `${min}:${sec}`;
}

// Progress Bar Seek (Simulated)
progressBar.addEventListener("input", () => {
    let newTime = (progressBar.value / 100) * fakeDuration;
    updateProgress(Math.floor(newTime));
});

// Volume Control
volumeSlider.addEventListener("input", () => {
    console.log("Volume:", volumeSlider.value);
    // You can connect this to an actual audio element
});

// Buttons for Install App, Explore Premium, etc.
document.querySelector(".badge-2").addEventListener("click", () => {
    alert("App Installation functionality not implemented yet.");
});

document.querySelector(".badge").addEventListener("click", () => {
    alert("Create Playlist functionality coming soon!");
});

document.querySelectorAll(".badge-3").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Filter functionality not implemented yet.");
    });
});
const audioPlayer = document.getElementById("audio-player");
const songCards = document.querySelectorAll(".card");

songCards.forEach(card => {
    card.addEventListener("click", () => {
        const songSrc = card.getAttribute("data-song");
        
        if (songSrc) {
            audioPlayer.src = songSrc;
            audioPlayer.play();
            console.log(`Playing: ${songSrc}`);
        } else {
            console.log("No song file found for this card.");
        }
    });
});