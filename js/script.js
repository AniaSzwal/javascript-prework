function getMoveName(number) {
    if(number == 1) {
        return 'kamień';
    } else if(number == 2) {
        return 'papier';
    } else if(number == 3){
        return 'nożyce';
    } else {
        return 'nienznany ruch'
    }
}

function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

function displayResult(argComputerMove,argPlayerMove) {

    console.log(' computer ' + argComputerMove);
    console.log(' player ' + argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }else if(argComputerMove == argPlayerMove){
        printMessage('Remis!');
    }else if(argComputerMove == 'kamień' || "papier" || "nożyce" && argPlayerMove == 'nieznany ruch'){
        printMessage('Wpisałeś nieznaną wartość! Wybierz cyfrę od 1 do 3');
    }else {
        printMessage('Przegrałeś ;[')
    }

}

// komputer
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);


// ja
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

// pokaz wynik
displayResult(computerMove,playerMove);