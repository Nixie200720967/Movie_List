function togglePasswordVisibility(fieldId) {
    var passwordInput = document.getElementById(fieldId);
    var toggleIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.src = "assets/img/eye-slash-icon.png"; // Change to hide icon when showing password
    } else {
        passwordInput.type = "password";
        toggleIcon.src = "assets/img/eye-icon.png"; // Change to eye icon when hiding password
    }
}
