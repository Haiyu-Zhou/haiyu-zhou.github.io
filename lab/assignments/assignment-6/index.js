//step 1: variables

const airtableApiKey = "keyUdTIA7XPdyI7Vi";

const airtableDatabaseUrl = "https://api.airtable.com/v0/appNBOMaj7ch0wKcM/Illustrations";

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey;

//step 2: get references to DOM
const illustrationContainerElement = document.querySelector('#illustrations')


//step 3: application
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    //what to do with the data returned
    return response.json()
})
jsonPromise.then((data) => {
    console.log(data)
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        const title = records[index].fields.Title
        const imageUrl = records[index].fields.Image[0].url
        //create container element
        const containerElement= document.createElement('div')
        containerElement.classList.add('container')
        //create image element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src',imageUrl)
        //create title element
        const titleElement = document.createElement('p')
        titleElement.classList.add('title')
        titleElement.innerHTML = title
        //add container element to DOM
        illustrationContainerElement.appendChild(containerElement)
        //add image element in containers
        containerElement.appendChild(imageElement)
        //add title element to containers
        containerElement.appendChild(titleElement)
    }
    //const recordsElement = document.createElement('div')
    //recordsElement.innerHTML = data.records[0].id
   // illustrationContainerElement.appendChild(recordsElement)
})