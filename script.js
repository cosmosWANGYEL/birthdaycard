function openGift() {

    document.getElementById("gift-container").style.display = "none";
    document.getElementById("content").style.display = "block";

    typeText();
    createBalloons();
    createConfetti();
}

function typeText() {

    const text = "🎉 Happy Belated Birthday 🎉";

    let i = 0;

    const speed = 100;

    const interval = setInterval(() => {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(interval);
        }

    }, speed);
}

function createBalloons() {

    for (let i = 0; i < 25; i++) {

        let balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.innerHTML = "🎈";

        balloon.style.left = Math.random() * 100 + "vw";

        balloon.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document.body.appendChild(balloon);
    }
}

function createConfetti() {

    const emojis = ["🎊", "✨", "🎉"];

    for (let i = 0; i < 50; i++) {

        let confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(confetti);
    }
}