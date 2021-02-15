function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

let computerMove = 'kamień';
printMessage(Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!);

let playMove = 'papier';
printMessage(Zagrałem papier! Jeśli Twój ruch to kamień, to przegrywasz!);