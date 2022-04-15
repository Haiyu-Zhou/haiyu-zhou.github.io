//step 1: variables
const airtableApiKey = "keyBaUp0xKPE8ASU2";
const airtableDatabaseUrl = "https://api.airtable.com/v0/apprUBlqzOS8N13n1/Table%201";
const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey;

//step 2: get references to DOM
const subjectContainerElement = document.querySelector('#subject')
const verbContainerElement = document.querySelector('#verb')
const objectContainerElement = document.querySelector('#object')

//step 3: application
//fetch the data
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})
//get each set of images into their containers
jsonPromise.then((data) => {
    console.log(data)
    const words = data.records
    // Filter for subjects 
    const subjects = words.filter((word) => {
        return word.fields.Type === 'subject'
    })
    console.log(subjects)
        // Filter for verbs
        const verbs = words.filter((word) => {
            return word.fields.Type === 'v'
        })
        console.log(verbs)
    // Filter for objects
    const objects = words.filter((word) => {
        return word.fields.Type === 'object'
    })
    console.log(objects)
    subjectContainerElement.innerHTML = subjects[Math.floor(Math.random()*subjects.length)].fields.Word
    verbContainerElement.innerHTML = verbs[Math.floor(Math.random()*verbs.length)].fields.Word
    objectContainerElement.innerHTML = objects[Math.floor(Math.random()*objects.length)].fields.Word
})

