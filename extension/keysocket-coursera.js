function onKeyPress(key) {
    if (key === PLAY) {
        simulateClick(document.querySelector('div.vjs-control-bar > div.c-video-control.vjs-control.c-play-control > div > em'));
    }
}