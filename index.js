const welcomeMessage = "bne Kerim ";
const welcomeMessageId = document.getElementById("welcomeMessage");
const welcomeMessages = [":3", "öcüü!", "böö!", "cöö!", "öcü!", "bö!", "cö!"];
let i = 0;

setTimeout(() => {
  setInterval(() => {
    if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6) {
      welcomeMessageId.innerHTML = welcomeMessage + welcomeMessages[i];
      if (i == 6) {
        i = 0;
      } else i++;
    };
  }, 1 * 1000);
}, 1 * 1000);