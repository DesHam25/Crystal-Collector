window.onload = function () {
  document.getElementById('my_audio').play();
};

let random_Number;
let lost = 0;
let win = 0;
let previous = 0;

// Setters when we do this we are setting value or attribute to the this(Vibranium) property
// Getters if you want to get vaule from it we tell it which attribute we want to get it from

let restAndStart = function () {
  //with "restAndStart" we place it at the Win, and Lost so we can reset the game evertime without having to reload the page
  $('.Vibraniums').empty(); //emptying the Vibranium

  let images = [
    'assets/img/BP.jpg',
    'assets/img/purple.jpg',
    'assets/img/Rbp.png',
    'assets/img/gold&black.jpg',
  ];
  random_Number = Math.floor(Math.random() * 101) + 19; // this for generating a new random
  $('#Number').html('Random Number: ' + random_Number); //this putting the random number in the cooridinates, add it to the DOm

  //this is for generating loop for the Four Vibranium, every single time creating a random number
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 11) + 1; //this is random number for every single Vibranium
    // console.log(random);
    //this is creating a div for the random number
    let Vibranium = $('<div>');
    Vibranium.attr({
      //attribute into one class on random
      class: 'Vibranium',
      'data-random': random,
    });
    Vibranium.css({
      'background-image': "url('" + images[i] + "')",
      'background-size': 'cover',
      'background-position': 'center',
    });

    Vibranium.html(random); // this is putting it to the dom

    $('.Vibraniums').append(Vibranium); // this is the Vibranium where we are sending everthing back
  }
  $('#previous').html('Total score:' + previous);
};
//this is for generating Four Vibranium

restAndStart(); //start the game over here when we click, invoking this function when the page load. without this if the page reload then there will be nothing!! Important to have.

// let reset = function () {

// }
// When we click (This) button for any Vibranium we should console log the one we clicked on so -this- refer any of the Vibranium if I want this class
// Event Delegation what ever new element that comes in on the DOM
$(document).on('click', '.Vibranium', function () {
  let num = parseInt($(this).attr('data-random'));

  // my conditional logic
  previous += num;
  $('#previous').html('Total score:' + previous);
  console.log(previous);

  if (previous > random_Number) {
    lost++; //when adding the numbers up if the numbers is greater than our number set, we push this to the DOM
    $('#lost').html('You Lost the Vibranium:' + lost);
    previous = 0; // if not place the  number will just keep going
    restAndStart(); // Then we run the whole function again (restart) the game after a lost
  } else if (previous === random_Number) {
    win++;
    $('#win').html('WINNER Wakanda-Forever!:' + win);
    previous = 0; // if not place the  number will just keep going
    restAndStart(); //Then we run the whole function again (restart) the game after a win
  }
  //we Have to do a conditional logic if its greater than random Number which is (let random_Number) we need to make a if statement
});
//Pseudo coding

// a game with 4 Vibranium and Random Number
// Every Vibranium needs to have a random number between 1 - 12
// A new random number should be generate every single time we win or Lost
// to those 4 Vibraniums
// When clicking any Vibranium, it should adding wiht previious Number
// Until it equals the Random Number
// If it is greater than the Random Number, we decrement a lost counter
// if it is equal, then we increment a win counter
