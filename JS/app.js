'use strict';
let userName= prompt('welcome to my webpage, please enter your name');

alert('welcome ' + userName);

let score=0

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
    score++;
    break; 


}

let favTeam= prompt('am I a big fan of manchester united?');

switch(favTeam.toUpperCase()){
    case 'YES':
        case 'Y':
            //console.log ('you are right, GGMU');
        alert('you are right, GGMU');
        score++;
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
         score++;
         break;

}

let major= prompt('did I study spansh and english?');

switch(major.toUpperCase()){
    case 'YES':
        case 'Y':
           //console.log('good job');
        alert('good job');
        score++;
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
         score++;
         break;

        
}
 
let broSis=Number (prompt('how many brothers and sisters do I have?'));
for (let i =0; i<4; i++){
    if(broSis>3){

    broSis=prompt("thats too high");
    }
     if (broSis<3){

    broSis=prompt('thats too low');
    }
    else if (broSis==3){
    alert('you nailed it!');
    score++;
    break;
    }
    
    }

    let question7= prompt('I like so many colors, guess one of them');
    let color= ['red', 'blue', 'black', 'green'];
    for (let i =0; i<6; i++){
        if (question7== color[0]||question7==color[1] || question7==color[2] || question7==color[3]){
        alert('correct!');
        score++;
        break;
        }

        else { 
            question7=prompt('try again');
         }
        
        
        }
    

    
      alert('may fav colors are; red, blue, black, and green');
      alert('your final score is '+score+ ' out of 7');

    
alert('I hope you enjoyed ' + userName);



