let count = 5;
let stageNum;
let soloscore
let solostage
let ongame
let time
let settime
function SoloPlay(score, stage){
    $(".score").text(String(score))
    $(".soloplay-btn").css("display","none")
    $("#ansbtn").css("display","none")
    $(".game_text").css("display","none")
    soloscore = score;
    solostage = stage;
    clearInterval(time);
    clearTimeout(settime)
    if(stage == 11){
        //Result(score)
    }
    else{
        let ranNum = Math.floor(Math.random()*2)+1
        $(".info").css("display","block")
        $(".info").attr("src","/resources/img/info/"+ranNum+".png")
        count = 5;
        stageNum= ranNum
        
        settime = setTimeout(function(){
            clearTimeout(settime)
            time = setInterval("timer()",1000);
        },2000)

    }
}
function timer(){
    $(".info").css("display","none")
    $(".timer").css("display","block")
    if(count != 0){
        $(".timer").text(String(count))
        count--
    }
    else if (count == 0){
        Game(stageNum)
        clearInterval(time)
    }
}

function Game(num){
    $(".timer").css("display","none")
    $(".game_text").css("display","block")
    $("#ansbtn").css("display","block")
    var ans_btn = '<button id="ansbtn" class="btn btn-outline-warning " style="width :300px; height:100px;" type="button"></button>'
    $(".touch-view").html(ans_btn)
    
    if(num == 1){
        let count = 0;
        let text_box = '<div>{}</div>'
        text_box = text_box.replace('{}',"시작~!")
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            count++
            CText(count)
        },500)
    }
    if(num == 2){
        let count = 0;
        let text_box = '<div>{}</div>'
        text_box = text_box.replace('{}',"시작~!")
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            Mcatch()
        },2000)
    }
}

function Mcatch(){
    let text_box = '<div class="mcatch">{}</div>'
    let ranNum = Math.floor(Math.random()*8)
    if(ranNum == 1){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png">'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+400px" }, 500 )
    }
    else if(ranNum == 3){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png">'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+400px" }, 200 )
    }
    else if(ranNum == 4){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png">'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+400px" }, 300 )
    }
    else if(ranNum == 0){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png">'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+400px" },1200 )
    }
    else if(ranNum == 2){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png">'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+400px" }, 800 )
    }
    else if(ranNum == 5){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png">'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+400px" }, 1500 )
    }
    

    $(document).on("click","#ansbtn",function(){
        if(ranNum == 1 || ranNum==3 || ranNum ==4){
            console.log("good")
            clearInterval(ongame)
            if(ranNum ==1 ) count=100;
            else if(ranNum == 3) count =300;
            else if(ranNum == 4) count =200;
            Success(count)
        }
        else{
            clearInterval(ongame)
            count =0;
            Fail(count)
        }
    })
}



function CText(count){
    let text_box = '<div>{}</div>'
    let ranNum = Math.floor(Math.random()*5)
    let ranNum2 = Math.floor(Math.random()*5)
    text_box = text_box.replace('{}',colortext[ranNum].text)
    $(".game_text").html(text_box).css("color",colortext[ranNum].color[ranNum2])
    console.log(count)
    $(document).on("click","#ansbtn",function(){
        if(ranNum == ranNum2){
            
            console.log("good")
            clearInterval(ongame)
            Success(count)
        }
        else{
            clearInterval(ongame)
            Fail(count)
        }
    })
}
function Success(count){
    let text_box = '<div>{}</div>'
    text_box = text_box.replace('{}',"성공!")
    $(".game_text").html(text_box)

    settime =setTimeout(function(){
        clearTimeout(settime)
        SoloPlay(soloscore+count, solostage+1)
    },2000)

}
function Fail(count){
    let text_box = '<div>{}</div>'
    text_box = text_box.replace('{}',"땡!")
    $(".game_text").html(text_box)
    settime =setTimeout(function(){
        clearTimeout(settime)
        SoloPlay(soloscore, solostage)
    },2000)
}