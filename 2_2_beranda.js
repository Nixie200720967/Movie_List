document.addEventListener("DOMContentLoaded", function() {
    const soundButton = document.getElementById("sound-button");
    const soundIcon = document.getElementById("sound-icon");

    soundButton.addEventListener("click", function() {
        if (soundIcon.src.includes("sound-icon.png")) {
            soundIcon.src = "assets/sound-icon-mute.png"; // Path to the muted sound icon
        } else {
            soundIcon.src = "assets/sound-icon.png"; // Path to the sound icon
        }
    });
});


