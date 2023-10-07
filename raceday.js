let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly=true;
const age=82;

raceNumber=1000;

if ( age > 18 && registeredEarly === true) {
raceNumber +=1000;
}

if( age >= 18 && registeredEarly === true){
  console.log(`Race Will start 9:30 am and your number is ${raceNumber}`);
} else if (age >= 18 && registeredEarly === false){
  console.log(`Race Will start 11:00 am and your number is ${raceNumber}`);
} else if (age < 18){
  console.log(`Race Will start 12:30 am and your number is ${raceNumber}`);
}

