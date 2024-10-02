function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else if (fromUnit === toUnit) {
        result = `The temperature is ${temperature} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}.`;
    } else {
        let celsius;

        // Convert from the selected unit to Celsius
        if (fromUnit === 'celsius') {
            celsius = temperature;
        } else if (fromUnit === 'fahrenheit') {
            celsius = (temperature - 32) * 5 / 9;
        } else if (fromUnit === 'kelvin') {
            celsius = temperature - 273.15;
        }

        // Convert from Celsius to the target unit
        let convertedTemperature;
        if (toUnit === 'celsius') {
            convertedTemperature = celsius;
        } else if (toUnit === 'fahrenheit') {
            convertedTemperature = celsius * 9 / 5 + 32;
        } else if (toUnit === 'kelvin') {
            convertedTemperature = celsius + 273.15;
        }

        result = `The temperature is ${convertedTemperature.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}.`;
    }

    document.getElementById('result').textContent = result;
}
