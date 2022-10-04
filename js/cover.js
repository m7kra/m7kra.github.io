const coverScrollSpeed = 1.5;
const coverContentScrollSpeed = 1.3;

window.onscroll = () => {
    // Move cover element down relative to scroll, so that it appears to scroll
    // slower
    document.querySelector('#cover').style.top = `${window.scrollY * (coverScrollSpeed-1)}px`;
    // Move the content of the cover up relative to scroll, so that it appears
    // to scroll faster
    document.querySelector('#cover-content').style.top = `${window.scrollY * (coverContentScrollSpeed-coverScrollSpeed)}px`;
}