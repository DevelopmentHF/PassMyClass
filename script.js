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
    newScoreField.setAttribute('name','weight');
    newScoreField.setAttribute('placeholder','30');
    newAss.appendChild(newScoreField);

    formfield.appendChild(newAss);
}

function removeAssFromForm() {
    const input_tags = formfield.getElementsByTagName('input');

    if (input_tags.length > 2) {
        formfield.removeChild(input_tags[(input_tags.length) - 1]);
    } else {
        console.log("there must be at least one assessment per subject");
    }
}