var change=0;

document.body.addEventListener("mousemove",function(e){
const cur=document.querySelector("#cursor");
cur.style.position="fixed";
cur.style.left=e.clientX+"px";
cur.style.top=e.clientY+"px";
cur.style.transform="translate(-50%,-50%)";
});
document.querySelector("#cursor").addEventListener("click",function(e){
    const play=document.querySelector("i");
    if(change==0){
        
play.className="fa-solid fa-pause";
change=1;
document.querySelector("#disc").style.animationName="rotate";
document.querySelector("#disc").style.animationPlayState="running";
document.querySelector("#disc").style.border="1.5px solid white";
document.querySelector("#blue").play();
    }
    else{
        play.className="fa-solid fa-play";
        document.querySelector("#disc").style.animationPlayState="paused";
        change=0;
        document.querySelector("#blue").pause();
    }
   
    });
    document.querySelector("#duration").addEventListener("click",function(e){
        const aud=document.querySelector("#blue");
        const prog=document.querySelector("#pro");
        const orig=document.querySelector("#duration");
        var f=(e.offsetX/orig.offsetWidth)*100;
        var dur=(aud.duration*f)/100;
        aud.currentTime=dur;
   
    });
    document.querySelector("#blue").addEventListener('timeupdate',updatedur);
function updatedur(){
    const aud=document.querySelector("#blue");
    var dur=aud.duration;
var cdur=aud.currentTime;
var per=(cdur/dur)*100;
if(per===100){
    const play=document.querySelector("i");
    play.className="fa-solid fa-play";
    change=0;
    document.querySelector("#disc").style.animationPlayState="paused";
}
const prog=document.querySelector("#pro");
prog.style.width=per+"%";

}
