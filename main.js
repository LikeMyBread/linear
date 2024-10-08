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
    const symbol = b >= 0 ? "+" : "-";
    return "y = " + m + "x " + symbol + " " + Math.abs(b);
}