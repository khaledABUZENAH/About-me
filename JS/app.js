'use strict';
let userName= prompt('welcome to my webpage, please enter your name');

alert('welcome ' + userName);

let age= prompt('do I have 24 years old?');
console.log(age.toUpperCase())
switch(age.toUpperCase()){
    case 'YES':
        case 'Y':
        //console.log('wrong answer, i\'m 22');
    alert('wrong answer, i\'m 22');
    break;
    case 'NO':
        case 'N':
        //console.log('good job, i\"m 22');
    alert('good job, i\"m 22');
    break; 


}

let favTeam= prompt('am I a big fan of manchester united?');

switch(favTeam.toUpperCase()){
    case 'YES':
        case 'Y':
            //console.log ('you are right, GGMU');
        alert('you are right, GGMU');
        break;
    case 'NO':
        case 'N':
            //console.log('wrong answer');
        alert('wrong answer');
        break;
    
}

let adress= prompt('do I live in Amman?');

switch(adress.toUpperCase()){
    case 'YES':
        case 'Y':
           // console.log('wrong answer, I live an Rusayfah');
        alert('wrong answer, I live an Rusayfah');
        break;
     case 'NO':
        case 'N':
        // console.log('well done, I live in Rusayfah');
         alert('well done, I live in Rusayfah');
         break;

}

let major= prompt('did I study spansh and english?');

switch(major.toUpperCase()){
    case 'YES':
        case 'Y':
           //console.log('good job');
        alert('good job');
        break;
     case 'NO':
        case 'N':
            //console.log('wrong answer');
         alert('wrong answer');
          break;
}


let hoppy= prompt('do I cook in my free time?');

switch(hoppy.toUpperCase()){
    case 'YES':
        case 'Y':
            console.log('off course not');
        alert('off course not');
        break;
     case 'NO':
        case 'N':
            //console.log('you are stunning' + userName);
         alert('you are stunning ' + userName);
          break;

        
}
    
alert('I hope you enjoyed ' + userName);


