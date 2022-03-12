function setup(){
  canvas = createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet = ml5.PoseNet(video,modelLoaded);
  poseNet.on('pose',GotPoses);
}
function modelLoaded(){
  console.log('PoseNet is initialized');
}
function GotPoses(results){
console.log(results)
console.log("nose x = " +results[0].pose.nose.x)
console.log("nose y = " +results[0].pose.nose.y)
}
function draw(){
  image(video,0,0,300,300);
}
function take_snapshot(){
  save('my_filter_image.png');
}
