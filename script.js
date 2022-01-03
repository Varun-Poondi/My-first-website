if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    var submitButton = document.getElementsByClassName('btn-submit');
    console.log(submitButton);
    var button = submitButton[0];
    button.addEventListener('click',generateNumber);   
}

function generateNumber(event){
    var buttonClicked = event.target;
    var master = buttonClicked.parentElement.parentElement;
    var input1 = master.getElementsByClassName('input-cell cell-1')[0].value;
    var input2 = master.getElementsByClassName('input-cell cell-2')[0].value;
    console.log(input1,input2);
    if(input1 > input2){
        alert('Please make sure the lowerBound is not greater than the upperBound');
        return;
    }
    randomNumberGenerator(input1, input2);
}

function randomNumberGenerator(lowerBound, upperBound){
    var min = Math.ceil(lowerBound);
    var max = Math.floor(upperBound);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementsByClassName('result')[0].innerText = "Result: " + result;

}