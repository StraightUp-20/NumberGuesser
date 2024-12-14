// retrieve elements in the DOM
const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');


// Action based if input inputted or not
button.addEventListener('click', (e) => {

  if (input.value == '') {
    alert("Please enter a number");
  }
    else if (input.value >= 0 || input.value <= 10) {
      alert("Enter number within the parameters");
    } else {
      randomNumGen();
  }
  });


function randomNumGen() { 

  // gen random number
  const randomNumber = Math.round(Math.random() * 11);

  // add actions to elem
  const elem = document.createElement('div');
  elem.classList.add('alert');

  // check if output match random number
  if (input.value == randomNumber) {
    show();
    elem.classList.add('alert-success');
    elem.innerHTML = 'Hooray! It was ' + randomNumber;
  } else {
    show();
    elem.classList.add('alert-danger');
    elem.innerHTML = 'It was ' + randomNumber + '.Try again! :)';
  }

  // set a delay
  setTimeout(() => {
  hide();
  elem.remove();
  }, 2500);

  input.value = ''; // reset input box

  output.appendChild(elem);
};
  
// show guess
function show() {
  output.classList.remove('hide');
  output.classList.add('show');
}

// hide guess
function hide() {
  output.classList.remove('show');
  output.classList.add('hide');
}




