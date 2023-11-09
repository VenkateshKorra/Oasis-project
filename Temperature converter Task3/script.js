document.addEventListener("DOMContentLoaded", function() {
    var result;
    // Get a reference to the Convert button, "number" input, and "type" select
    var convertButton = document.getElementById("convertButton");
    var numberInput = document.getElementById("number");
    var typeSelect = document.getElementById("type");

    // Add a click event listener to the Convert button
    convertButton.addEventListener("click", function() {
        // Get the value of the "number" input and the selected option from the "type" select
        var inputValue = numberInput.value;
        var selectedType = typeSelect.value;

        // Log the values to the console
        console.log("Input Value: " + inputValue);
        console.log("Selected Type: " + selectedType);

        if (selectedType == "Fahrenheit") {
            result = (inputValue - 32) * 5 / 9;
            result = Number(result).toFixed(3); // Keep three digits after the decimal point
            document.getElementById("result").value=String(result+'C');
        }
        else if (selectedType== "Celsius") {
            result =(inputValue * 9/5) +32;
            result=Number(result).toFixed(3);
            document.getElementById("result").value= String(result+'F');
        }
        
    });
});
