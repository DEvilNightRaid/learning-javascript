var allbuttons = document.getElementsByClassName('btn');
// console.log(allbuttons);

var allbuttons_copy = [];
    // console.log(allbuttons_copy);
for (i= 0; i < allbuttons.length; i++){
    allbuttons_copy.push(allbuttons[i].classList[1]);
}

function changeColors(selected_option){
    if (selected_option.value ===('blue')){
        buttonBlue();
    }
    else if (selected_option.value ===('yellow')){
        buttonYellow();
    }
    else if (selected_option.value ===('orange')){
        buttonOrange();
    }
    else if (selected_option.value ===('red')){
        buttonRed();
    }
    else if (selected_option.value ===('reset')){
        resetButton();
    }
    else if (selected_option.value ===('random')){
        randomcolors();
    }
}

function buttonBlue(){
    for(let buttonCount = 0; buttonCount < allbuttons.length; buttonCount++){
        allbuttons[buttonCount].classList.remove(allbuttons[buttonCount].classList[1]);
        allbuttons[buttonCount].classList.add('blue');
    }
}
function buttonYellow(){
    for(let buttonCount = 0; buttonCount < allbuttons.length; buttonCount++){
        allbuttons[buttonCount].classList.remove(allbuttons[buttonCount].classList[1]);
        allbuttons[buttonCount].classList.add('yellow');
    }
}
function buttonOrange(){
    for(let buttonCount = 0; buttonCount < allbuttons.length; buttonCount++){
        allbuttons[buttonCount].classList.remove(allbuttons[buttonCount].classList[1]);
        allbuttons[buttonCount].classList.add('orange');
    }
}
function buttonRed(){
    for(let buttonCount = 0; buttonCount < allbuttons.length; buttonCount++){
        allbuttons[buttonCount].classList.remove(allbuttons[buttonCount].classList[1]);
        allbuttons[buttonCount].classList.add('red');
    }
}
function resetButton(){
    for(let buttonCount = 0; buttonCount < allbuttons.length; buttonCount++){
        allbuttons[buttonCount].classList.remove(allbuttons[buttonCount].classList[1]);
        allbuttons[buttonCount].classList.add(allbuttons_copy[buttonCount]);
    }
}
function randomcolors(){
    for(let buttonCount = 0; buttonCount < allbuttons.length; buttonCount++){
        allbuttons[buttonCount].classList.remove(allbuttons[buttonCount].classList[1]);
        allbuttons[buttonCount].classList.add(inToChoice(randomInt()));
    }
}
function randomInt(){
    return Math.floor(Math.random() * 4);
}

function inToChoice(number){
    return['blue','orange','yellow','red'][number];
}