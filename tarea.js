const express = require('express')
const app= express()

const path = require('path')

app.listen(3000, () =>{

    console.log('Si sirve :D')
})

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'todaviatarea.html'))

    })