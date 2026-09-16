// =====================================
// MOBILE MENU
// =====================================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("active");

    }
);


// Close menu after clicking navigation link

const navItems =
    document.querySelectorAll("#navLinks a");


navItems.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("active");

            }
        );

    }
);



// =====================================
// GALLERY POPUP
// =====================================

const thumbnails =
    document.querySelectorAll(".thumbnail");

const popup =
    document.getElementById("imagePopup");

const popupImage =
    document.getElementById("popupImage");

const closePopup =
    document.getElementById("closePopup");


// Open image

thumbnails.forEach(
    function (image) {

        image.addEventListener(
            "click",
            function () {

                popupImage.src =
                    image.src;

                popupImage.alt =
                    image.alt;

                popup.style.display =
                    "flex";

            }
        );

    }
);


// Close popup button

closePopup.addEventListener(
    "click",
    function () {

        popup.style.display =
            "none";

    }
);


// Close by clicking outside image

popup.addEventListener(
    "click",
    function (event) {

        if (event.target === popup) {

            popup.style.display =
                "none";

        }

    }
);


// Close using Escape

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            popup.style.display =
                "none";

        }

    }
);



// =====================================
// CONTACT FORM
// =====================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const button =
            contactForm.querySelector("button");


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        if (
            !name ||
            !email ||
            !phone ||
            !message
        ) {

            formMessage.textContent =
                "Please fill all the details.";

            formMessage.style.color =
                "red";

            return;

        }


        formMessage.textContent =
            "Sending your message...";

        formMessage.style.color =
            "#087f7b";


        button.disabled = true;

        button.textContent =
            "Sending...";


        try {

            const response =
                await fetch(
                    contactForm.action,
                    {
                        method: "POST",

                        body:
                            new FormData(
                                contactForm
                            ),

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );


            if (response.ok) {

                formMessage.textContent =
                    "✅ Message sent successfully!";

                formMessage.style.color =
                    "green";

                contactForm.reset();

            } else {

                formMessage.textContent =
                    "❌ Message could not be sent. Please try again.";

                formMessage.style.color =
                    "red";

            }

        }

        catch (error) {

            console.error(error);

            formMessage.textContent =
                "❌ Something went wrong. Please try again.";

            formMessage.style.color =
                "red";

        }


        button.disabled = false;

        button.textContent =
            "Send Message";

    }
);
