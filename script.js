var change=0;
var fchange=0;
document.body.addEventListener("mousemove",function(e){
const cur=document.querySelector("#cursor");
cur.style.position="fixed";
cur.style.left=e.clientX+"px";
cur.style.top=e.clientY+"px";
cur.style.transform="translate(-50%,-50%)";
});
document.querySelector("#cursor").addEventListener("click",function(e){
    const play=document.querySelector("#kk");
    if(change==0){
        
play.className="fa-solid fa-pause";
change=1;
document.querySelector("#disc").style.animationName="rotate";
document.querySelector("#disc").style.animationPlayState="running";
document.querySelector("#disc").style.border="1.5px solid white";
document.querySelector("#blue").play();
if(fchange===0){
    fireflies();
    fchange=1;
}

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
 
if(cdur>19.2&&cdur<22.8){
    document.querySelector("#t1").innerHTML=" <p>  Your Morning  <k>Eyes</k>, I could stare <p>";
  
}
else if(cdur>22.8&&cdur<25.8){
    document.querySelector("#t2").innerHTML="  <p>  like watching <k>stars</i></k>  <i class='fa-solid fa-star' style='transform:rotate(45deg)'>  </p>  ";
    document.querySelector("#t1").innerHTML="";
}
else if(cdur>26.1&&cdur<28.9){
    document.querySelector("#t1").innerHTML="  <p>  I could walk <k>You</k> by    </p><i class='fa-solid fa-cloud'></i>  ";
    document.querySelector("#t2").innerHTML="";
}
else if(cdur>28.85&&cdur<31.9){
    document.querySelector("#t2").innerHTML=" <p>  and I'll tell <k>without</k> a <k>thought</k>  </p> ";
    document.querySelector("#t1").innerHTML="";
}
else if(cdur>31.85&&cdur<36.7){
    document.querySelector("#t1").innerHTML=" <p> <k> You'd be mine,</k> </p>  ";
    document.querySelector("#t2").innerHTML="  <p>  <k>would you mind</k>  </p>  ";
}
else if(cdur>36.65&&cdur<39.7){
    document.querySelector("#t1").innerHTML=" <p> <k>If i took your</k> </p>  ";
    document.querySelector("#t2").innerHTML=" <p>   <k><br> hand<br> tonight</k>  </p> ";
}
else if(cdur>40&&cdur<42.4){
    document.querySelector("#t1").innerHTML=" <p> Know  you're<br> <k>all</k> that I  </p> ";

}
else if(cdur>42.35&&cdur<46.9){
    document.querySelector("#t2").innerHTML=" <p> <k>want in this life</k>  </p> ";  
    document.querySelector("#t1").innerHTML="";
}
else if(cdur>47.9&&cdur<50.3){
    document.querySelector("#t1").innerHTML=" <p> I'll <br><k>imagine</k>  we fell in love  </p>  <i class='fa-solid fa-heart'> </i> ";  
    document.querySelector("#t2").innerHTML="";
}
else if(cdur>50.25&&cdur<53.3){
    document.querySelector("#t2").innerHTML=" <p> I'll <br><k>nap</k>under <r style='color:white;text-shadow:0 0 0px white,0 0 20px white,0 0 40px white'>moonlight</r> skies with you </p>  </i> ";  
    document.querySelector("#t1").innerHTML="";
}
else if(cdur>54.25&&cdur<56.3){
    document.querySelector("#t1").innerHTML=" <p> I think i'll <k>picture</k> us,  </p>  ";  
    document.querySelector("#t2").innerHTML="";
}
else if(cdur>56.25&&cdur<58.3){
    document.querySelector("#t2").innerHTML="<k> you with the <r style='color:lightblue;text-shadow:0 0 0px lightblue,0 0 20px lightblue,0 0 40px lightblue'>waves</r> </k>  ";  
  
}

else{
    document.querySelector("#t1").innerHTML="";
    document.querySelector("#t2").innerHTML="";
}
if(per===100){
    const play=document.querySelector("i");
    play.className="fa-solid fa-play";
    change=0;
    document.querySelector("#disc").style.animationPlayState="paused";
}
const prog=document.querySelector("#pro");
prog.style.width=per+"%";

}
const fireanimation=["move","move1","move2","move3"];
function fireflies(){
    for(var i=0;i<70;i++){
    const fire=document.createElement("div");
    fire.className="ffly";
    fire.style.left=Math.random()*100+"%";
    fire.style.top=Math.random()*100+"%";
    fire.style.animationName=fireanimation[Math.floor(Math.random()*4)];
    var dur=Math.random()*49;
    if(dur<10){
        dur+=20;
    }
    dur=Math.floor(dur);
    fire.style.animationDuration=dur+"s";
    document.body.appendChild(fire);
}
}
