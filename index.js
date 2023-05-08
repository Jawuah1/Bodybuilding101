// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");
   // document.querySelectorAll("navText").style.color = "white";

}
themeButton.addEventListener("click", toggleDarkMode);


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.

// Add your query for the sign now button here
let signNowButton = document.getElementById("sign-now-button")
let count =3;

const addSignature = (person) => {
    // Write your code to manipulate the DOM here

  const nameInput = document.getElementById('name');
  const townInput = document.getElementById('hometown');

  //const name = nameInput.value;
  //const town = townInput.value;

  const signature = document.createElement('p');
  signature.textContent = `🖊️${person.name} from ${person.hometown} supports this.`; // format the signature text

  const signaturesSection = document.querySelector('.signatures');
  signaturesSection.appendChild(signature);

    // Update the signature count
  count = count + 1;
  const counter = document.getElementById('counter');
  counter.remove();
  const newCounter = document.createElement('p');
    newCounter.setAttribute('id', 'counter');
  newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
  signaturesSection.appendChild(newCounter); // add the new count



  
}
// modal function to display after signature
let scaleFactor = 1;
let modalImage = document.getElementById("modal-image");


const toggleModal = (person) => {
const modal = document.getElementById('thanks-modal');
const modalContent = document.getElementById('thanks-content-modal')
  modal.style.display = "flex";
  
  modalContent.innerHTML = ""; // Remove existing content
  const message = document.createElement('p');
  message.textContent = `Thank you so much ${person.name}! ${person.hometown} Represent!`;
  modalContent.appendChild(message);

    let intervalId = setInterval(scaleImage, 500);


  setTimeout(() => {
    clearInterval(intervalId);
    modal.style.display = "none";
  }, 4000);
};

function scaleImage() {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
}

// select modal button 
let modalButton = document.getElementById('modal-button');

const closeModal = () => {
  const modal = document.getElementById('thanks-modal');
  modal.style.display = "none";

}
modalButton.addEventListener("click", closeModal);




// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
      // accesses and saves value of first input

    let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }

  // TODO: Loop through all inputs
  for(let i = 0; i < petitionInputs.length; i++){
    if (person.hometown.length < 2) {
    // means the input is to short and contains errors
       petitionInputs[i].classList.add('error');
       containsErrors = true;
    
    }else {
    petitionInputs[i].classList.remove('error');
    }
    
  }
  
  const email = document.getElementById('email');
  if(!email.value.includes('.com')){
    containsErrors = true;
    alert("Email need to end in .com");
    email.classList.add('error');

  }else{
          email.classList.remove('error');
  }

  

  
  // TODO: Validate the value of each input
  if(containsErrors == false){
    addSignature(person);
    toggleModal(person);


    for (let j = 0; j < petitionInputs.length; j++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }



  // TODO: Call addSignature() and clear fields if no errors

}
// Add a click event listener to the sign now button here

signNowButton.addEventListener('click', validateForm);




let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.revealable');

const reveal = () =>{
  let windowHeight = window.innerHeight;

  for(let i = 0; i < revealableContainers.length; i++){
    
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
  /* add the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.add('active');
      revealableContainers[i].style.opacity = 1;
      revealableContainers[i].style.transitionDelay = animation.transitionDelay;
      revealableContainers[i].style.transitionDuration = animation.transitionDuration;
      revealableContainers[i].style.transitionProperty = animation.transitionProperty;
      revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;

} else {
  /* remove the active class to the revealableContainer's classlist */
            revealableContainers[i].classList.remove('active');
      revealableContainers[i].style.opacity = animation.initialOpacity;
      revealableContainers[i].style.transitionDelay = '';
      revealableContainers[i].style.transitionDuration = '';
      revealableContainers[i].style.transitionProperty = '';
      revealableContainers[i].style.transitionTimingFunction = '';

}
  }
  
}
window.addEventListener('scroll', reveal);



