const sky = document.getElementById("sky");

function createStar(isMoving) {
    const star = document.createElement("div");
    star.className = "star";
    sky.appendChild(star);

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    const size = Math.random() * 3;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const speed = Math.random() * 0.5;
    const direction = Math.random() * 360;

    let opacity = Math.random();
    let opacityDirection = Math.random() > 0.5 ? 1 : -1;

    if (Math.random() < 0.01) star.classList.add("cross");
    if (isMoving) moveStar();

    function moveStar() {
        const radians = direction * (Math.PI / 180);
        const offsetX = Math.cos(radians) * speed;
        const offsetY = Math.sin(radians) * speed;

        x += offsetX;
        y += offsetY;

        if (x < -size || x > window.innerWidth || y < -size || y > window.innerHeight) {
            star.remove();
        } else {
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;

            opacity += opacityDirection * 0.01;
            if (opacity <= 0 || opacity >= 1) {
                opacityDirection *= -1;
            }
            star.style.opacity = opacity;

            requestAnimationFrame(moveStar);
        }
    }
}

const createStars = (() => {
    Array.from({ length: 500 }).map(() => {
        const isMoving = Math.random() < 0.4;
        createStar(isMoving);
    });
})();
