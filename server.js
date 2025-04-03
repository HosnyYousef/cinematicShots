
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
app.use(express.static('public'));

app.use(cors())


const cinematicShots = {
    '21 savage':{
        'age': 29,
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'dylan':{
        'age': 29,
        'birthName':'Dylan',
        'birthLocation': 'Dylan' 
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:cameraShot', (request,response)=>{
    response.json(cinematicShots)
    // const cameraShots = request.params.cameraShot.toLowerCase()
    console.log(request.params.cameraShot)
    // if(cinematicShots[cameraShots]){
    //     response.json(cinematicShots[cameraShots])
    // }else{
    //     response.json(cinematicShots['dylan'])
    // }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
