function updateFormula() {
    const x1 = document.getElementById("x1").value;
    const y1 = document.getElementById("y1").value;
    const x2 = document.getElementById("x2").value;
    const y2 = document.getElementById("y2").value;
    const formula = document.getElementById("formula");

    formula.innerHTML = generateFormula(x1, y1, x2, y2);
}

function generateFormula(x1, y1, x2, y2) {
    const m = (y2 - y1) / (x2 - x1);
    const b = y1 - (m * x1);

    let formula = "y = ";
    const bSign = b >= 0 ? "+" : "-";

    if (m === -1) {
        formula += "-x ";
    } else if (m !== 0) {
        formula += + m + "x ";
    }

    if (m !== 0 && b !== 0) {
        formula += bSign + " " + Math.abs(b);
    } else if (b !== 0) {
        formula += b;
    }

    return formula;
}