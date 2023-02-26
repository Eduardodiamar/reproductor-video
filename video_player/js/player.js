document.addEventListener("DOMContentLoaded", function () {
    startplayer();
}, false);
var player;

function startplayer() {
    player = document.getElementById('video_player');
    // player.controls = false;
}

function play_vid() {

    player.play();
    isPlaying = true
    showPlayPause()

}

function pause_vid() {
    player.pause();
    isPlaying = false
    showPlayPause()
}

function stop_vid() {
    player.pause();
    player.currentTime = 0;
    isPlaying = false
}

function change_vol() {
    player.volume = document.getElementById("change_vol").value;
}
isPlaying = false
function showPlayPause(){

    if (isPlaying) {
        document.getElementById('play_button').style.display = "none"
        document.getElementById('pause_button').style.display = "flex"
        console.log('playing');
    } else {
        document.getElementById('play_button').style.display = "flex"
        document.getElementById('pause_button').style.display = "none"
        console.log(' not playing');

    }
}
function hiddeButtons(){
    
        document.getElementById('play_button').style.display = "none"
        document.getElementById('pause_button').style.display = "none"
    
    
}