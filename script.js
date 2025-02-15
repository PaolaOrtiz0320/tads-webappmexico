document.addEventListener("DOMContentLoaded", function () {
    const greenColorPicker = document.getElementById("greenColor");
    const redColorPicker = document.getElementById("redColor");
    const greenSection = document.getElementById("green");
    const redSection = document.getElementById("red");
    const greenHex = document.getElementById("greenHex");
    const redHex = document.getElementById("redHex");

    // Función para validar tonos de verde permitidos
    function validateGreen(color) {
        const r = parseInt(color.substring(1, 3), 16);
        const g = parseInt(color.substring(3, 5), 16);
        const b = parseInt(color.substring(5, 7), 16);

        // Asegurar que el color sigue siendo un tono de verde
        if (g > r && g > b) {
            return color;
        }
        return "#006847"; // Verde por defecto
    }

    // Función para validar tonos de rojo permitidos
    function validateRed(color) {
        const r = parseInt(color.substring(1, 3), 16);
        const g = parseInt(color.substring(3, 5), 16);
        const b = parseInt(color.substring(5, 7), 16);

        // Asegurar que el color sigue siendo un tono de rojo
        if (r > g && r > b) {
            return color;
        }
        return "#CE1126"; // Rojo por defecto
    }

    greenColorPicker.addEventListener("input", function () {
        let validColor = validateGreen(greenColorPicker.value);
        greenSection.style.backgroundColor = validColor;
        greenHex.textContent = validColor.toUpperCase();
    });

    redColorPicker.addEventListener("input", function () {
        let validColor = validateRed(redColorPicker.value);
        redSection.style.backgroundColor = validColor;
        redHex.textContent = validColor.toUpperCase();
    });
});
