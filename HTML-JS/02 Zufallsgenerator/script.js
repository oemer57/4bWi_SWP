function generate(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    
    let amountOfRandomNumbers = parseInt(number2) - parseInt(number1) + 1;
    console.log(number1 + " : " + number2);
     
    let randomNumber = Math.floor(Math.random() * amountOfRandomNumbers) + parseInt(number1);
    document.getElementById("randomNumber"). innerHTML = randomNumber;
}