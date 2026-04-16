// About Me Modal
const aboutMeBtn = document.getElementById("aboutMeBtn");
const aboutModal = document.getElementById("aboutModal");
const aboutHeader = document.getElementById("aboutHeader");
const closeAboutMe = document.getElementById("closeAboutMe");
let isOpenAboutMe = false;
let isDraggingAboutMe = false;

// Projects Modal
const projectsBtn = document.getElementById("projectsBtn");
const projectsModal = document.getElementById("projectsModal");
const projectsHeader = document.getElementById("projectsHeader");
const closeProjects = document.getElementById("closeProjects");
let isOpenProjects = false;
let isDraggingProjects = false;

// Contact Modal
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const contactHeader = document.getElementById("contactHeader");
const closeContact = document.getElementById("closeContact");
let isOpenContact = false;
let isDraggingContact = false;


// About Me Modal Opening With Random Positioning
aboutMeBtn.addEventListener("click", () => {
    if (!isOpenAboutMe) {
        isOpenAboutMe = true;

        const modalWidth = aboutModal.offsetWidth;
        const modalHeight = aboutModal.offsetHeight;

        const maxX = window.innerWidth - modalWidth - 20;
        const minX = 10;
        const randomX =Math.max(minX, Math.random() * (maxX - minX) + minX);

        const maxY = window.innerHeight - modalHeight - 20;
        const minY = 50;
        const randomY = Math.max(minY, Math.random() * (maxY - minY) + minY);

        aboutModal.style.setProperty("--aboutX", `${randomX}px`);
        aboutModal.style.setProperty("--aboutY", `${randomY}px`);
        aboutModal.style.transform = `scale(1)`;

        aboutModal.classList.add("show");
        aboutMeBtn.classList.add("highlighted");
    } else if (isOpenAboutMe) {
        isOpenAboutMe = false;

        aboutModal.classList.remove("show");
        aboutMeBtn.classList.remove("highlighted");
    }
});

// About Me Modal Closing
closeAboutMe.addEventListener("click", () => {
    isOpenAboutMe = false;

    aboutModal.classList.remove("show");
    aboutMeBtn.classList.remove("highlighted");
});

// About Me Modal Dragging
aboutHeader.addEventListener("mousedown", (e) => {
    isDraggingAboutMe = true;

    const modalTop = aboutModal.getBoundingClientRect().top;
    const modalLeft = aboutModal.getBoundingClientRect().left;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = mouseX - modalLeft;
    const offsetY = mouseY - modalTop;

    document.addEventListener("mousemove", (e) => {
        if (isDraggingAboutMe) {
            const currentMouseX = e.clientX;
            const currentMouseY = e.clientY;

            aboutModal.style.setProperty(
                "--aboutX",
                `${currentMouseX - offsetX}px`,
            );
            aboutModal.style.setProperty(
                "--aboutY",
                `${currentMouseY - offsetY}px`,
            );
        }
    });

    document.addEventListener("mouseup", () => {
        isDraggingAboutMe = false;
    });
});


// Projects Modal Opening With Random Positioning
projectsBtn.addEventListener("click", () => {
    if (!isOpenProjects) {
        isOpenProjects = true;

        const modalWidth = projectsModal.offsetWidth;
        const modalHeight = projectsModal.offsetHeight;

        const maxX = window.innerWidth - modalWidth - 20;
        const minX = 10;
        const randomX =Math.max(minX, Math.random() * (maxX - minX) + minX);

        const maxY = window.innerHeight - modalHeight - 20;
        const minY = 50;
        const randomY = Math.max(minY, Math.random() * (maxY - minY) + minY);

        projectsModal.style.setProperty("--projectsX", `${randomX}px`);
        projectsModal.style.setProperty("--projectsY", `${randomY}px`);
        projectsModal.style.transform = `scale(1)`;

        projectsModal.classList.add("show");
        projectsBtn.classList.add("highlighted");
    } else if (isOpenProjects) {
        isOpenProjects = false;

        projectsModal.classList.remove("show");
        projectsBtn.classList.remove("highlighted");
    }
});

// Projects Modal Closing
closeProjects.addEventListener("click", () => {
    isOpenProjects = false;

    projectsModal.classList.remove("show");
    projectsBtn.classList.remove("highlighted");
});

// Projects Modal Dragging
projectsHeader.addEventListener("mousedown", (e) => {
    isDraggingProjects = true;

    const modalTop = projectsModal.getBoundingClientRect().top;
    const modalLeft = projectsModal.getBoundingClientRect().left;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = mouseX - modalLeft;
    const offsetY = mouseY - modalTop;

    document.addEventListener("mousemove", (e) => {
        if (isDraggingProjects) {
            const currentMouseX = e.clientX;
            const currentMouseY = e.clientY;

            projectsModal.style.setProperty(
                "--projectsX",
                `${currentMouseX - offsetX}px`,
            );
            projectsModal.style.setProperty(
                "--projectsY",
                `${currentMouseY - offsetY}px`,
            );
        }
    });

    document.addEventListener("mouseup", () => {
        isDraggingProjects = false;
    });
});


// Contact Modal Opening With Random Positioning
contactBtn.addEventListener("click", () => {
    if (!isOpenContact) {
        isOpenContact = true;

        const modalWidth = contactModal.offsetWidth;
        const modalHeight = contactModal.offsetHeight;

        const maxX = window.innerWidth - modalWidth - 20;
        const minX = 10;
        const randomX =Math.max(minX, Math.random() * (maxX - minX) + minX);

        const maxY = window.innerHeight - modalHeight - 20;
        const minY = 50;
        const randomY = Math.max(minY, Math.random() * (maxY - minY) + minY);

        contactModal.style.setProperty("--contactX", `${randomX}px`);
        contactModal.style.setProperty("--contactY", `${randomY}px`);
        contactModal.style.transform = `scale(1)`;

        contactModal.classList.add("show");
        contactBtn.classList.add("highlighted");
    } else if (isOpenContact) {
        isOpenContact = false;

        contactModal.classList.remove("show");
        contactBtn.classList.remove("highlighted");
    }
});

// Contact Modal Closing
closeContact.addEventListener("click", () => {
    isOpenContact = false;

    contactModal.classList.remove("show");
    contactBtn.classList.remove("highlighted");
});

// Contact Modal Dragging
contactHeader.addEventListener("mousedown", (e) => {
    isDraggingContact = true;

    const modalTop = contactModal.getBoundingClientRect().top;
    const modalLeft = contactModal.getBoundingClientRect().left;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = mouseX - modalLeft;
    const offsetY = mouseY - modalTop;

    document.addEventListener("mousemove", (e) => {
        if (isDraggingContact) {
            const currentMouseX = e.clientX;
            const currentMouseY = e.clientY;

            contactModal.style.setProperty(
                "--contactX",
                `${currentMouseX - offsetX}px`,
            );
            contactModal.style.setProperty(
                "--contactY",
                `${currentMouseY - offsetY}px`,
            );
        }
    });

    document.addEventListener("mouseup", () => {
        isDraggingContact = false;
    });
});