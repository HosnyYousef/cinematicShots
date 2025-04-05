alert('Working')

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const cameraShots = document.querySelector('input').value
    try {
        const response = await fetch(`https://simple-cinematicshots-c0b820fcfd57.herokuapp.com/api/${cameraShots}`)
        const data = await response.json()

        console.log(data)
    // How to display API as a list in HTML?
        // was(before):  document.querySelector('h2').innerText = data.suggestions
        let listItems = data.suggestions.map(s => `<li>${s}</li>`).join('  ');
        document.querySelector('h2').innerHTML = `<ul>${listItems}</ul>`;
        
    } catch (error) {
        console.log(error)
    }
}