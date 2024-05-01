//del original hecho en clase
function validateForm() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
        alert("Los correos electrónicos no coinciden.");
        return false;
    }

    return true;
}