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
const cardList = document.querySelectorAll(".card-bg");
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

function areaCalculationItem(title, area) {
  const areaCalculation = document.getElementById("area-calculation");

    const titleText = document.getElementById(title).innerText;

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerHTML = "Convert to m<sup>2</sup>";
    button.setAttribute("class", "btn btn-primary");

    const tr = document.createElement("tr");
    tr.innerHTML = `

        <td>${titleText}</td>
        <td>${area}cm<sup>2</sup></td>
    `
    tr.appendChild(button);
    areaCalculation.appendChild(tr);
}