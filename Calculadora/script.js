function getNumber(id) {
    return Number(document.getElementById(id).value) || 0;
}

function setResult(value) {
    document.getElementById("txtResultado_id").value = value;
}

function suma() {
    const n1 = getNumber("txtNum1_id");
    const n2 = getNumber("txtNum2_id");
    setResult(n1 + n2);
}

function resta() {
    const n1 = getNumber("txtNum1_id");
    const n2 = getNumber("txtNum2_id");
    setResult(n1 - n2);
}

function multiplicacion() {
    const n1 = getNumber("txtNum1_id");
    const n2 = getNumber("txtNum2_id");
    setResult(n1 * n2);
}

function division() {
    const n1 = getNumber("txtNum1_id");
    const n2 = getNumber("txtNum2_id");

    if (n2 === 0) {
        setResult("Error");
        return;
    }

    setResult(n1 / n2);
}

function limpiar() {
    document.getElementById("txtNum1_id").value = "";
    document.getElementById("txtNum2_id").value = "";
    document.getElementById("txtResultado_id").value = "";
}