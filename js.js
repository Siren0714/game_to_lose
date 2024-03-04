function startGame(){
    gameLoop();
}

var count = 0;
var personVis = false;
var score = 0;

function gameLoop(){
    personVis = !personVis

    if (personVis == true){
        var classToset = 'character visible'
    }
    else{
        var classToset = 'character hidden'
    }

    var gamezone = document.getElementById('gamezone')

    for (i = 0; i < 12; i++){
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML = "";

        gamezone.children[i].onclick = function(){score -= 2;}
    }

    var randomNum = Math.floor(Math.random() * 12);

    gamezone.children[randomNum].innerHTML = "";

    gamezone.children[randomNum].onclick = function(){score += 1;}

    gamezone.children[randomNum].className = classToset + ' warm'

    count++;

    if (count < 21){
        // setTimeout(gameLoop, 1000);
        setTimeout(gameLoop, personVis ? 1000 : 3000);
    }
    else{
        alert('Игра окончена');
        alert('Твой счёт: ' + score);
    }

    var sc = document.getElementById('sco');

    sc.innerHTML = "Баллы: " + score;
}
