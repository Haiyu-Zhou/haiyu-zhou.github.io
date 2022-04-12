//step 1: variables

const airtableApiKey = "keyBaUp0xKPE8ASU2";

const airtableDatabaseUrl = "https://api.airtable.com/v0/app5dZBBB4148mWB9/Assets";

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey;

//step 2: get references to DOM
const illustrationContainerElement = document.querySelector('#images')


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
        const imageUrl = records[index].fields.Assets[0].url
        const tages = records[index].fields.Tags
        //create container element
        const containerElement= document.createElement('div')
        containerElement.classList.add('container')
        //create image element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src',imageUrl)
        //add container element to DOM 
        //add image element in containers
        //only add head images to containers
        //if (tages = "hands"){
           illustrationContainerElement.appendChild(containerElement)
        containerElement.appendChild(imageElement)
       // }
    }
})


//if (records[index].fields.Tags = "head"){
//    return headImages
//}




//https://api.airtable.com/v0/app5dZBBB4148mWB9/Assets?api_key=keyBaUp0xKPE8ASU2