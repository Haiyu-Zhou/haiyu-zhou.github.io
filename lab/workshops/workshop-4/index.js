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
},]

//map
const weaponAttackDifferent =  weapons.map((user) => {
    const newWeapons = {
        name: user.name, 
        description: user.description, 
        attack: "attack" + user.attack
    }
    return newWeapons
})

console.log(weaponAttackDifferent)

//sort


//filter






//application
for (let index = 0; index < weaponAttackDifferent.length; index++) {
    //create container element
    const createContainerElement = document.createElement('div')
    //create name element
    const createNameElement = document.createElement('p')

    //create name element
    const createDescriptionElement = document.createElement('p')
    
    //create attack element
    const createAttackElement = document.createElementS('p')

    //change the inner html of the divs
    
}