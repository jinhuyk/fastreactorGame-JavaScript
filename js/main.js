
let startbtn =document.querySelector(".start-btn")


function Start(){
    
    startbtn.style.display = "none"
    Menu()
}
function Menu(){
    var menu_btn = '<button type="button" class="btn btn-outline-warning menu-btn" onclick="Solo()">혼자서 즐기기</button>'
    menu_btn += '<button type="button" class="btn btn-outline-warning menu-btn">다같이 즐기기</button>'
    $(".menu").html(menu_btn)
}
function Solo(){
    let stage = 0
    let score = 0
    $(".menu-btn").css("display","none")
    $(".info").attr("src","/resources/img/info/info.png").css("display","block")
    
    
    $(".score").text(String(score))
    let sbtn = '<button type="button" class="btn btn-outline-warning soloplay-btn" onclick="SoloPlay(0,0)">PLAY</button>'
    $(".touch-view").html(sbtn)
}