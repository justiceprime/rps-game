


function play() {
    var year = prompt('what year were u born???????');
    if(year == 0) {
        let write = document.createTextNode('You are mad o');
    let h3 = document.createElement('h3');
    h3.appendChild(write);
    document.getElementById('use').appendChild(h3);
    } else {
        var age = 2021 - year;
        var write = document.createTextNode('You are ' + age + 'years old my friend');
        var h3 = document.createElement('h3');
        h3.appendChild(write);
        document.getElementById('use').appendChild(h3); 
    } 
}

function rpsGame(myChoice) {
    var choice1;
    var choice2;
    choice1 = myChoice.id;
    choice2 = randomToChoice(random());
    decideWinner(choice1, choice2);
    rpsFrontEnd(choice1, choice2);
}

function random() {
    return Math.floor(Math.random() * 3);
}

function randomToChoice(choice) {
    return ['rock', 'paper', 'scissors'][choice]
}

function decideWinner(choices1, choices2) {
    
    var dataBase = {
        'paper': {'scissors': 0, 'paper': 0.5, 'rock': 1},
        'scissors': {'rock': 0, 'scissors': 0.5, 'paper': 1},
        'rock': {'paper': 0, 'rock': 0.5, 'scissors': 1}
    }
    choices1 = randomToChoice(random()); 
    var myScore = dataBase[choices1][choices2];
    var botScore = dataBase[choices2][choices1];
    var result = [myScore, botScore];
    return result;
}

function rpsFrontEnd(choice1, choice2) {
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var myDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    myDiv.innerHTML = "<img src='" + imageDataBase[choice1] + "' height=150 width=150 style='box-shadow: 0px 10px 30px red;'>"
    botDiv.innerHTML = "<img src='" + imageDataBase[choice2] + "' height=150 width=150 style='box-shadow: 0px 10px 30px blue;'>"
    
    document.getElementById('whyna').appendChild(myDiv);
    document.getElementById('whyna').appendChild(botDiv);
}
