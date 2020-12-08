// Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log("episode 1:", verdict);

// Episode 1 prediction - Miss Scarlet



// Episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log("episode 2:", verdict);

// Episode 2 prediction - Predict a problem, trying to change a constant variable



// Episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Episode 3 prediction - 
// First verdict:  Mrs Peacock - First verdict relies on declareMurderer()
// Second verdict: Professor Plum - Second verdict is based on the global scope variable, Mrs Peacock is only the murderer within the declareMurderer function



// Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Episode 4 prediction - In the first console.log, this will return `The suspects are Miss Scarlet, Professor Plum,  Colonel Mustard.` as the first two are declared at the beginning, then Colonel Mustard is declared suspect Three within declareAllSuspects and the log is using 'suspects' as the argument.
// Then in the second console.log request, 'Suspect three is Mrs. Peacock.` will be returned as Colonel Mustard is only suspectThree within declareAllSuspects.



// Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// Episode 5 prediction - "The weapon is the Revolver" as is changed by changeWeapon before the verdict is declared



// Episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Episode 6 prediction - `The murderer is Mrs. White.`
// Starts as Col Mustard, changeMurderer declares Mr Green, but plotTwist which is within this function then declares that 'plot twist', it's now Mrs White. so when changeMurderer is invoked, Mr Green is the current murderer for a split second, but then plotTwist runs befoire that function is finished, which switches it to Mrs White.



// Episode 7
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Episode 7 prediction - Mr. Green is the murderer as plotTwist and unexpectedOutcome don't change anything as they are trying to change a constant variable.

// ...In choosing this one to base my extension attempt on, It seems I was wrong in my assumption as to why Mr. Green was the murderer. Looking at it again, it's more to do with plotTwist and unexpectedOutcome not actually doing anything, rather than not 'being able to' change the variable.

// and looking at it agian! it's because the block that contains Col Mustard and  Miss Scarlet creates a 2nd murderer and when that block is completed it lets go of the variable. so the original is still Mr. Green, it wasn't updated as these are only available within the scope of the block. Always look for let/var/const!!



// Episode 8
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// Episode 8 prediction - `The weapon is Candle stick.` as changeScenario is called before console.log and in the chageScenario function, plotTwist changes the room to the Dining Room. That then means when unexpectedOutcome is called, plotTwist changes the murderer to Col Mustard as the if statement there is satisfied, which then means that the if statement in unexpectedOutcome is also true, changing the weapon to the Candlestick! 



// Episode 9
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// Episode 9 prediction - `The murderer is Professor Plum.` Prof Plum is initially set as the variable. This means that the if statement that follows is true and a NEW murderer variable is declared as Mrs. Peacock, but that is only within the if statement, it isn't used again/passed to anywhere, so the initial murderer declaration is still the one that is in use when the verdict is called.



// Episode 10
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

    unexpectedOutcome();  
}

const unexpectedOutcome = function() {
    murderer = 'Miss Scarlet';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);