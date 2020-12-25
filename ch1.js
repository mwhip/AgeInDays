//challenge 1: YOUR AGE IN DAYS

function ageInDays() {
var birthYear = prompt('What year were you born?');
var Dayage = (2018-birthYear) * 365;
var h1= document.createElement('h1');
var textAnswer = document.createTextNode('You Are ' + Dayage + ' days old.'); //prints answer to screen
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
    
}
