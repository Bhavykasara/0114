function preload() {
    img2=loadImage("https://lh3.googleusercontent.com/proxy/ybNDBt2_AOSou18nANJX5SIL7SMNp_696WrsMRks3KfclmvVsKeko_iEduLplsy4ktFWATNXWFsjP6NvEzvvfcCosdzH5sX6l1BOF57Z0eOWCUUHT-emKw9pe-MUr9EKjjRXBmmbg3iABfzIcm7ZsEfBYgfmaq2XyAHDBMnHVu0")
    img=loadImage("https://lh3.googleusercontent.com/proxy/X12PjD9n8bkTggXKJWQc4Mdxwiha-oAylnqsMM3w6bDTqrwJPC2yuR8vF0OHd6iqpBWHYUAwROJ5xdhrz-rTiJsK-IJFZrs8PdP2Bo8n1p82oAEWza_B");
}

nosex=0;
nosey=0;
x2=0;
y2=0;
x3=0;
y3=0;

function setup() {
    canvas=createCanvas(300,300);
    vedio=createCapture(VIDEO);
    vedio.size(300,300);
    vedio.hide();
    poseNet=ml5.poseNet(vedio,modalLoaded);
    poseNet.on('pose',gotPoses);
}

function modalLoaded() {
    console.log("modal is loaded");
}

function gotPoses(poses) {
    if (poses.length > 0) {
        nosex=poses[0].pose.keypoints[0].position.x;
        nosey=poses[0].pose.keypoints[0].position.y;
        xo2=poses[0].pose.keypoints[1].position.x;
        yo2=poses[0].pose.keypoints[1].position.y;
        x3=poses[0].pose.keypoints[2].position.x;
        y3=poses[0].pose.keypoints[2].position.y;
    }
}

function draw() {
    image(vedio,0,0,300,300);
    image(img,nosex-30,nosey,60,30);
    image(img2,x3-15,y3-15,60,30);
}

function take_snapshot() {
    save("mustache_and_glasses_image.png");
}