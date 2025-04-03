alert('Working')

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const cameraShots = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-cinematicshots-c0b820fcfd57.herokuapp.com/api/${cameraShots}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.suggestions
    }catch(error){
        console.log(error)
    }
}