Song="";
LeftWristX=0;
LeftWristY=0;
RightWristY=0;
RightWristX=0;
function preload() {
    Song=loadSound("music.mp3")
    
}

function setup() {
 canvas=createCanvas(500,500)   
 canvas.position(500,200)
 Video=createCapture(VIDEO)
 Video.hide()
 posenet=ml5.poseNet(Video,modelLoaded)
 posenet.on("pose",gotPoses)
}
function gotPoses(result) {
 console.log(result)

 LeftWristX=result[0].pose.leftWrist.x
 LeftWristY=result[0].pose.leftWrist.y
 RightWristY=result[0].pose.rightWrist.y
 RightWristX=result[0].pose.rightWrist.x
}
function modelLoaded() {
console.log("yay model is working")
}
function draw() {
    image(Video,0,0,500,500)
    fill("red")
    circle(RightWristX,RightWristY,30)
    circle(LeftWristX,LeftWristY,30)   
    

   
}
function play(){
Song.play()
Song.setVolume(1.0)
Song.rate(1.0)
} 