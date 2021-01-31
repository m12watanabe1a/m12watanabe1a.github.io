// loading画面
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("mousewheel", preventEvent, { passive: false })
    document.addEventListener("touchmove", preventEvent, { passive: false })
})

window.addEventListener('load', function(){
    const loading = document.getElementById('loader')
    loading.classList.add("loaded");
    document.removeEventListener("mousewheel", preventEvent, { passive: false })
    document.removeEventListener('touchmove', preventEvent, { passive: false })
})

function preventEvent(event) {
    event.preventDefault();
}
