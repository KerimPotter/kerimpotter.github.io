const welcomeMessage = document.getElementById("welcomeMessage");
const welcomeMessages = ["öcüü!", "böö!", "cöö!", "öcü!","bö!", "cö!", ":3"];
const randomWelcomeMessageSelecter = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

welcomeMessage.innerHTML += randomWelcomeMessageSelecter;