const weapons= [{
    name: "Ruins Greatsword", 
    description: "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon.",
    attack: 124
},
{
    name: "Eclipse Shotel", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 77, 
},
{
    name: "Grafted Blade Greatsword", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 157, 
}]

const nameContainerElement = document.querySelector('#name')
const descriptionContainerElement = document.querySelector('#description')
const attackContainerElement = document.querySelector('#attack')


//map
const weaponAttackDifferent =  weapons.map((user) => {
    const newWeapons = {
        name: user.name, 
        description: user.description, 
        attack: "attack=" + user.attack
    }
    return newWeapons
})

console.log(weaponAttackDifferent)
console.log(weapons)


//application
for (let index = 0; index < weaponAttackDifferent.length; index++) {
    //create container element
    const containerElement = document.createElement('div')
    //create name element
    const paragraphElement = document.createElement('p')
    //change the inner html of the divs
    nameContainerElement.appendChild(containerElement)
    containerElement.appendChild(paragraphElement)
    paragraphElement.innerHTML = weaponAttackDifferent[index].name
}
for (let index = 0; index < weaponAttackDifferent.length; index++) {
    //create container element
    const containerElement = document.createElement('div')
    //create name element
    const paragraphElement = document.createElement('p')

    //change the inner html of the divs
        attackContainerElement.appendChild(containerElement)
        containerElement.appendChild(paragraphElement)
        paragraphElement.innerHTML = weaponAttackDifferent[index].attack
}
for (let index = 0; index < weaponAttackDifferent.length; index++) {
    //create container element
    const containerElement = document.createElement('div')
    //create name element
    const paragraphElement = document.createElement('p')
    //change the inner html of the divs
    descriptionContainerElement.appendChild(containerElement)
    containerElement.appendChild(paragraphElement)
    paragraphElement.innerHTML = weaponAttackDifferent[index].description
}




//sort


//filter
