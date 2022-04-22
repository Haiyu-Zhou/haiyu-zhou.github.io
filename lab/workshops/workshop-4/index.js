const weapons = [
  {
    name: "Ruins Greatsword",
    description:
      "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon.",
    attack: 124,
  },
  {
    name: "Eclipse Shotel",
    description:
      "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 77,
  },
  {
    name: "Grafted Blade Greatsword",
    description:
      "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 157,
  },
];

const bigContainerElement = document.querySelector("#application");
const mapButton = document.querySelector("#button-1");
const filterButton = document.querySelector("#button-2");
const sortButton = document.querySelector("#button-3");

//application 1 (no additional javascript, just data)
for (let index = 0; index < weapons.length; index++) {
  //create containers for the data
  const containerElement = document.createElement("div");
  //create variables of names, descriptions and attack value.
  const nameElement = document.createElement("p");
  nameElement.innerHTML = weapons[index].name;
  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = weapons[index].description;
  const attackElement = document.createElement("p");
  attackElement.innerHTML = weapons[index].attack;
  //add varaibles into containers
  bigContainerElement.appendChild(containerElement);
  containerElement.appendChild(nameElement);
  containerElement.appendChild(descriptionElement);
  containerElement.appendChild(attackElement);
}

//map
//add "attack = xxx"
const weaponAttackDifferent = weapons.map((user) => {
  const newWeapons = {
    name: user.name,
    description: user.description,
    attack: "attack=" + user.attack,
  };
  return newWeapons;
});

console.log("map:");
console.log(weaponAttackDifferent);

//application
mapButton.addEventListener("click", () => {
  bigContainerElement.innerHTML = "";
  for (let index = 0; index < weaponAttackDifferent.length; index++) {
    //create containers for the data
    const containerElement = document.createElement("div");
    //create variables of names, descriptions and attack value.
    const nameElement = document.createElement("p");
    nameElement.innerHTML = weaponAttackDifferent[index].name;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = weaponAttackDifferent[index].description;
    const attackElement = document.createElement("p");
    attackElement.innerHTML = weaponAttackDifferent[index].attack;
    //add varaibles into containers
    bigContainerElement.appendChild(containerElement);
    containerElement.appendChild(nameElement);
    containerElement.appendChild(descriptionElement);
    containerElement.appendChild(attackElement);
  }
});

//filter
//filter out the ones with 100 or highr attack value
const highAttack = weapons.filter((weapons) => {
  return weapons.attack > 100;
});
//application
filterButton.addEventListener("click", () => {
  bigContainerElement.innerHTML = "";
  for (let index = 0; index < highAttack.length; index++) {
    //create containers for the data
    const containerElement = document.createElement("div");
    //create variables of names, descriptions and attack value.
    const nameElement = document.createElement("p");
    nameElement.innerHTML = highAttack[index].name;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = highAttack[index].description;
    const attackElement = document.createElement("p");
    attackElement.innerHTML = highAttack[index].attack;
    //add varaibles into containers
    bigContainerElement.appendChild(containerElement);
    containerElement.appendChild(nameElement);
    containerElement.appendChild(descriptionElement);
    containerElement.appendChild(attackElement);
  }
});



//sort
//sort by attack value low to high
const weaponsSortedByAttack = weapons.sort((a, b) => {
  if (a.attack > b.attack) {
    return 1;
  }
  if (a.attack < b.attack) {
    return -1;
  }
  if (a.attack === b.attack) {
    return 0;
  }
});
console.log("sort:")
console.log(weaponsSortedByAttack)
//application
sortButton.addEventListener("click", () => {
    bigContainerElement.innerHTML = "";
    for (let index = 0; index < weaponsSortedByAttack.length; index++) {
      //create containers for the data
      const containerElement = document.createElement("div");
      //create variables of names, descriptions and attack value.
      const nameElement = document.createElement("p");
      nameElement.innerHTML = weaponsSortedByAttack[index].name;
      const descriptionElement = document.createElement("p");
      descriptionElement.innerHTML = weaponsSortedByAttack[index].description;
      const attackElement = document.createElement("p");
      attackElement.innerHTML = weaponsSortedByAttack[index].attack;
      //add varaibles into containers
      bigContainerElement.appendChild(containerElement);
      containerElement.appendChild(nameElement);
      containerElement.appendChild(descriptionElement);
      containerElement.appendChild(attackElement);
    }
  });