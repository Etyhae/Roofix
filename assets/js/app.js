document.addEventListener("DOMContentLoaded", () => {
    const parts = document.querySelectorAll(".house_img");

    Array.from(parts).forEach((item, index) => {
        const img = new Image();
        img.src = item.src;
        img.onload = () => {
            item.style.animationName = "slideIn";
            item.style.animationDuration = `${parts.length - index - 1}s`;
            item.style.animationDelay = "0s";
            item.style.animationTimingFunction = "ease-out";
        };
    });
})
