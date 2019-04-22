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
        currentStream.src = "assets/forwards.ogv"
        currentStream.currentTime = curTime;
        currentStream.play();
        dream = !dream;
    }
    else{
        curTime = currentStream.currentTime;
        currentStream.pause();
        currentStream.src = "assets/reverse.ogv"
        currentStream.currentTime = curTime;
        currentStream.play();
        dream = !dream;
    }

}
    