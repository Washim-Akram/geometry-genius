// Calculate Triangle Area
document.getElementById("btn-triangle").addEventListener("click", function(){
    //Get triangle base input field value
    const triangleBaseInputFieldValue = getInputFieldValueById("triangle-base-input-field");
    handleInputError(triangleBaseInputFieldValue);

    // Get triangle height input field value
    const triangleHeightInputFieldValue = getInputFieldValueById("triangle-height-input-field");
    handleInputError(triangleHeightInputFieldValue);

    // Calculate Area(A) : 0.5 * b * h
    const area = 0.5 * triangleBaseInputFieldValue * triangleHeightInputFieldValue;

    areaCalculationItem("triangle-title", area);

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

    areaCalculationItem("rectangle-title", area);

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

    areaCalculationItem("parallelogram-title", area);

})

// Calculate Rhombus Area
document.getElementById("btn-rhombus").addEventListener("click", function(){
    //Get rhombus d1 input field value
    const rhombusD1InputFieldValue = getInputFieldValueById("rhombus-d1-input-field");
    // handleInputError(triangleBaseInputFieldValue);

    // Get rhombus d2 input field value
    const rhombusD2InputFieldValue = getInputFieldValueById("rhombus-d2-input-field");
    // handleInputError(triangleHeightInputFieldValue);

    // Calculate Area(A) : 0.5 * d1 * d2
    const area = 0.5 * rhombusD1InputFieldValue * rhombusD2InputFieldValue;

    areaCalculationItem("rhombus-title", area);

})

// Calculate Pentagon Area
document.getElementById("btn-pentagon").addEventListener("click", function(){
    //Get pentagon perimeter input field value
    const pentagonPerimeterInputFieldValue = getInputFieldValueById("pentagon-perimeter-input-field");
    // handleInputError(triangleBaseInputFieldValue);

    // Get pentagon base input field value
    const pentagonBaseInputFieldValue = getInputFieldValueById("pentagon-base-input-field");
    // handleInputError(triangleHeightInputFieldValue);

    // Calculate Area(A) : 0.5 * p * b
    const area = 0.5 * pentagonPerimeterInputFieldValue * pentagonBaseInputFieldValue;

    areaCalculationItem("pentagon-title", area);

})

document.getElementById("btn-ellipse").addEventListener("click", function(){
    //Get ellipse a axis input field value
    const ellipseAAxisInputFieldValue = getInputFieldValueById("ellipse-a-axis-input-field");
    // handleInputError(triangleBaseInputFieldValue);

    // Get ellipse b axis input field value
    const ellipseBAxisInputFieldValue = getInputFieldValueById("ellipse-b-axis-input-field");
    // handleInputError(triangleHeightInputFieldValue);

    // Calculate Area(A) : 3.14 * a * b
    const area = 3.14 * ellipseAAxisInputFieldValue * ellipseBAxisInputFieldValue;

    areaCalculationItem("ellipse-title", area);

})