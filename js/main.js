
let startbtn =document.querySelector(".start-btn")


function Start(){
    
    startbtn.style.display = "none"
    audio = document.getElementById("audio_play")
    audio.play()
    audio.loop ='loop'
    Menu()
}
function Menu(){
    var menu_btn = '<button type="button" class="btn btn-outline-warning menu-btn" onclick="Solo(0)">초급난이도</button>'
    menu_btn += '<button type="button" class="btn btn-outline-warning menu-btn" onclick="Solo(100)">일반난이도</button>'
    menu_btn += '<button type="button" class="btn btn-outline-warning menu-btn" onclick="Solo(200)">최고난이도</button>'
    $(".menu").html(menu_btn)
    $(".info").attr("src","/resources/img/info/info2.png").css("display","block")
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




function Mute(){
    audio.pause()
}
function On(){
    audio.play()
    audio.loop ='loop'
}