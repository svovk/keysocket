function onKeyPress(key) {
    if (key === PREV) {
        simulateClick(document.querySelector('a.step-arrow.step-arrow_prev'));
    } else if (key === NEXT) {
        simulateClick(document.querySelector('a.step-arrow.step-arrow_next'));
    } else if (key === PLAY) {
        simulateClick(document.querySelector('div.vjs-play-control.vjs-control'));
    }
}