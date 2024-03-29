let count;
let stageNum;
let soloscore
let solostage
let ongame
let time
let settime
let faster
let rlcount = 0
rad = document.getElementById("audio_re")
audio = document.getElementById("audio_play")
let befor = 0
function SoloPlay(score, stage,fast){
    $(".score").text(String(score))
    $(".bgm").css("display","none")
    $(".soloplay-btn").css("display","none")
    $("#ansbtn").css("display","none")
    $(".game_text").css("display","none").css("color","white")
    $(".game_text").css("background-color","transparent")
    soloscore = score;
    solostage = stage;
    faster = fast;
    clearInterval(time);
    clearTimeout(settime)
    if(stage ==10){
        Result(score)
    }
    else{
        if(soloscore>=100){
            faster += 10
            audio.playbackRate = 1.2;
        }
        else if(soloscore>=120){
            faster += 2
            audio.playbackRate = 1.5;
        }
        else{
            audio.playbackRate = 1;
        }
        let ranNum
        if(soloscore>=90){
            ranNum = Math.floor(Math.random()*6)+1
            if(befor == ranNum){
                ranNum ++
                if(ranNum >6){
                    ranNum-=6
                }
            }
        }
        else{
            ranNum = Math.floor(Math.random()*5)+1
            if(befor == ranNum){
                ranNum ++
                if(ranNum >5){
                    ranNum-=5
                }
            }
        }
        befor =ranNum
        $(".info").css("display","block")
        if(lang == 1){
            $(".info").attr("src","/resources/img/info/e"+ranNum+".png")
        }
        else{
            $(".info").attr("src","/resources/img/info/"+ranNum+".png")
        }

        count = 3;
        stageNum= ranNum
        
        settime = setTimeout(function(){
            clearTimeout(settime)
            time = setInterval("timer()",500);
        },2000)

    }
}

function Result(score){
    let text_box = '<div class="result">{}</div>'
    let p = '<div class="desc">{}</div>'
    $(".info").css("display","none")
    if(score <60){
        text_box = text_box.replace('{}',"D")
        $('.game_text').css('color','blue')
        
        if(lang == 1){
            p = p.replace('{}',"Interesting...")
        }
        else{
            p = p.replace('{}','좀 아쉬운데? 반응속도를 올려봅시다')
        }
    }
    else if(score >=60 && score <90){
        text_box = text_box.replace('{}',"C")
        $('.game_text').css('color','green')
        if(lang == 1){
            p = p.replace('{}','Need some improvement...')
        }
        else{
            p = p.replace('{}','반응속도를 조금만 더!')
        }

    }
    else if(score >=90 && score <110){
        text_box = text_box.replace('{}',"B")
        $('.game_text').css('color','orange')
        if(lang == 1){
            p = p.replace('{}','Maybe a bit faster?')
        }
        else{
            p = p.replace('{}','반응속도 조금만 더 더!')
        }

    }
    else if(score >=110 && score <120){
        text_box = text_box.replace('{}',"A")
        $('.game_text').css('color','red')
        if(lang == 1){
            p = p.replace('{}',"You're average.")
        }
        else{
            p = p.replace('{}','당신은 정상인입니다')
        }

    }
    else if(score >=120 && score <145){
        text_box = text_box.replace('{}',"S")
        $('.game_text').css('color','yellow')
        if(lang == 1){
            p = p.replace('{}','Almost there...!')
        }
        else{
            p = p.replace('{}','반응속도 더 올릴 수 있나요?')
        }

    }
    else if(score >=145 && score <170){
        text_box = text_box.replace('{}',"SS")
        $('.game_text').css('color','yellow')
        if(lang == 1){
            p = p.replace('{}','Already top level')
        }
        else{
            p = p.replace('{}','이미 당신의 반응속도는 최대입니다')
        }

    }
    else if(score >=170){
        text_box = text_box.replace('{}',"SSS")
        $('.game_text').css('color','yellow')
        if(lang == 1){
            p = p.replace('{}','God...?')
        }
        else{
            p = p.replace('{}','당신은 반응속도의 신입니다.')
        }

    }
    $(".game_text").html(text_box+p)
    $(".game_text").css("display","block")
    audio.pause()
    rad.volume = 0.1
    rad.play()
    
    $(".inso").css("display","block").text("BEST SCORE:"+localStorage.getItem("score"))
    if(score >= localStorage.getItem("score")){
        localStorage.setItem("score",score)
        $(".inso").css("color","yellow").text("!NEW SCORE!")
        
    }
    $(".sns").css("display","block")
    $(".touch-view").css("display","block")
    let sbtn = '<button type="button" class="btn btn-outline-warning " onclick="window.location.reload()">MAIN</button>'
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
    if(faster>=0){
        var ans_btn = '<button id="ansbtn" class="btn btn-outline-success " style="width :300px; height:100px;" type="button"></button>'
    }
    if(faster>=100){
        var ans_btn = '<button id="ansbtn" class="btn btn-outline-warning " style="width :200px; height:100px;" type="button"></button>'
    }
    if(faster>=200){
        var ans_btn = '<button id="ansbtn" class="btn btn-outline-danger " style="width :100px; height:100px;" type="button"></button>'
    }
    
    $(".touch-view").html(ans_btn)
    $(".touch-view").css("display","block")
    if(num == 1){
        let count = 0;
        let text_box = '<div>{}</div>'
        
        
        if(lang == 1){
            text_box = text_box.replace('{}',"GO!")
        }
        else{
            text_box = text_box.replace('{}',"시작~!")
        }
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            
            count++
            CText(count)
        },800-faster)
    }
    else if(num == 2){
        let count = 0;
        let text_box = '<div>{}</div>'
        if(lang == 1){
            text_box = text_box.replace('{}',"GO!")
        }
        else{
            text_box = text_box.replace('{}',"시작~!")
        }
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            Mcatch()
        },800-faster)
    }
    else if(num == 3){
        let count = 0;
        let text_box = '<div>{}</div>'
        if(lang == 1){
            text_box = text_box.replace('{}',"GO!")
        }
        else{
            text_box = text_box.replace('{}',"시작~!")
        }
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            Alien()
        },800-faster)
    }
    else if(num == 4){
        let count = 0;
        let text_box = '<div>{}</div>'
        if(lang == 1){
            text_box = text_box.replace('{}',"GO!")
        }
        else{
            text_box = text_box.replace('{}',"시작~!")
        }
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            Matc()
        },850-faster)
    }
    else if(num == 5){
        let count = 0;
        let text_box = '<div>{}</div>'
        if(lang == 1){
            text_box = text_box.replace('{}',"GO!")
        }
        else{
            text_box = text_box.replace('{}',"시작~!")
        }
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            PMPD()
        },850-faster)
    }
    else if(num == 6){
        let count = 0;
        let text_box = '<div>{}</div>'
        if(lang == 1){
            text_box = text_box.replace('{}',"GO!")
        }
        else{
            text_box = text_box.replace('{}',"시작~!")
        }
        $(".game_text").html(text_box)
        ongame = setInterval(function(){
            $(document).off("click")
            ColM()
        },600-faster)
    }
}

function Mcatch(){
    $(".score").text(String(soloscore))
    let text_box = '<div class="mcatch">{}</div>'
    let ranNum = Math.floor(Math.random()*8)
    if(ranNum == 1){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
        
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 600 )
    }
    else if(ranNum == 3){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
        
        text_box = text_box.replace('{}',imglink)
        $(".game_text").html(text_box)
        $( ".mcatch" ).animate({ left: "+100%" }, 400 )
    }
    else if(ranNum == 4){
        let imglink = '<img src="/resources/img/char/'+ranNum+'.png" loading="lazy" >'
      
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
    

    $(document).on("click","#ansbtn",function(){
        if(ranNum == 1 || ranNum==3 || ranNum ==4){
        
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
    if(ranNum == 1 || ranNum==3 || ranNum ==4){
        if(rlcount==2){
            soloscore-=1
            rlcount=0
        }
        rlcount++
    }
}

function Alien(){
    $(".score").text(String(soloscore))
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
            
          
            count += 10
            clearInterval(ongame)
            Success(count)
        }
        else{
            clearInterval(ongame)
            Fail(count)
        }
    })
    if(ranNum5==1 || ranNum5==2 || ranNum5==3){
        if(rlcount==2){
            soloscore-=1
            rlcount=0
        }
        rlcount++
    }
}

function ColM(){
    $(".score").text(String(soloscore))
    $(".game_text").html("")
    let text_box = '<div>{}</div>'
    let ranNum = Math.floor(Math.random()*5)
    if(ranNum==3){
        $(".game_text").css("background-color","green")
    }
    else{
        $(".game_text").css("background-color","red")
    }

    $(document).on("click","#ansbtn",function(){
        if(ranNum == 3){
         
            clearInterval(ongame)
            Success(count)
        }
        else{
            clearInterval(ongame)
            Fail(count)
        }
    })
    if(ranNum == 3){
        if(rlcount==2){
            soloscore-=1
            rlcount=0
        }
        rlcount++
    }
}



function CText(count){
    $(".score").text(String(soloscore))
    let text_box = '<div>{}</div>'
    let ranNum = Math.floor(Math.random()*5)
    let ranNum2 = Math.floor(Math.random()*5)
    let ranNum3 = Math.floor(Math.random()*5)
    if(soloscore >= 90){
        $(".game_text").css("background-color",colortext[ranNum].color[ranNum3])
    }
    if(lang ==1 ){
        text_box = text_box.replace('{}',colortexteng[ranNum].text)
    }
    else{
        text_box = text_box.replace('{}',colortext[ranNum].text)
    }
    $(".game_text").html(text_box).css("color",colortext[ranNum].color[ranNum2])
    
    $(document).on("click","#ansbtn",function(){
        if(ranNum == ranNum2){
         
            clearInterval(ongame)
            Success(count)
        }
        else{
            clearInterval(ongame)
            Fail(count)
        }
    })
    if(ranNum == ranNum2){
        if(rlcount==2){
            soloscore-=1
            rlcount=0
        }
        rlcount++
    }
}

function Matc(){
    $(".score").text(String(soloscore))
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
            
            
            clearInterval(ongame)
            Success(count)
        }
        else{
            clearInterval(ongame)
            Fail(count)
        }
    })
    if(ranNum == ranNum2){
        if(rlcount==2){
            soloscore-=1
            rlcount=0
        }
        rlcount++
    }

}


function PMPD(){
    $(".score").text(String(soloscore))
    let text_box = '<div class="pmpd">{}</div>'
    let ranNum = Math.floor(Math.random()*10)
    let ranNum2 = Math.floor(Math.random()*10)
    let ranNum3 =Math.floor(Math.random()*4)+1
    let ranNum4 = Math.floor(Math.random()*3)+1
    if(ranNum3 == 4) {
        if(soloscore>=110){
            if(ranNum4 == 2){
                let rst =ranNum-ranNum2
                text_box = text_box.replace('{}',ranNum + ' - '+ranNum2 +' = '+rst)
            }
            else{
                let rst =ranNum+ranNum2
                text_box = text_box.replace('{}',ranNum + ' + '+ranNum2 +' = '+rst)
            }
        }
        else{
            let rst =ranNum+ranNum2
            text_box = text_box.replace('{}',ranNum + ' + '+ranNum2 +' = '+rst)
        }
    }
    else{
        if(soloscore>=110){
            if(ranNum4 == 2){
                let rst =ranNum-ranNum2+ranNum3
                text_box = text_box.replace('{}',ranNum + ' - '+ranNum2 +' = '+rst)
            }
            else{
                let rst =ranNum+ranNum2+ranNum3
                text_box = text_box.replace('{}',ranNum + ' + '+ranNum2 +' = '+rst)
            }
        }
        else{
            let rst =ranNum+ranNum2+ranNum3
            text_box = text_box.replace('{}',ranNum + ' + '+ranNum2 +' = '+rst)
        }
        
    }
       
    $(".game_text").html(text_box)
    $(document).on("click","#ansbtn",function(){
        if(ranNum3 == 4){
            
            
            $(document).off("click")
            clearInterval(ongame)
            Success(count)
            
        }
        else{
            $(document).off("click")
            clearInterval(ongame)
            Fail(count)
        }
    })
    if(ranNum3 == 4){
        if(rlcount==2){
            soloscore-=1
            rlcount=0
        }
        rlcount++
    }
}



function Success(){
    $(".game_text").css("background-color","transparent")
    let text_box = '<div>{}</div>'
    if(lang==1){
        text_box = text_box.replace('{}',"GOOD :)")
    }
    else{
        text_box = text_box.replace('{}',"성공!")
    }

    $(".game_text").html(text_box).css("background-color","transparent")
    $(".touch-view").css("display","none")
    settime =setTimeout(function(){
        clearTimeout(settime)
        SoloPlay(soloscore+10, solostage+1,faster+10)
    },2000)

}
function Fail(){
    let text_box = '<div>{}</div>'
    if(lang==1){
        text_box = text_box.replace('{}',"BAD :(")
    }
    else{
        text_box = text_box.replace('{}',"땡!")
    }

    $(".touch-view").css("display","none")
    $(".game_text").html(text_box).css("background-color","transparent")
    settime =setTimeout(function(){
        clearTimeout(settime)
        SoloPlay(soloscore-5, solostage+1,faster+10)
    },2000)
}