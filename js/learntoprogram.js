let learningresource1 = {
  
  name: "Freecodecamp",
  pricesfrom: 0,
  typeof: "Free access to courses",
  adress: "www.codeinfinity.com",
  classes: ["HTML, JavaScript CSS and more"],
};

let learningresource2 = {
  
  name: "Codeacademy",
  pricesfrom: 34,
  typeof: "subscription to courses",
  adress: "www.codeacedemy.com",
  classes: ["HTML, JavaScript CSS and more"],
};

let learningresource3 = {
  
  name: "Udemy",
  pricesfrom: 18,
  typeof: "subscription to courses",
  adress: "www.Udemy.com",
  classes: ["HTML, JavaScript CSS and more"],
};

let learningresource4 = {
  
  name: "Codeinfinity",
  Pricesfrom:  20,
  typeof: "subscription to courses",
  adress: "www.codeinfinity.com",
  classes: ["HTML, JavaScript CSS and more"],
  
  
};

console.log(learningresource1, learningresource2, learningresource3,learningresource4)
function Resources({ arg1, arg2, arg3, arg4 }) {
  console.log(`
  first Learningresource1: ${arg1}
  second Learningresource2: ${arg2}
  third Learningresource3: ${arg3}
  fourth Learningresource4: ${arg4}
  `);
}

Resources({
  arg4: "Codeinfinity",
  arg3: "Udemy",
  arg1: "Freecodecamp",
  arg2: "Codeacademy"
});



