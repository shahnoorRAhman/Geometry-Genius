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

    const area = 0.5 * base * height;
    console.log('Area:', area);
    
    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    
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

    // get area value
    const area = width * length;
    console.log('Area:', area);

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}