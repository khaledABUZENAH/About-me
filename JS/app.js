'use strict';
let userName = prompt('welcome to my webpage, please enter your name');

alert('welcome ' + userName);

let score = 0


let question1 = function (age) {
    switch (age.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('wrong answer, i\'m 22');
            break;
        case 'NO':
        case 'N':
            alert('good job, i\"m 22');
            score++;
            break;


    }
}
let age = prompt('do I have 24 years old?');
console.log(age.toUpperCase())
question1(age);


let question2 = function (favTeam) {
    switch (favTeam.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('you are right, GGMU');
            score++;
            break;
        case 'NO':
        case 'N':
            alert('wrong answer');
            break;

    }
}
let favTeam = prompt('am I a big fan of manchester united?');
question2(favTeam);


let question3 = function (address) {
    switch (address.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('wrong answer, I live an Rusayfah');
            break;
        case 'NO':
        case 'N':
            alert('well done, I live in Rusayfah');
            score++;
            break;

    }
}
let address = prompt('do I live in Amman?');
question3(address);


let question4 = function (major) {
    switch (major.toUpperCase()) {
        case 'YES':
        case 'Y':
            alert('good job');
            score++;
            break;
        case 'NO':
        case 'N':
            alert('wrong answer');
            break;
    }
}
let major = prompt('did I study spansh and english?');
question4(major);



let question5 = function (hobby) {
    switch (hobby.toUpperCase()) {
        case 'YES':
        case 'Y':
            console.log('off course not');
            alert('off course not');
            break;
        case 'NO':
        case 'N':
            alert('you are stunning ' + userName);
            score++;
            break;


    }
}
let hobby = prompt('do I cook in my free time?');
question5(hobby);

let question6 = function (broSis) {
    for (let i = 0; i < 4; i++) {
        if (broSis > 3) {

            broSis = prompt("thats too high");
        }
        if (broSis < 3) {

            broSis = prompt('thats too low');
        }
        else if (broSis == 3) {
            alert('you nailed it!');
            score++;
            break;
        }

    } alert('i do have 3 brothers and sisters');
}

let broSis = Number(prompt('how many brothers and sisters do I have?'));
question6(broSis);


let question7a = function (color) {

    for (let i = 0; i < 6; i++) {
        let question7 = prompt('I like so many colors, guess one of them');
        let guess = question7.toLowerCase();
        for (var j = 0; j < color.length; j++) {
            if (guess === color[j]) {


                alert('correct!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !== 6) {
            alert('Sorry wrong answer' + question7 + ', try again');
            console.log('Sorry wrong answer, try again');
        }


    }
}
let color = ['red', 'blue', 'black', 'green'];

question7a(color);


alert('may fav colors are; red, blue, black, and green');
alert('your final score is ' + score + ' out of 7');


alert('I hope you enjoyed ' + userName);



