const formfield = document.getElementById('formfield');

// adds a known / estimated assignment to the Dom 
// includes a weight and score section
function addAssToForm() {
    const newAss = document.createElement('div');
    newAss.setAttribute('class', 'assessment');
    
    // adds a weighting field -> i.e this assignment worth 30%
    const newWeightField = document.createElement('input');
    newWeightField.setAttribute('type','number');
    newWeightField.setAttribute('name','weight');
    newWeightField.setAttribute('placeholder','30');
    newAss.appendChild(newWeightField);
    
    // adds a score field -> i.e you scored 75% on assessment 1
    const newScoreField = document.createElement('input');
    newScoreField.setAttribute('type','number');
    newScoreField.setAttribute('name','score');
    newScoreField.setAttribute('placeholder','30');
    newAss.appendChild(newScoreField);

    // appends to the bottom of the form
    formfield.appendChild(newAss);
}

// Used to add the 'unknown' assignment to the Dom 
// it skips out on adding a result input area 
function addUnknownAssToForm() {
    const newAss = document.createElement('div');
    newAss.setAttribute('class', 'assessment');

    // adds a weighting field -> i.e this assignment worth 30%
    const newWeightField = document.createElement('input');
    newWeightField.setAttribute('type','number');
    newWeightField.setAttribute('name','weight');
    newWeightField.setAttribute('placeholder','30');
    newAss.appendChild(newWeightField);

    // appends to the bottom of the form 
    formfield.appendChild(newAss);
}

// removes the last assessment from the bottom of the list
function removeAssFromForm() {
    const assessments = formfield.getElementsByClassName('assessment');

    if (assessments.length > 1) {
        formfield.removeChild(assessments[(assessments.length) - 1]);
    } else {
        console.log("there must be at least one assessment per subject");
    }
}

const form = document.getElementById('form')

// acts as sort of a `main function` as everything occurs
// when the button is submitted
form.addEventListener('submit', (event) => {
    // handle the form data
    event.preventDefault();

    // validate the form to have correct input values
    validateForm(form);

    // calculate the required score of the unknown assessment mark
    calculate(form);
});

function validateForm(inputForm) {
    var isErrorPresent = false;

    // weights of assessments must sum to 100% in total
    if (DoWeightsSumTo100(inputForm.elements['weight']) === false) {
        console.log("weights do not equal 100");
        isErrorPresent = true;
    };

    return isErrorPresent;
}

// checks if the values of the array `weights` sum to 100%
function DoWeightsSumTo100(weights) {
    let runningTotal = 0;

    if (weights.length > 1) {
        weights.forEach(weight => {
            runningTotal += Number(weight.value);
        });
    } else {
        // case where only one assessment is in the form when submitted
        // because it is not an array when there is only 1 for some reason
        runningTotal = Number(weights.value);
    }

    return (runningTotal === 100);
}

// returns a required percentage of unknown assessment to achieve the final percentage
function calculate(inputForm) {
    let requiredScore = inputForm.elements['final-mark']; 
    console.log(requiredScore.value);
    // basic eq with one variable 
    // weight * score + weight * score etc etc = final percentage
    console.log(document.getElementsByClassName("assessment")); 
    // read in what the final score is

    return requiredScore;
}  
