// Calculate Triangle Area
document.getElementById("btn-triangle").addEventListener("click", function(){
    //Get triangle base input field value
    const triangleBaseInputFieldValue = getInputFieldValueById("triangle-base-input-field");
    // handleInputError(triangleBaseInputFieldValue);

    // Get triangle height input field value
    const triangleHeightInputFieldValue = getInputFieldValueById("triangle-height-input-field");
    // handleInputError(triangleHeightInputFieldValue);

    // Calculate Area(A) : 0.5 * b * h
    const area = 0.5 * triangleBaseInputFieldValue * triangleHeightInputFieldValue;

    const areaCalculation = document.getElementById("area-calculation");

    const serial = 1;
    const triangleTitle = document.getElementById("triangle-title").innerText;

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "Convert to m<sup>2</sup>";
    button.setAttribute("id", "btn-area-calculate");
    button.setAttribute("class", "btn btn-primary");

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${triangleTitle}</td>
        <td>${area}cm<sup>2</sup></td>
    `
    tr.appendChild(button);
    areaCalculation.appendChild(tr);

})

// Calculate Rectangle Area
document.getElementById("btn-rectangle").addEventListener("click", function(){
    //Get rectangle width input field value
    const rectangleWidthInputFieldValue = getInputFieldValueById("rectangle-width-input-field");
    // handleInputError(triangleBaseInputFieldValue);

    // Get rectangle length input field value
    const rectangleLengthInputFieldValue = getInputFieldValueById("rectangle-length-input-field");
    // handleInputError(triangleHeightInputFieldValue);

    // Calculate Area(A) : w * l
    const area = rectangleWidthInputFieldValue * rectangleLengthInputFieldValue;

    const areaCalculation = document.getElementById("area-calculation");

    const serial = 2;
    const rectangleTitle = document.getElementById("rectangle-title").innerText;

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "Convert to m<sup>2</sup>";
    button.setAttribute("id", "btn-area-calculate");
    button.setAttribute("class", "btn btn-primary");

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${rectangleTitle}</td>
        <td>${area}cm<sup>2</sup></td>
    `
    tr.appendChild(button);
    areaCalculation.appendChild(tr);

})

// Calculate Parallelogram Area
document.getElementById("btn-parallelogram").addEventListener("click", function(){
    //Get parallelogram base input field value
    const parallelogramBaseInputFieldValue = getInputFieldValueById("parallelogram-base-input-field");
    // handleInputError(triangleBaseInputFieldValue);

    // Get parallelogram height input field value
    const parallelogramHeightInputFieldValue = getInputFieldValueById("parallelogram-height-input-field");
    // handleInputError(triangleHeightInputFieldValue);

    // Calculate Area(A) : b * h
    const area = parallelogramBaseInputFieldValue * parallelogramHeightInputFieldValue;

    const areaCalculation = document.getElementById("area-calculation");

    const serial = 3;
    const parallelogramTitle = document.getElementById("parallelogram-title").innerText;

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "Convert to m<sup>2</sup>";
    button.setAttribute("id", "btn-area-calculate");
    button.setAttribute("class", "btn btn-primary");

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${parallelogramTitle}</td>
        <td>${area}cm<sup>2</sup></td>
    `
    tr.appendChild(button);
    areaCalculation.appendChild(tr);

})