const aboutMeBtn = document.getElementById("aboutMeBtn");
const closeAboutMe = document.getElementById("closeAboutMe");
const aboutModal = document.getElementById("aboutModal");
const aboutHeader = document.getElementById("aboutHeader");
let isOpen = false;
let isDragging = false;

// Modal Opening With Random Positioning
aboutMeBtn.addEventListener("click", () => {
    if (!isOpen) {
        isOpen = true;

        const maxX = window.innerWidth - 820;
        const minX = 100;
        const randomX = Math.random() * (maxX - minX) + minX;
        
        const maxY = window.innerHeight - 520;
        const minY = 50;
        const randomY = Math.random() * (maxY - minY) + minY;
        
        aboutModal.style.setProperty("--aboutX", `${randomX}px`);
        aboutModal.style.setProperty("--aboutY", `${randomY}px`);
        aboutModal.style.transform = `scale(1)`;

        aboutModal.classList.add("show");
        aboutMeBtn.classList.add("highlighted");
    } else if (isOpen) {
        isOpen = false;

        aboutModal.classList.remove("show");
        aboutMeBtn.classList.remove("highlighted");
    };
});

// Modal Closing
closeAboutMe.addEventListener("click", () => {
    isOpen = false;

    aboutModal.classList.remove("show");
    aboutMeBtn.classList.remove("highlighted");
});

// Modal Dragging
aboutHeader.addEventListener("mousedown", (e) => {
    isDragging = true;

    const modalTop = aboutModal.getBoundingClientRect().top;
    const modalLeft = aboutModal.getBoundingClientRect().left;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = mouseX - modalLeft;
    const offsetY = mouseY - modalTop;

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const currentMouseX = e.clientX;
            const currentMouseY = e.clientY;

            aboutModal.style.setProperty("--aboutX", `${currentMouseX - offsetX}px`);
            aboutModal.style.setProperty("--aboutY", `${currentMouseY - offsetY}px`);
        };
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
});