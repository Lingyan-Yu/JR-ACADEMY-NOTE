let journal = [
    {event: 'work', squirrel: true},
    {event: 'cycling', squirrel: false},
    {event: 'break', squirrel: true},
    {event: 'brushed teeth', squirrel: true},
]

const express = require('express')
const journalRouter = express.Router()

// 1. Get an event by query or params and return found event

journalRouter.get('/list', function(req, res) {
    let queryEvent = req.query.event
    let eventIndex
    for (let key in journal) {
        if (journal[key].event === queryEvent) {
            eventIndex = key
            break
        }
    }
    
    res.send(journal[eventIndex])
})

// 2. Post an event by passing body, res.send({msg: 'add event succeeded', data: body})

journalRouter.post('/add', function(req, res) {
    let body = req.body
    res.send({
        msg: 'add event succeeded',
        data: body
    })
})


module.exports = journalRouter