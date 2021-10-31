function adjust(e) {
    let theme = (e.matches ? '#161f18' : '#ffffff');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', theme);
}

export default function () {
    window.matchMedia("(prefers-color-scheme: dark)").addListener(adjust);
    adjust(window.matchMedia("(prefers-color-scheme: dark)"));
}
