//Steps

const stepsHTMLCollection = document.getElementsByClassName("step")
const buttonPrev = document.getElementsByClassName("btn__prev")
const buttonNext = document.getElementsByClassName("btn__next")
const buttonFinish = document.getElementsByClassName("btn__finish")
const stepsNumbersCollection = document.getElementsByClassName("step__number")

let steps = Array.from(stepsHTMLCollection)
let buttonPrevItem = Array.from(buttonPrev)
let buttonNextItem = Array.from(buttonNext)
let buttonFinishItem = Array.from(buttonFinish)
let stepsNumbers = Array.from(stepsNumbersCollection)
//Click On Buttons
buttonPrevItem.forEach(element => {
    element.addEventListener("click", stepMinus);
});
buttonNextItem.forEach(element => {
    element.addEventListener("click", stepPlus);
});

//Counter

let currentStep = 0



function stepPlus() {
    currentStep = currentStep + 1 
    if ( currentStep === 5 ) {
         currentStep = 4
    }
    updateStep()
}

function stepMinus() {
    currentStep = currentStep - 1 
    if ( currentStep === -1 ) {
        currentStep = 0
    }
    updateStep()
}

function updateStep() {
    steps.forEach(step => {
        let stepIndex = steps.indexOf(step)   

        step.classList.remove("active")

        //Show concret step/page
        if(stepIndex == currentStep) {
            step.classList.add("active")
        }

        //Delete firts btn back
        if(currentStep == 0) {
            buttonPrevItem[0].style.display = 'none';
        }else {
            buttonPrevItem[0].style.display = 'flex';
        }
        //Add btn finish in last step
        if(currentStep == 3) {
            buttonNextItem[0].style.display = 'none';
            buttonFinishItem[0].style.display = 'flex';
        }else {
            buttonNextItem[0].style.display = 'flex';
            buttonFinishItem[0].style.display = 'none';
        }
    });

    stepsNumbers.forEach(stepNumber => {
        let stepsNumbersIndex = stepsNumbers.indexOf(stepNumber)  
        stepNumber.classList.remove('active')

        if(stepsNumbersIndex == currentStep) {
            stepNumber.classList.add('active')
        }
    });
}

updateStep();


