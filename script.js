const formfield = document.getElementById('formfield');

function addAssToForm() {
    const newAss = document.createElement('div');
    newAss.setAttribute('class', 'assessment');

    const newWeightField = document.createElement('input');
    newWeightField.setAttribute('type','number');
    newWeightField.setAttribute('name','weight');
    newWeightField.setAttribute('placeholder','30');
    newAss.appendChild(newWeightField);

    const newScoreField = document.createElement('input');
    newScoreField.setAttribute('type','number');
    newScoreField.setAttribute('name','score');
    newScoreField.setAttribute('placeholder','30');
    newAss.appendChild(newScoreField);

    formfield.appendChild(newAss);
}

function addUnknownAssToForm() {
    const newAss = document.createElement('div');
    newAss.setAttribute('class', 'assessment');

    const newWeightField = document.createElement('input');
    newWeightField.setAttribute('type','number');
    newWeightField.setAttribute('name','weight');
    newWeightField.setAttribute('placeholder','30');
    newAss.appendChild(newWeightField);

    formfield.appendChild(newAss);
}

function removeAssFromForm() {
    const assessments = formfield.getElementsByClassName('assessment');

    if (assessments.length > 1) {
        formfield.removeChild(assessments[(assessments.length) - 1]);
    } else {
        console.log("there must be at least one assessment per subject");
    }
}

const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    // handle the form data
    event.preventDefault();

    // validate the form to have correct input values
    validateForm(form);

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
    runningTotal = 0;

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