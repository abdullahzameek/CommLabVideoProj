let currentStream = document.getElementById("main");
let curTime = 0;
let dream = false;

function scrollthis(){
    document.getElementById("section").scrollIntoView({ block: 'end',  behavior: 'smooth' });
}


function toggle(){
    if(!dream){
        curTime = currentStream.currentTime;
        currentStream.pause();
        currentStream.src = "assets/v1.1_dream_final.mp4"
        currentStream.currentTime = curTime;
        currentStream.play();
        dream = !dream;
    }
    else{
        curTime = currentStream.currentTime;
        currentStream.pause();
        currentStream.src = "assets/v1.1_normal.mp4"
        currentStream.currentTime = curTime;
        currentStream.play();
        dream = !dream;
    }

}
    