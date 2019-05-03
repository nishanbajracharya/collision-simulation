function init() {
  const canvas = document.getElementById('canvas');

  canvas.setAttribute('width', toPX(VIEWPORT_WIDTH));
  canvas.setAttribute('height', toPX(VIEWPORT_HEIGHT));

  const ctx = canvas.getContext('2d');

  const circles = [new Circle()];

  function clearCanvas(ctx) {
    ctx.clearRect(VIEWPORT_LEFT, VIEWPORT_TOP, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
  }

  function animate() {
    clearCanvas(ctx);

    circles.forEach(circle => {
      circle.draw(ctx);
      circle.update();

      circle.checkWallCollision(VIEWPORT_LEFT, VIEWPORT_TOP, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
    });

    window.requestAnimationFrame(animate);
  }

  animate();
}

init();