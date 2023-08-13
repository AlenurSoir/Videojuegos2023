const ship = document.getElementById("ship");
const obstacle = document.getElementById("obstacle");

let shipX = 125; // Posición inicial de la nave
let obstacleleft = 100;
let obstacleTop=0;
let score = 0;

function updateGameArea() {
  // Mover la nave con las teclas izquierda y derecha
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      if (shipX > 0) shipX -= 10;
    } else if (event.key === "ArrowRight") {
      if (shipX < 250) shipX += 10;
    }
  });

  ship.style.left = shipX + "px";

  // Mover el obstáculo hacia abajo
  obstacleTop += 5;

  obstacle.style.top = obstacleTop + "px";

    // Colisión con el obstáculo
  if (
    obstacleTop + 50 > 350 &&
    obstacleTop < 400 &&
    shipX + 50 > parseInt(obstacle.style.left) &&
    shipX < parseInt(obstacle.style.left) + 50
  ) {
    alert("¡Game Over! Puntuación: " + score);
    location.reload();
  }

  // Reiniciar el obstáculo y aumentar la puntuación
  if (obstacleTop > 400) {
    obstacleTop = -50;
    obstacle.style.left = Math.floor(Math.random() * 250) + "px";
    score++;
  }

  requestAnimationFrame(updateGameArea);
}

updateGameArea();