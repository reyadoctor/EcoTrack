function calculateFootprint() {
    // Get input values
    const transportationMiles = parseFloat(document.getElementById('transportation').value) || 0;
    const energyUsage = parseFloat(document.getElementById('energy').value) || 0;

    // Calculate carbon footprint
    const transportationFootprint = transportationMiles * 0.411; // kg CO2 per mile
    const energyFootprint = energyUsage * 0.92; // kg CO2 per kWh

    const totalFootprint = transportationFootprint + energyFootprint;

    // Update results
    document.getElementById('footprint').textContent = `${totalFootprint.toFixed(2)} kg CO2`;

    // Suggestions
    const suggestions = totalFootprint > 100
        ? "Consider carpooling or switching to renewable energy to reduce your footprint."
        : "You're doing great! Keep making sustainable choices!";
    document.getElementById('suggestions').textContent = suggestions;
}
