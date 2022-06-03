let count = 5;
let stageNum;
let soloscore
let solostage
let ongame
let time
let settime
let faster
rad = document.getElementById("audio_re")
audio = document.getElementById("audio_play")
let befor = 0
function SoloPlay(score, stage,fast){
    $(".score").text(String(score))
    $(".soloplay-btn").css("display","none")
    $("#ansbtn").css("display","none")
    $(".game_text").css("display","none").css("color","white")
    soloscore = score;
    solostage = stage;
    faster = fast;
    clearInterval(time);
    clearTimeout(settime)
    if(stage == 11){
        Result(score)
    }
    else{
        let ranNum = Math.floor(Math.random()*5)+1
        if(befor == ranNum){
            ranNum ++
            if(ranNum >5){
                ranNum-=5
            }
        }
        befor =ranNum
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

function Result(score){
    let text_box = '<div class="result">{}</div>'
    let p = '<div class="desc">{}</div>'
    
    if(score < 30 ){
        text_box = text_box.replace('{}',"E")
        $('.game_text').css('color','green')
        p = p.replace('{}','아쉽군요.. 반응속도를 올려봅시다')
    }
    else if(score >=30 && score <50){
        text_box = text_box.replace('{}',"D")
        $('.game_text').css('color','green')
        p = p.replace('{}','좀 아쉬운데? 반응속도를 올려봅시다')
    }
    else if(score >=50 && score <75){
        text_box = text_box.replace('{}',"C")
        $('.game_text').css('color','orange')
        p = p.replace('{}','반응속도를 조금만 더!')
    }
    else if(score >=75 && score <100){
        text_box = text_box.replace('{}',"B")
        $('.game_text').css('color','orange')
        p = p.replace('{}','반응속도 조금만 더 더!')
    }
    else if(score >=100 && score <110){
        text_box = text_box.replace('{}',"A")
        $('.game_text').css('color','red')
        p = p.replace('{}','당신은 정상인입니다')
    }
    else if(score >=110 && score <130){
        text_box = text_box.replace('{}',"S")
        $('.game_text').css('color','yellow')
        p = p.replace('{}','반응속도 더 올릴 수 있나요?')
    }
    else if(score >=130 && score <140){
        text_box = text_box.replace('{}',"SS")
        $('.game_text').css('color','yellow')
        p = p.replace('{}','이미 당신의 반응속도는 최대입니다')
    }
    else if(score >=140 && score <=150){
        text_box = text_box.replace('{}',"SSS")
        $('.game_text').css('color','yellow')
        p = p.replace('{}','당신은 반응속도의 신입니다.')
    }
    $(".game_text").html(text_box+p)
    $(".game_text").css("display","block")
    audio.pause()
    rad.play()
    $(".sns").css("display","block")
    let sbtn = '<button type="button" class="btn btn-outline-warning " onclick="window.location.reload()">처음으로</button>'
    $(".touch-view").html(sbtn)

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

    var ans_btn=""
    if(faster==0){
        var ans_btn = '<button id="ansbtn" class="btn btn-outline-success " style="width :300px; height:100px;" type="button"></button>'
    }
    if(faster==100){
        var ans_btn = '<button id="ansbtn" class="btn btn-outline-warning " style="width :300px; height:100px;" type="button"></button>'
    }
    if(faster==200){
        var ans_btn = '<button id="ansbtn" class="btn btn-outline-danger " style="width :300px; height:100px;" type="button"></button>'
    }
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
        },600-faster)
    }
    else if(num == 2){
        let count = 0;
        let text_box = '<div>{}</div>'
        text_box = text_box.replace('{}',"시작~!")
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            Mcatch()
        },800-faster)
    }
    else if(num == 3){
        let count = 0;
        let text_box = '<div>{}</div>'
        text_box = text_box.replace('{}',"시작~!")
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            Alien()
        },600-faster)
    }
    else if(num == 4){
        let count = 0;
        let text_box = '<div>{}</div>'
        text_box = text_box.replace('{}',"시작~!")
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            Matc()
        },800-faster)
    }
    else if(num == 5){
        let count = 0;
        let text_box = '<div>{}</div>'
        text_box = text_box.replace('{}',"시작~!")
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            PMPD()
        },850-faster)
    }
}

function Mcatch(){
    let text_box = '<div class="mcatch">{}</div>'
    let ranNum = Math.floor(Math.random()*8)
    if(ranNum == 1){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 600 )
    }
    else if(ranNum == 3){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 400 )
    }
    else if(ranNum == 4){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 500 )
    }
    else if(ranNum == 0){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" },1200 )
    }
    else if(ranNum == 2){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 800 )
    }
    else if(ranNum == 5){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
        console.log(imglink)
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 1500 )
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

function Alien(){
    let text_box = '<div>{}</div>'
    let p1 = '<div class="alien"()>{}</div>'
    let p2 = '<div class="alien"()>{}</div>'
    let p3 = '<div class="alien"()>{}</div>'
    let ranNum = Math.floor(Math.random()*3)
    let ranNum2 = Math.floor(Math.random()*3)
    let ranNum3 = Math.floor(Math.random()*3)
    let ranNum4 = Math.floor(Math.random()*3)
    let ranNum5 = Math.floor(Math.random()*15)
    
    p1 = p1.replace('{}','<img src="/resources/img/alien/'+ranNum+'.png" loading="lazy" >')
    p2 = p2.replace('{}','<img src="/resources/img/alien/'+ranNum2+'.png" loading="lazy" >')
    p3 = p3.replace('{}','<img src="/resources/img/alien/'+ranNum3+'.png" loading="lazy" >')
    if(ranNum5 == 1){
        p1 = '<div class="alien"()>{}</div>'
        p1 = p1.replace('{}','<img src="/resources/img/alien/alien.png" loading="lazy" >')
    }
    else if(ranNum5 == 3){
        p2 = '<div class="alien"()>{}</div>'
        p2 = p2.replace('{}','<img src="/resources/img/alien/alien.png" loading="lazy" >')
    }
    else if(ranNum5 == 2){
        p3 = '<div class="alien"()>{}</div>'
        p3 = p3.replace('{}','<img src="/resources/img/alien/alien.png" loading="lazy" >')
    }
    if(ranNum4 == 2){
        p2 = p2.replace('()','style="transform: scaleY(-1);"')
    }
    else if(ranNum4 == 1){
        p1 = p1.replace('()','style="transform: scaleY(-1);"')
    }
    else if(ranNum4 == 0){
        p3 = p3.replace('()','style="transform: scaleY(-1);"')
    }
    text_box = text_box.replace('{}',p1+p2+p3)
    $(".game_text").html(text_box)
    $(document).on("click","#ansbtn",function(){
        if(ranNum5==1 || ranNum5==2 || ranNum5==3){
            
            console.log("good")
            count += 10
            clearInterval(ongame)
            Success(count)
        }
        else{
            clearInterval(ongame)
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

function Matc(){
    let text_box = '<div>{}</div>'
    let p1 = '<div class="mf">{}</div>'
    let p2 = '<div class="mf">{}</div>'
    let ranNum = Math.floor(Math.random()*4)
    let ranNum2 = Math.floor(Math.random()*4)
    p1 = p1.replace('{}','<img src="/resources/img/match/m'+ranNum+'.png" loading="lazy" >')
    p2 = p2.replace('{}','<img src="/resources/img/match/f'+ranNum2+'.png" loading="lazy" >')
    text_box = text_box.replace('{}',p1+p2)

    $(".game_text").html(text_box)
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

function PMPD(){
    let text_box = '<div class="pmpd">{}</div>'
    let ranNum = Math.floor(Math.random()*10)
    let ranNum2 = Math.floor(Math.random()*10)
    let ranNum3 =Math.floor(Math.random()*6)

    console.log(ranNum3)
    if(ranNum3 == 4) {
        let rst =ranNum+ranNum2
        text_box = text_box.replace('{}',ranNum + ' + '+ranNum2 +' = '+rst)
    }
    else{
        let rst =ranNum+ranNum2+ranNum3
        text_box = text_box.replace('{}',ranNum + ' + '+ranNum2 +' = '+rst)
    }
       
    $(".game_text").html(text_box)
    $(document).on("click","#ansbtn",function(){
        if(ranNum3 == 4){
            
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
        SoloPlay(soloscore+5, solostage+1,faster)
    },2000)

}
function Fail(count){
    let text_box = '<div>{}</div>'
    text_box = text_box.replace('{}',"땡!")
    $(".game_text").html(text_box)
    settime =setTimeout(function(){
        clearTimeout(settime)
        SoloPlay(soloscore-5, solostage+1,faster)
    },2000)
}