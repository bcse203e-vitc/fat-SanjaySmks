function parseNumbers() {
    const input = document.getElementById("numbers").value.trim();
    const errorDiv = document.getElementById("error");
    const resultDiv = document.getElementById("result");

    errorDiv.textContent = "";
    resultDiv.textContent = "";

    if (input.length === 0) {
        errorDiv.textContent = "Error: Please enter at least one number.";
        return null;
    }

    const parts = input.split(/\s+/);

    const numbers = parts.map(x => Number(x));
    if (numbers.some(isNaN)) {
        errorDiv.textContent = "Error: Input contains invalid (non-numeric) values.";
        return null;
    }

    return numbers;
}

function computeMean() {
    const nums = parseNumbers();
    if (!nums) return;

    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    document.getElementById("result").textContent = `Mean: ${mean.toFixed(4)}`;
}

function computeVariance() {
    const nums = parseNumbers();
    if (!nums) return;

    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const variance = nums.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / nums.length;

    document.getElementById("result").textContent = `Variance: ${variance.toFixed(4)}`;
}

function computeStdDev() {
    const nums = parseNumbers();
    if (!nums) return;

    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const variance = nums.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / nums.length;
    const sd = Math.sqrt(variance);

    document.getElementById("result").textContent = `Standard Deviation: ${sd.toFixed(4)}`;
}
