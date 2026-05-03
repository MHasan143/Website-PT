/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '50px',
   duration: 2000,
   // reset: true, // Animations repeat
})


sr.reveal(`.logo`, {origin: 'right'})
sr.reveal(`.nav__toggle`, {origin: 'left'})
/* sr.reveal(`.hero__btn`, {origin: 'bottom', delay: 500}) */
sr.reveal(`.para`, {origin: 'top', delay: 800})
sr.reveal('.wa-btn', {origin: 'right', delay: 5000})


sr.reveal(`.brand`, {origin: 'top', delay: 300})
sr.reveal(`.info`, {origin: 'right', delay: 400})
sr.reveal(`.links`, {origin: 'bottom', delay: 400})
sr.reveal(`.socio`, {origin: 'left', delay: 400})

sr.reveal(`.logo1`, {origin: 'left', delay: 100})
sr.reveal(`.logo2`, {origin: 'right', delay: 100})
sr.reveal(`.logo3`, {origin: 'left', delay: 100})
sr.reveal(`.logo4`, {origin: 'right', delay: 100})
sr.reveal(`.logo5`, {origin: 'left', delay: 100})
sr.reveal(`.logo6`, {origin: 'right', delay: 100})

sr.reveal('.phone, .whatsapp, .office', {origin: 'right', delay: 100})
sr.reveal('.email, .time', {origin: 'left', delay: 100})

sr.reveal(`.map-wrapper`, {origin: 'left', delay: 800})

sr.reveal(`.contact-form`, {origin: 'top', delay: 350})

sr.reveal('.textbox1, .textbox3, .textbox5, .imagebox2, .imagebox4, .textbox7, .textbox9, .tilebox6, .tilebox8', {origin: 'right'})
sr.reveal('.textbox2, .textbox4, .textbox6, .textbox8, .imagebox1, .imagebox3, .imagebox5, .tilebox7, .tilebox9', {origin: 'left'})
sr.reveal(`.products__imagemain`, {origin: 'top', delay: 350})

sr.reveal('.imgbox', {origin: 'left'})
sr.reveal('.img__box', {origin: 'bottom'})

/*
sr.reveal(`.about__data, .contact__map`, {origin: 'left'})
sr.reveal(`.about__img, .contact__data`, {origin: 'right'})

sr.reveal(`.prices__box`)
sr.reveal(`.prices__swiper`, {origin: 'bottom', delay: 600})

sr.reveal(`.gallery__image`, {interval: 100})

sr.reveal(`.footer__container`)

*/


/* XXXXXXXXXXXX WHATSAPP WIDGET XXXXXXXXXXX */

/*

const waBtn = document.getElementById("waBtn");
const waChat = document.getElementById("waChat");
const waClose = document.getElementById("waClose");
const waSend = document.getElementById("waSend");
const waInput = document.getElementById("waInput");
const waBody = document.getElementById("waBody");
const typing = document.getElementById("typingIndicator");

waBtn.onclick = () => waChat.style.display = "flex";
waClose.onclick = () => waChat.style.display = "none";

waSend.onclick = () => {
    let text = waInput.value.trim();
    if (!text) return;

    // Add user message
    let msg = document.createElement("div");
    msg.className = "msg user";
    msg.innerText = text;
    waBody.appendChild(msg);

    waInput.value = "";
    waBody.scrollTop = waBody.scrollHeight;

    // Show typing animation
    typing.style.display = "flex";
    waBody.appendChild(typing);

    setTimeout(() => {
        typing.style.display = "none";

        // Redirect to WhatsApp
        window.open(
            "https://wa.me/923012245121?text=" + encodeURIComponent(text),
            "_blank"
        );
    }, 1200);
};

*/

// WhatsApp Widget Elements
const waBtn = document.getElementById("waBtn");
const waChat = document.getElementById("waChat");
const waClose = document.getElementById("waClose");
const waSend = document.getElementById("waSend");
const waInput = document.getElementById("waInput");
const waBody = document.getElementById("waBody");
const typing = document.getElementById("typingIndicator");

// Open chat box with animation
waBtn.onclick = () => {
    waChat.style.display = "flex";

    // Restart animation
    waChat.classList.remove("open");
    // Force reflow so animation can restart
    void waChat.offsetWidth;
    waChat.classList.add("open");
};

// Close chat box
waClose.onclick = () => {
    waChat.style.display = "none";
};

// Send message
waSend.onclick = () => {
    let text = waInput.value.trim();
    if (!text) return;

    // Create user message bubble
    let msg = document.createElement("div");
    msg.className = "msg user";
    msg.innerText = text;
    waBody.appendChild(msg);

    // Clear input
    waInput.value = "";

    // Scroll to bottom
    waBody.scrollTop = waBody.scrollHeight;

    // Show typing indicator (only once)
    if (!waBody.contains(typing)) {
        waBody.appendChild(typing);
    }
    typing.style.display = "flex";

    // Simulate agent typing then redirect
    setTimeout(() => {
        typing.style.display = "none";

        window.open(
            "https://wa.me/923316668106?text=" + encodeURIComponent(text),
            "_blank"
        );
    }, 1200);
};

waInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault(); // prevents newline or form submit
        waSend.click();     // triggers your send button
    }
});



/* xxxxxx Chatbox height adgjstmeny xxxxxxx */
/*
function setChatHeight() {
  const chat = document.querySelector(".wa-chat-box");

  if (window.visualViewport) {
    chat.style.height = window.visualViewport.height + "px";
  }
}

setChatHeight();

window.visualViewport?.addEventListener("resize", setChatHeight);
window.addEventListener("orientationchange", setChatHeight);

*/
