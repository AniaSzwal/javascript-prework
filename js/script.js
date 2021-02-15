function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'random';

if(randomNumber == 1) {
    computerMove = 'kamień';
} else if(randomNumber == 2) {
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
} else {
    computerMove = 'błąd'
}
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
    playerMove = 'kamień';
} else if(playerInput == '2') {
    playerMove = 'papier';
} else if(playerInput == '3') {
    playerMove = 'kamień';
} else {
    playerMove= 'nieznany ruch'
}

printMessage('Twój ruch to: ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz');
}else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}else if(computerMove == playerMove){
    printMessage('Remis!');
}else if(computerMove == 'kamień' || "papier" || "nożyce" && playerMove == 'nieznany ruch'){
    printMessage('Wpisałeś nieznaną wartość! Wybierz cyfrę od 1 do 3');
}else {
    printMessage('Błąd! Spróbuj ponownie wpisać wartość z przedziału 1-3')
}




