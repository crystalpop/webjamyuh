import express from 'express'

import { getSites, getSite } from './database.js'

const app = express();

let sites = await getSites();
let numSites = sites.length

// handle http request to get all sites
app.get("/sites", async (req, res) => {
    const sites = await getSites()
    res.send(sites)
});

// handle http request to get site by id
app.get("/sites/:id", async (req, res) => {
    const id = req.params.id
    const site = await getSite(id)
    res.send(site)
});

app.listen(8000, () => {
    console.log('Server is running on port 8000')
});

// Example game logic
let knownId;
let knownSite;
let guessId;
let guessSite;
let knownEmissions;
let guessEmissions;

app.post('/start', (req, res) => {
  knownId = Math.floor(Math.random() * numSites) + 1;
  knownSite = getSite(knownId);
  knownEmissions = knownSite.carbon_per_visit;
  guessId = Math.floor(Math.random() * numSites) + 1;
  guessSite = getSite(guessId);
  guessEmissions = guessSite.carbon_per_visit;
  res.json({ message: 'New game started!' });
});


app.post('/guess', (req, res) => {
  const userGuess = req.body.guess;
  // Compare userGuess with targetNumber and provide feedback
    
  if (userGuess == 'higher') {
    if (guessEmissions > knownEmissions) {
        res.send('correct');
    }
    else {
        res.send('incorrect');
    }
  }
  else if (userGuess == 'lower') {
    if (guessEmissions < knownEmissions) {
        res.send('correct');
    }
    else {
        res.send('incorrect');
    }
  }

  // make guess --> known; new guess
  knownId = guessId;
  guessId = Math.floor(Math.random() * numSites) + 1;
  knownSite = guessSite;
  guessSite = getSite(guessID);
  knownEmissions = guessEmissions;
  guessEmissions = guessSite.carbon_per_visit;

});

app.get('/state', (req, res) => {
  // Send the current state of the game (targetNumber, etc.)
  // send score
});

  