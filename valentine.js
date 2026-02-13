const yes = document.getElementById("yes");
const no = document.getElementById("no");
const pageTwo = document.getElementById("pageTwo");
const pageOne = document.getElementById("pageOne");
const messageBtn = document.querySelector(".message");
const hiddenMessage = document.getElementById("hiddenMessage");

yes.onclick = () => {
   pageTwo.style.display = "flex";
   pageOne.style.display = "none";
};

messageBtn.onclick = () => {
    hiddenMessage.style.display = "block"; 
};

no.onmouseover = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    no.style.position = "relative";
    no.style.left = x + "px";
    no.style.top = y + "px";
};