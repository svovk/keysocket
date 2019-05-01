function onKeyPress(key) {
    if (key === PLAY) {
        simulateClick(document.querySelector('div.rc-VideoControlsContainer > div > button.rc-PlayToggle'));
    }
}
