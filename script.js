function isValidInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function showErrorMessage(message) {
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = message;
}

function clearErrorMessage() {
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = "";
}

function toggleOutputDisplay(hasText) {
    const outputText = document.getElementById("outputText");
    const placeholderImage = document.getElementById("placeholderImage");
    const copyButton = document.getElementById("copyButton");

    if (hasText) {
        outputText.style.display = "block";
        placeholderImage.style.display = "none";
        copyButton.style.display = "block";
    } else {
        outputText.style.display = "none";
        placeholderImage.style.display = "block";
        copyButton.style.display = "none";
    }
}

function encrypt() {
    let inputText = document.getElementById("inputText").value;

    if (!isValidInput(inputText)) {
        showErrorMessage("Solo se permiten letras minúsculas y sin acento.");
        return;
    }

    clearErrorMessage();

    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").value = encryptedText;

    // Mostrar el texto encriptado, ocultar la imagen y mostrar el botón de copiar
    toggleOutputDisplay(encryptedText.trim() !== "");
}

function decrypt() {
    let inputText = document.getElementById("inputText").value;

    if (!isValidInput(inputText)) {
        showErrorMessage("Solo se permiten letras minúsculas y sin acento.");
        return;
    }

    clearErrorMessage();

    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").value = decryptedText;

    // Mostrar el texto desencriptado, ocultar la imagen y mostrar el botón de copiar
    toggleOutputDisplay(decryptedText.trim() !== "");
}

function copyText() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");

    alert("Texto copiado: " + outputText.value);
}

// Ocultar el textarea de salida, la imagen, y el botón de copiar al cargar la página
toggleOutputDisplay(false);
