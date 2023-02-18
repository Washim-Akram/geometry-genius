function goToBlog() {
    window.location.href = "blog.html";
};
function backToHome() {
    window.location.href = "index.html";
};

// Function for random color generate.
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }

  // Individual background color generate on mouse enter.
const cardList = document.querySelectorAll(".card");
for(const card of cardList) {
    card.addEventListener('mouseenter', function(event) {
        event.target.style.backgroundColor = randomColor();
  });
}


function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    // inputField.value = "";
    return inputFieldValue;
}

// function getTextFieldValueById(textFieldId) {
//     const textField = document.getElementById(textFieldId);
//     const textFieldString = textField.innerText;
//     const textFieldValue = parseFloat(textFieldString);
//     return textFieldValue;
// }

function setTextFieldValueById(textFieldId, value) {
    const textField = document.getElementById(textFieldId);
    textField.innerText = value;
}

// function handleInputError(inputFieldValue) {
//     if( typeof inputFieldValue !== "number"){
//         window.alert("Please Enter Only Number.");
//         return;
//     }else if(inputFieldValue === "") {
//         window.alert("please Enter Only Number.")
//         return;
//     } else if(inputFieldValue < 0) {
//         window.alert("Please Enter Only Positive Number.")
//         return;
//     }
// }