// skateboard.js

const skateboard = {
  brand: "Real",                       // String
  model: "Nyjah Huston",                  // String
  deckLength: 32,                         // Number (in inches)
  deckWidth: 8,                           // Number (in inches)
  material: "Maple",                      // String
  trucks: "Independent",                  // String
  wheels: "Spitfire",                     // String
  isAvailable: true,                      // Boolean
  features: ["Kicktail", "Concave"],      // Array of strings
  toggleAvailability: function() {        // Function to toggle availability
    this.isAvailable = !this.isAvailable;
  }
};

console.log(skateboard);

// Demonstrate the toggleAvailability function
skateboard.toggleAvailability();
console.log(skateboard.isAvailable); // Should log 'false'

skateboard.toggleAvailability();
console.log(skateboard.isAvailable); // Should log 'true'
