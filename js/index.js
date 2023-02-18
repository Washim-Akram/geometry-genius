// Calculate Triangle Area
document.getElementById("btn-triangle").addEventListener("click", function(){
    //Get triangle base input field value
    const triangleBaseInputFieldValue = getInputFieldValueById("triangle-base-input-field");

    if(isNaN(triangleBaseInputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(triangleBaseInputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }


    // Get triangle height input field value
    const triangleHeightInputFieldValue = getInputFieldValueById("triangle-height-input-field");

    if(isNaN(triangleHeightInputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(triangleHeightInputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Calculate Area(A) : 0.5 * b * h
    const area = 0.5 * triangleBaseInputFieldValue * triangleHeightInputFieldValue;

    areaCalculationItem("triangle-title", area);

})

// Calculate Rectangle Area
document.getElementById("btn-rectangle").addEventListener("click", function(){
    //Get rectangle width input field value
    const rectangleWidthInputFieldValue = getInputFieldValueById("rectangle-width-input-field");

    if(isNaN(rectangleWidthInputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(rectangleWidthInputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Get rectangle length input field value
    const rectangleLengthInputFieldValue = getInputFieldValueById("rectangle-length-input-field");

    if(isNaN(rectangleLengthInputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(rectangleLengthInputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Calculate Area(A) : w * l
    const area = rectangleWidthInputFieldValue * rectangleLengthInputFieldValue;

    areaCalculationItem("rectangle-title", area);

})

// Calculate Parallelogram Area
document.getElementById("btn-parallelogram").addEventListener("click", function(){
    //Get parallelogram base input field value
    const parallelogramBaseInputFieldValue = getInputFieldValueById("parallelogram-base-input-field");

    if(isNaN(parallelogramBaseInputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(parallelogramBaseInputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Get parallelogram height input field value
    const parallelogramHeightInputFieldValue = getInputFieldValueById("parallelogram-height-input-field");

    if(isNaN(parallelogramHeightInputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(parallelogramHeightInputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Calculate Area(A) : b * h
    const area = parallelogramBaseInputFieldValue * parallelogramHeightInputFieldValue;

    areaCalculationItem("parallelogram-title", area);

})

// Calculate Rhombus Area
document.getElementById("btn-rhombus").addEventListener("click", function(){
    //Get rhombus d1 input field value
    const rhombusD1InputFieldValue = getInputFieldValueById("rhombus-d1-input-field");

    if(isNaN(rhombusD1InputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(rhombusD1InputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Get rhombus d2 input field value
    const rhombusD2InputFieldValue = getInputFieldValueById("rhombus-d2-input-field");

    if(isNaN(rhombusD2InputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(rhombusD2InputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Calculate Area(A) : 0.5 * d1 * d2
    const area = 0.5 * rhombusD1InputFieldValue * rhombusD2InputFieldValue;

    areaCalculationItem("rhombus-title", area);

})

// Calculate Pentagon Area
document.getElementById("btn-pentagon").addEventListener("click", function(){
    //Get pentagon perimeter input field value
    const pentagonPerimeterInputFieldValue = getInputFieldValueById("pentagon-perimeter-input-field");

    if(isNaN(pentagonPerimeterInputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(pentagonPerimeterInputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Get pentagon base input field value
    const pentagonBaseInputFieldValue = getInputFieldValueById("pentagon-base-input-field");

    if(isNaN(pentagonBaseInputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(pentagonBaseInputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Calculate Area(A) : 0.5 * p * b
    const area = 0.5 * pentagonPerimeterInputFieldValue * pentagonBaseInputFieldValue;

    areaCalculationItem("pentagon-title", area);

})

document.getElementById("btn-ellipse").addEventListener("click", function(){
    //Get ellipse a axis input field value
    const ellipseAAxisInputFieldValue = getInputFieldValueById("ellipse-a-axis-input-field");

    if(isNaN(ellipseAAxisInputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(ellipseAAxisInputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Get ellipse b axis input field value
    const ellipseBAxisInputFieldValue = getInputFieldValueById("ellipse-b-axis-input-field");

    if(isNaN(ellipseBAxisInputFieldValue)) {
        return window.alert("Please Enter Only Number.");
      } else if(ellipseBAxisInputFieldValue < 0) {
         return window.alert("Please Enter Only Positive Number.");
      }

    // Calculate Area(A) : 3.14 * a * b
    const area = 3.14 * ellipseAAxisInputFieldValue * ellipseBAxisInputFieldValue;

    areaCalculationItem("ellipse-title", area);

})