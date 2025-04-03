const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 8000

app.use(cors())

const cinematicShots = [
    {
      keyword: "suspense",
      suggestions: [
        "Slow dolly-in on character’s face",
        "Low angle shot with harsh side lighting",
        "Shaky handheld corridor shot",
        "Extreme close-up on eyes",
        "Shadow silhouette against doorway"
      ]
    },
    {
      keyword: "romance",
      suggestions: [
        "Soft backlit close-up at golden hour",
        "Two-shot of hands brushing",
        "Wide shot with gentle lens flare",
        "Camera spin during embrace",
        "Focus pull from lips to eyes"
      ]
    },
    {
      keyword: "action",
      suggestions: [
        "High-speed tracking shot",
        "Dutch angle punch impact",
        "Wide static explosion shot",
        "POV running chase cam",
        "Overhead drone shot for escape"
      ]
    },
    {
      keyword: "comedy",
      suggestions: [
        "Whip pan reaction shot",
        "Wide shot with exaggerated blocking",
        "Zoom crash for awkward moment",
        "Overhead dinner table chaos",
        "Split-screen phone call"
      ]
    },
    {
      keyword: "drama",
      suggestions: [
        "Close-up on emotional expression",
        "Slow pull focus between characters",
        "Static shot with long silence",
        "Medium shot in natural light",
        "Push-in through doorway"
      ]
    },
    {
      keyword: "horror",
      suggestions: [
        "Tracking shot from behind in the dark",
        "Static wide shot with creepy background detail",
        "Quick pan to reveal",
        "Extreme close-up on terrified face",
        "Canted angle hallway shot"
      ]
    },
    {
      keyword: "thriller",
      suggestions: [
        "Over-the-shoulder following shot",
        "Long take with slow zoom",
        "Reflected POV in a mirror",
        "Low-key lighting and shadows",
        "Door ajar with shallow focus"
      ]
    },
    {
      keyword: "fantasy",
      suggestions: [
        "Sweeping wide shot of magical location",
        "Low angle with light flares",
        "Crane shot around character with cape",
        "High contrast silhouette at dusk",
        "Slow motion action magic effect"
      ]
    },
    {
      keyword: "documentary",
      suggestions: [
        "Handheld talking head interview",
        "B-roll nature insert shots",
        "Archival footage overlay",
        "Steady walking tracking shot",
        "Extreme close-up of hands at work"
      ]
    },
    {
      keyword: "music video",
      suggestions: [
        "Rapid jump cuts on beat",
        "Color-graded slow motion performance",
        "Lens flare during chorus",
        "POV dancing crowd shot",
        "Dynamic crane or gimbal follow"
      ]
    }
  ];
  

  app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:cameraShots', (request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})
