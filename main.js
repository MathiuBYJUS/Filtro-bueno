noseX=100;
noseY=100;
nosex=100;
nosey=100;

function preload() {
  clown_nose = loadImage('Pelo.png');
  clown_nose1 = loadImage('Barba.png');
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-65;
    noseY = results[0].pose.nose.y-150;
    nosex = results[0].pose.nose.x-65;
    nosey = results[0].pose.nose.y-5;
    ;
  }
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(clown_nose, noseX, noseY, 150, 130);
  image(clown_nose1, nosex, nosey, 140, 150);
}

function take_snapshot(){    
  save('foto.png');
}