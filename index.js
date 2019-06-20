document.getElementById("js-insert").innerHTML =
  "<h2>Hola mundo CRUEL !!! PERRA !!!</h2>";

var carlos = {
  name: "Carlos",
  lastname: "Ramos",
  age: 23
};

var vane = {
  name: "Vanessa",
  lastname: "Contreras",
  age: 26
};

functionprintnameandage(person);
{
  var { name } = person;
  var { lastname } = person;
  var { age } = person;
  console.log(`Hola, me llamo ${name}${lastname} y tengo ${age} años`);
}

printnameandage(carlos);
printnameandage(vane);
