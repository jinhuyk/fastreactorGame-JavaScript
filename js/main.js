
let startbtn =document.querySelector(".start-btn")
let htdbtn =document.querySelector(".htd-btn")

function Start(){
    
    startbtn.style.display = "none"
    htdbtn.style.display = "none"
    audio = document.getElementById("audio_play")
    audio.play()
    audio.loop ='loop'
    Menu()
}
function Menu(){
    var menu_btn = '<button type="button" class="btn btn-outline-warning menu-btn" onclick="Solo(0)">EASY</button>'
    menu_btn += '<button type="button" class="btn btn-outline-warning menu-btn" onclick="Solo(100)">NORMAL</button>'
    menu_btn += '<button type="button" class="btn btn-outline-warning menu-btn" onclick="Solo(200)">HARD</button>'
    $(".menu").html(menu_btn)
}
function Solo(fast){
    let stage = 0
    let score = 0
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
    $(".inso").css("display","block")
    $(".score").text(String(score))
    let sbtn = '<button type="button" class="btn btn-outline-warning soloplay-btn" onclick="SoloPlay('+score+',0,'+fast+')">Game Start</button>'
    $(".touch-view").html(sbtn)
}

function HowTo(){
    startbtn.style.display = "none"
    htdbtn.style.display = "none"
    $(".menu-btn").css("display","none")
    $(".info").attr("src","/resources/img/info/info2.png").css("display","block")
    let sbtn = '<button type="button" class="btn btn-outline-warning info1btn" onclick="info1()">플레이 방법</button>'
     sbtn += '<button type="button" class="btn btn-outline-warning info2btn" onclick="info2()">난이도</button>'
     sbtn += '<button type="button" class="btn btn-outline-warning info3btn" onclick="info3()">점수</button>'
     sbtn += '<button type="button" class="btn btn-outline-warning info4btn" onclick="info4()">개발자들</button>'
     $(".touch-view").html(sbtn)
}

function info1(){
    $(".info").attr("src","/resources/img/info/info3.png").css("display","block")
}
function info2(){
    $(".info").attr("src","/resources/img/info/info4.png").css("display","block")
}

function info3(){
    $(".info").attr("src","/resources/img/info/info5.png").css("display","block")
}
function info4(){
    $(".info").attr("src","/resources/img/info/info6.png").css("display","block")
}

function Mute(){
    audio.pause()
}
function On(){
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
    Kakao.init('	45b32650a27b21819ffb3a364bcd084b');
   
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