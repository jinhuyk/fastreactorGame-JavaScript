
let startbtn =document.querySelector(".start-btn")
let htdbtn =document.querySelector(".htd-btn")

function Start(){
    clearInterval(ongame)
    $(".game_text").css("display","none")
    $(".inso").css("display","none")
    startbtn.style.display = "none"
    htdbtn.style.display = "none"
    audio = document.getElementById("audio_play")
    Menu()
}
function Menu(){
    $(".score").text("SELECT MODE")
    var menu_btn = '<button type="button"  class="btn btn-outline-warning menu-btn" onclick="Solo(0)">EASY</button>'
    menu_btn += '<br><button type="button" class="btn btn-outline-warning menu-btn" onclick="Solo(100)">NORMAL</button>'
    menu_btn += '<br><button type="button" class="btn btn-outline-warning menu-btn" onclick="Solo(200)">HARD</button>'
    
    menu_btn += '<br><button type="button" style="width: 200px;" class="btn btn-outline-warning " onclick="HowTo()">BACK</button>'
    $(".touch-view").html(menu_btn)
}
function Solo(fast){
    On()
    let stage = 0
    let score = 0
    $(".inso").css("display","block")
    $(".menu-btn").css("display","none")
    $(".info").attr("src","/resources/img/info/info.png").css("display","block")
    
    if(fast == 200) {
        score = 100
    }
    if(fast == 100){
        score = 75
    }
    if(fast == 0){
        score =50
    }
    
    $(".score").text(String(score))
    let sbtn = '<div class="btn-group bgm" role="group" aria-label="Basic radio toggle button group"><input type="radio" class="btn-check " onclick="On()" name="btnradio" id="btnradio1" autocomplete="off" checked><label class="btn btn-outline-warning" for="btnradio1">BGM ON</label><input type="radio" onclick="Mute()" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"><label class="btn btn-outline-warning" for="btnradio2">BGM OFF</label></div>'
    sbtn += '<br><button type="button" style="width: 200px;" class="btn btn-outline-warning soloplay-btn" onclick="SoloPlay('+score+',0,'+fast+')">GAME START</button>'
    $(".touch-view").html(sbtn)
}

function HowTo(){
    clearInterval(ongame)
    $(".inso").css("display","none")
    $(".game_text").css("display","none")
    $(".info").css("display","none")
    $(".score").text("GUIDE")
    startbtn.style.display = "none"
    htdbtn.style.display = "none"
    $(".menu-btn").css("display","none")
    $(".bgm").css("display","none")
    let sbtn = '<button type="button"  style="width: 200px;" class="btn btn-outline-warning info1btn" onclick="info1()">HOW TO PLAY</button>'
     sbtn += '<br><button type="button" style="width: 200px;" class="btn btn-outline-warning info2btn" onclick="info2()">MODE</button>'
     sbtn += '<br><button type="button"style="width: 200px;"  class="btn btn-outline-warning info3btn" onclick="info3()">SCORE</button>'
     sbtn += '<br><button type="button"style="width: 200px;"  class="btn btn-outline-warning info4btn" onclick="info4()">DEVELOPER</button>'
     sbtn += '<br><button type="button" style="width: 200px;" class="btn btn-outline-warning " onclick="window.location.reload()">BACK</button>'
     $(".touch-view").html(sbtn)
}

function info1(){
    $(".info").css("display","none")
    $(".score").text("HOW TO PLAY")
    $(".info").attr("src","/resources/img/info/info3.png").css("display","block")
    let sbtn = '<button type="button" style="width: 200px;" class="btn btn-outline-warning " onclick="HowTo()">BACK</button>'
    $(".touch-view").html(sbtn)
}
function info2(){
    $(".info").css("display","none")
    $(".score").text("MODE")
    $(".info").attr("src","/resources/img/info/info4.png").css("display","block")
    let sbtn = '<button type="button" style="width: 200px;" class="btn btn-outline-warning " onclick="HowTo()">BACK</button>'
    $(".touch-view").html(sbtn)
}

function info3(){
    $(".info").css("display","none")
    $(".score").text("SCORE")
    $(".info").attr("src","/resources/img/info/info5.png").css("display","block")
    let sbtn = '<button type="button" style="width: 200px;" class="btn btn-outline-warning " onclick="HowTo()">BACK</button>'
    $(".touch-view").html(sbtn)
}
function info4(){
    $(".info").css("display","none")
    $(".score").text("DEVELOPER")
    $(".info").attr("src","/resources/img/info/info6.png").css("display","block")
    let sbtn = '<button type="button" style="width: 200px;" class="btn btn-outline-warning " onclick="HowTo()">BACK</button>'
    $(".touch-view").html(sbtn)
}

function Mute(){
    audio.pause()
}
function On(){
    audio.volume=0.1
    audio.play()
    
    audio.loop ='loop'
}



function shareTwitter() {
    var sendText = "FastReactor 반응속도게임"; // 전달할 텍스트
    var sendUrl = "https://fastreactor.netlify.app/"; // 전달할 URL
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function shareFacebook() {
    var sendUrl = "https://fastreactor.netlify.app/"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}
function shareKakao() {
 
    // 사용할 앱의 JavaScript 키 설정
    Kakao.init('616c65083b3ecbd5a4c9b8c0cb115c10');
   
    // 카카오링크 버튼 생성
    Kakao.Link.createDefaultButton({
      container: '#btnKakao', // 카카오공유버튼ID
      objectType: 'feed',
      content: {
        title: "FastReactor 반응속도게임", // 보여질 제목
        description: "친구와 반응속도 내기를 해봐요", // 보여질 설명
        imageUrl: "https://fastreactor.netlify.app/", // 콘텐츠 URL
        link: {
           mobileWebUrl: "https://fastreactor.netlify.app/",
           webUrl: "https://fastreactor.netlify.app/"
        }
      }
    });
  }


$(document).ready(()=>{
    $(".inso").css("color","white")
    if(!localStorage.getItem("score")){
        localStorage.setItem("score",0)
    }
    $(".inso").css("display","block").text("BEST SCORE:"+localStorage.getItem("score"))
    $(".game_text").css("display","block")
    ongame = setInterval(function(){
        Mainchr()
    },2000)
})

  function Mainchr(){
    let text_box = '<div class="mcatch">{}</div>'
    let ranNum = Math.floor(Math.random()*8)
    if(ranNum == 1){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
    
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 600 )
    }
    else if(ranNum == 3){
        let imglink = '<img src="/resources/img/mi.png" loading="lazy" >'
     
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 900 )
    }
    else if(ranNum == 4){
        let imglink = '<img src="/resources/img/pg.png" loading="lazy" >'
    
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 500 )
    }
    else if(ranNum == 0){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
     
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" },1200 )
    }
    else if(ranNum == 2){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
  
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 800 )
    }
    else if(ranNum == 5){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
 
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 1500 )
    }
    else if(ranNum == 6){
        let imglink = '<img src="/resources/img/alien/0.png" loading="lazy" >'

        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 1500 )
    }
    else if(ranNum == 7){
        let imglink = '<img src="/resources/img/alien/alien.png" loading="lazy" >'

        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 1500 )
    }
  }