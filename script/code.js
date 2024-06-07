document.getElementById("triangle-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("Height").value);
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
      document.getElementById("results").textContent = "Please enter valid numbers for the base and height.";
      return;
    }
    const area = 0.5 * base * height;
    document.getElementById("results").textContent = `The area of the triangle with a base of ${base} and a height of ${height} is ${area.toFixed(2)} square units.`;
  });

