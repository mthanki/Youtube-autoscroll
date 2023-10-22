function scrollPage() {
    // scroll down by 1 pixel
    window.scrollBy(0, 1);
    // scroll up by 1 pixel
    window.scrollBy(0, -1);
}

setInterval(scrollPage, 20 * 60 * 1000); // Scroll every 20 minutes