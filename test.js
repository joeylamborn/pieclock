var minute_state;
function setup() {
  createCanvas(400, 400);
  minute_state = minute();
}

function draw() {
  if (minute_state != minute()) {
    console.log("New minute: ", minute());
    minute_state = minute();
  }
  background(220);
  fill(0, 122, 10, 100);

  /*

    arc(x, y, w, h, start, stop, mode)

    x: This parameter is used to hold the value of x-coordinate of the arc of ellipse.
    y: This parameter is used to hold the value of y-coordinate of the arc of ellipse.
    w: This parameter takes the value of width of the arc of ellipse.
    h: This parameter takes the value of height of the arc of ellipse.
    start: This parameter takes the value of angle to start the arc, specified in radians.
    stop: This parameter takes the value of angle to stop the arc, specified in radians.
    mode: This is an optional parameter which determines the way of drawing the arc either CHORD, PIE or OPEN
  
  */

  var hour_angle = TWO_PI * (hour() / 24);
  var minute_angle = TWO_PI * (minute() / 60);
  var second_angle = TWO_PI * (second() / 60);

  arc(150, 150, 280, 280, 3 * HALF_PI, hour_angle - HALF_PI);

  fill(0, 122, 10, 50);
  arc(150, 150, 150, 150, 3 * HALF_PI, minute_angle - HALF_PI);

  fill(0, 122, 10, 50);
  arc(150, 150, 25, 25, 3 * HALF_PI, second_angle - HALF_PI);
}
