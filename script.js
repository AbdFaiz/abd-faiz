document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".navbar", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-text", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".hero-image", {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        delay: 0.8,
    });
    gsap.from(".scroll-down", {
        opacity: 0,
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1,
    });

    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
    });

    var options = {
        strings: ["Software Enginer Student", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
    };

    var typed = new Typed(".typewriter-text", options);

});
const openModal = (title, description, iconClass) => {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById(
        "modal-icon"
    ).className = `text-6xl ${iconClass}`;
    const modal = document.getElementById("skill-modal");
    const modalContent = document.getElementById("modal-content");
    modal.classList.remove("hidden");
    setTimeout(() => {
        modalContent.classList.remove("scale-90", "opacity-0");
        modalContent.classList.add("scale-100", "opacity-100");
    }, 10);
};
const closeModal = () => {
    const modal = document.getElementById("skill-modal");
    const modalContent = document.getElementById("modal-content");
    modalContent.classList.remove("scale-100", "opacity-100");
    modalContent.classList.add("scale-90", "opacity-0");
    setTimeout(() => modal.classList.add("hidden"), 300);
};

function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const need = document.getElementById('need').value;
    const email = document.getElementById('email').value;

    if (!name || !need || !email) {
        Swal.fire({
            title: "Form not complete?",
            text: "Complete the form before submitting!",
            icon: "error"
        });
        return;
    }

    const subject = `Contact Form Submission from ${encodeURIComponent(name)}`;
    const body = `Name: ${encodeURIComponent(name)}%0A` +
        `Need: ${encodeURIComponent(need)}%0A` +
        `Email: ${encodeURIComponent(email)}`;

    const mailtoLink = `mailto:abdurrahmanfaiz187@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open the mailto link
    window.location.href = mailtoLink;
}