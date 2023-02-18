document.getElementById("btn-triangle").addEventListener("click", function(){
    //Get triangle base input field value
    const triangleBaseInputFieldValue = getInputFieldValueById("triangle-base-input-field");
    // handleInputError(triangleBaseInputFieldValue);

    // Get triangle height input field value
    const triangleHeightInputFieldValue = getInputFieldValueById("triangle-height-input-field");
    // handleInputError(triangleHeightInputFieldValue);

    // Calculate Area(A) : 0.5 * b * h
    const area = 0.5 * triangleBaseInputFieldValue * triangleHeightInputFieldValue;

    //  // Get area calculation text field value
    // const areaCalculationTextFieldValue = getTextFieldValueById("area-calculation-text-field");

    // Set area calculation text field value
    setTextFieldValueById("area-calculation-text-field", area);



})