class Circle {
  constructor(props) {
    this.x = props && props.x || DEFAULT_X;
    this.y = props && props.y || DEFAULT_Y;
    this.speed = props && props.speed || DEFAULT_SPEED;
    this.radius = props && props.radius || DEFAULT_RADIUS;
    this.diameter = this.radius * 2;

    this.top = this.y - this.radius;
    this.left = this.x - this.radius;

    this.dx = props && props.dx || DEFAULT_DX;
    this.dy = props && props.dy || DEFAULT_DY;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  update() {
    this.x += this.speed * this.dx;
    this.y += this.speed * this.dy;

    this.top = this.y - this.radius;
    this.left = this.x - this.radius;
  }

  checkWallCollision(boundaryLeft, boundaryTop, boundaryRight, boundaryBottom) {
    if (this.top <= boundaryTop || (this.top + this.diameter) >= boundaryBottom) {
      this.dy *= -1;
    }

    if (this.left <= boundaryLeft || (this.left + this.diameter) >= boundaryRight) {
      this.dx *= -1;
    }
  }
}