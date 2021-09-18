function setup() {
 canvas = createCanvas(400, 400)
 canvas.position(110, 250);
 video = createCapture(VIDEO);
 video.hide()
 video.position (187, 350);
}

function draw() {

 fill(500, 0, 200);
 stroke(10, 40, 70)
 rect(50, 50, 300, 300)

 fill(100, 0, 500);
 stroke(10, 40, 70)
 circle(350, 50, 70)
 
 fill(100, 0, 500);
 stroke(10, 40, 70)
 circle(50, 50, 70)
 
 fill(100, 0, 500);
 stroke(10, 40, 70)
 circle(50, 350, 70)
 
 fill(100, 0, 500);
 stroke(10, 40, 70)
 circle(350, 350, 70)

 image(video, 75, 75, 250, 250);
}

function take_snapshot(){
 save('Olivia_Charrois.png');
}