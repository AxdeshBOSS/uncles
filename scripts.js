var video = document.getElementById('backgroundVideo');
var muteButton = document.getElementById('muteButton');
var volumeSlider = document.getElementById('volumeSlider');

muteButton.addEventListener('click', function() {
    var icon = this.querySelector('i');
    if (video.muted || video.volume == 0) {
        video.muted = false;
        video.volume = volumeSlider.value;
        icon.className = "fas fa-volume-up";
    } else {
        video.muted = true;
        icon.className = "fas fa-volume-mute";
    }
});

volumeSlider.addEventListener('input', function() {
    video.muted = false;
    video.volume = this.value;
    var icon = muteButton.querySelector('i');
    if (this.value == 0) {
        icon.className = "fas fa-volume-off";
    } else if (this.value <= 0.5) {
        icon.className = "fas fa-volume-down";
    } else {
        icon.className = "fas fa-volume-up";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('backgroundVideo');
    var volumeSlider = document.getElementById('volumeSlider');

    video.volume = volumeSlider.value;
});
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.onkeydown = function(e) {
    // 
    if (e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    // 
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    //  (Mac)
    if (e.metaKey && e.altKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
};
