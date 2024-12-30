
const toggleMode = document.getElementById("toggleMode");
const body = document.body;

toggleMode.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    const resultText = document.getElementById("result");
    resultText.classList.toggle("dark-mode");
});


function convertTemperature() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unitFrom = document.getElementById("unitFrom").value;
    let unitTo = document.getElementById("unitTo").value;
    let result = 0;

    if (unitFrom === unitTo) {
        result = temp;
    } else {
        if (unitFrom === "Celsius") {
            if (unitTo === "Fahrenheit") {
                result = (temp * 9/5) + 32;
            } else if (unitTo === "Kelvin") {
                result = temp + 273.15;
            }
        } else if (unitFrom === "Fahrenheit") {
            if (unitTo === "Celsius") {
                result = (temp - 32) * 5/9;
            } else if (unitTo === "Kelvin") {
                result = (temp - 32) * 5/9 + 273.15;
            }
        } else if (unitFrom === "Kelvin") {
            if (unitTo === "Celsius") {
                result = temp - 273.15;
            } else if (unitTo === "Fahrenheit") {
                result = (temp - 273.15) * 9/5 + 32;
            }
        }
    }

    
    const resultText = document.getElementById("result");
    if (result <= 0) {
        resultText.style.color = '#00BFFF'; 
    } else if (result > 0 && result <= 30) {
        resultText.style.color = '#FFD700'; 
    } else {
        resultText.style.color = '#FF6347'; 
    }

    resultText.textContent = result.toFixed(2);

    
    updateUnitIcons(unitFrom, unitTo);

    
    addConversionRow(temp, unitFrom, unitTo, result);
}

function updateUnitIcons(unitFrom, unitTo) {
    const fromIcon = document.getElementById("unitFromIcon");
    const toIcon = document.getElementById("unitToIcon");

    const icons = {
        "Celsius": "images/celsius.png",
        "Fahrenheit": "images/fahrenheit.png",
        "Kelvin": "images/kelvin.png"
    };

    fromIcon.src = icons[unitFrom];
    toIcon.src = icons[unitTo];
}

function addConversionRow(inputValue, fromUnit, toUnit, result) {
    const tableBody = document.querySelector("#conversionTable tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${inputValue}</td>
        <td>${fromUnit}</td>
        <td>${toUnit}</td>
        <td>${result.toFixed(2)}</td>
    `;

    tableBody.appendChild(newRow);
}

function clearTable() {
    const tableBody = document.querySelector("#conversionTable tbody");
    tableBody.innerHTML = ''; 
}
