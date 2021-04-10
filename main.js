function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.postion(560, 150);
    postNet = ml5.postNet(video, modelLoaded);
    postNet.on('pose', gotPoses);
}
 
function modelLoaded(){
console.log('PostNet is inistiliazed!')
}
 
function draw(){
    background('#969A97');
}
 
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}


