function calculateTriangle() {

    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    baseField.value = '';
    const base = parseFloat(baseValueText);
    

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightvalueText = heightField.value;
    heightField.value = '';
    const height = parseFloat(heightvalueText);

    // validation of input
    if (isNaN(base) || isNaN(height)) {
        alert('please enter a valid number');
        return;
    }

    const area = 0.5 * base * height;
    console.log('Area:', area);
    
    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    // add to calculation entry
    addToCalculationEntry('triangle', area)
    
}

function calculateRectangle() {
    // get width value
    const widthField = document.getElementById('rectangle-width')
    const widthTextValue = widthField.value;
    widthField.value = '';
    
    const width = parseFloat(widthTextValue);

    // get length value

    const lengthField = document.getElementById('rectangle-length');
    const lengthTextValue = lengthField.value;
    lengthField.value = '';
    const length = parseFloat(lengthTextValue);

     // validation of input
     if (isNaN(width) || isNaN(length)) {
        alert('please enter a valid number');
        return;
    }

    // get area value
    const area = width * length;
    console.log('Area:', area);

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

    // add to calculation entry
    addToCalculationEntry('rectangle', area)
}

function calculateparallelogramArea() {
    const base = getinputvalue('parallelogram-base')
    const height = getinputvalue('parallelogram-height')
   
     // validation of input
     if (isNaN(base) || isNaN(height)) {
        alert('please enter a valid number');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    

    // add to calculation entry
    addToCalculationEntry('parallelogram', area)


}

function calculateEllipseArea() {
    const a_axis = getinputvalue('ellipse-a-axis')
    const b_axis = getinputvalue('ellipse-b-axis')

     // validation of input
     if (isNaN( a_axis) || isNaN(b_axis)) {
        alert('please enter a valid number');
        return;
    }

    const area = 3.14 * a_axis * b_axis;
    setElementInnerText('ellipse-area', area);

    // add to calculation entry
    addToCalculationEntry('ellipse', area)
}

function getinputvalue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    inputField.value = '';
    const value = parseFloat(inputValueText)
    return value;
}

function setElementInnerText(elementId,area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// add to calculations entry
function addToCalculationEntry(areaType,area) {
    console.log(areaType + " " + area)
    const calculationEntry = document.getElementById('area-calculation');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.innerHTML = `${count + 1}.  ${areaType} ${area} cm<sup>2</sup>`
    calculationEntry.appendChild(p);

}