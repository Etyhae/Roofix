document.addEventListener("DOMContentLoaded", () => {
    const parts = document.querySelectorAll(".house_img");
    for (let index = 0; index < parts.length; index++) {
        const element = parts[index];
        element.style.animationName = "slideIn";
        element.style.animationDuration = `${parts.length - index - 1}s`;
        element.style.animationDelay = "0s";
        element.style.animationTimingFunction = "ease-out";
    }
})