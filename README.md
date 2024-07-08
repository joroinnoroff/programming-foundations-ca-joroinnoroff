[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9764115&assignment_repo_type=AssignmentRepo)

# Programming Foundations CA

Jorgen Oino - NorOFF
Selftaught.js - learntoprogram.js
#Object 1
# Skateboard Object

This object represents a skateboard with various features and functionalities.

## Properties

- **brand (String)**: The brand of the skateboard.
  - Example: `"Element"`

- **model (String)**: The model of the skateboard.
  - Example: `"Nyjah Huston"`

- **deckLength (Number)**: The length of the skateboard deck in inches.
  - Example: `32`

- **deckWidth (Number)**: The width of the skateboard deck in inches.
  - Example: `8`

- **material (String)**: The material used for the skateboard deck.
  - Example: `"Maple"`

- **trucks (String)**: The brand of the trucks used in the skateboard.
  - Example: `"Independent"`

- **wheels (String)**: The brand of the wheels used in the skateboard.
  - Example: `"Spitfire"`

- **isAvailable (Boolean)**: Indicates if the skateboard is available.
  - Example: `true`

- **features (Array)**: A list of features of the skateboard.
  - Example: `["Kicktail", "Concave"]`

## Methods

- **toggleAvailability()**: Toggles the availability status of the skateboard.

## Example Usage

Here's how you can create and use the `skateboard` object:

```javascript
const skateboard = {
  brand: "Element",
  model: "Nyjah Huston",
  deckLength: 32,  // in inches
  deckWidth: 8,    // in inches
  material: "Maple",
  trucks: "Independent",
  wheels: "Spitfire",
  isAvailable: true,
  features: ["Kicktail", "Concave"],
  toggleAvailability: function() {
    this.isAvailable = !this.isAvailable;
  }
};

console.log(skateboard);

// Toggle the availability status
skateboard.toggleAvailability();
console.log(skateboard.isAvailable); // false

// Toggle it back
skateboard.toggleAvailability();
console.log(skateboard.isAvailable); // true
