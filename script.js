function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDiv = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    if (isNaN(temperature)) {
        resultDiv.innerHTML = "Please enter a valid temperature.";
        return;
    }

    const unit = unitSelect.value;
    let convertedTemperature;
    let convertedUnit;

    if (unit === "celsius") {
        convertedTemperature = temperature;
        convertedUnit = "°C";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperature - 32) * (5 / 9);
        convertedUnit = "°C";
    } else if (unit === "kelvin") {
        convertedTemperature = temperature - 273.15;
        convertedUnit = "°C";
    }

    resultDiv.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
