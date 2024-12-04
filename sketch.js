let r = 150;
function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);
  stroke(205, 50, 100);
  strokeWeight(4);
}

function draw() {
  background(230, 50, 15);
  orbitControl(4, 4);

  rotateX(-30);

  for (let r = 0; r <= 1.02; r += 0.02) {
    stroke(340, -r * 50 + 100, r * 50 + 50);
    beginShape(POINTS);
    for (let theta = -2 * 180; theta <= 180 * 15; theta += 2) {
      let phi = (180 / 2) * Math.exp(-theta / (8 * 180));
      let petalCut =
        1 -
        (1 / 2) *
          pow((5 / 4) * pow(1 - ((3.6 * theta) % 360) / 180, 2) - 1 / 4, 2);
      let hangDown = 2 * pow(r, 2) * pow(1.3 * r - 1, 2) * sin(phi);

      if (0 < petalCut * (r * sin(phi) + hangDown * cos(phi))) {
        let pX =
          150 * petalCut * (r * sin(phi) + hangDown * cos(phi)) * sin(theta);
        let pY = -150 * petalCut * (r * cos(phi) - hangDown * sin(phi));
        let pZ =
          150 * petalCut * (r * sin(phi) + hangDown * cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
  }
}

function windowResized() {
  resizeCanvas(400, 400);
}
