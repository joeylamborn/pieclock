let NUMSINES = 2; // how many of these things can we do at once?
let rad; // an initial radius value for the central sine
let i; // a counter variable

function setup() {
  createCanvas(710, 400);

  rad = height / 4; // compute radius for central circle
  background(204); // clear the screen
}

function draw() {
  background(204); // clear screen if showing geometry
  stroke(0, 255); // black pen
  noFill(); // don't fill

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width / 2, height / 2); // move to middle of screen

  for (let i = 0; i < NUMSINES; i++) {
    let radius = rad / (i + 1); // radius for circle itself
    var angle;

    if (i == 0) {
      // hour
      angle = TWO_PI * (hour() / 24);
      console.log("Hour: ", hour());
    } else if (i == 1) {
      // minute
      angle = TWO_PI * (minute() / 60);
      console.log("minute: ", minute());
    } else {
      angle = TWO_PI * (second() / 60);
      console.log("Second: ", second());
    }

    rotate(angle); // rotate circle

    ellipse(0, 0, radius * 2, radius * 2); // draw the sine
    push(); // go up one level
    translate(p5.Vector.fromAngle(angle, radius)); // move to sine edge
    ellipse(0, 0, 5, 5); // draw a little circle
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
  }

  pop(); // pop down final transformation
}
