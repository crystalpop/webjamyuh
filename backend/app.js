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


function randSite() {

  const random = Math.floor(Math.random() * (numSites));
  let result = sites[random];
  sites[random] = sites[numSites - 1];
  numSites -= 1;

  return result;
}




let knownSite = randSite();
let guessSite;

app.post('/start', (req, res) => {
  
  if (numSites > 1) {

    guessSite = randSite();

    res.json({ message: 'New game started!', known: knownSite, unknown: guessSite});

    knownSite = guessSite;
  }
  else {
    res.json({message: "game over"})
  }
  
});


// app.post('/guess', async (req, res) => {
  // const userGuess = req.body.guess;
  // // Compare userGuess with targetNumber and provide feedback
    
  // if (userGuess == 'higher') {
  //   if (guessEmissions > knownEmissions) {
  //       res.send('correct');
  //       score += 1;
  //   }
  //   else {
  //       res.send('incorrect');
  //   }
  // }
  // else if (userGuess == 'lower') {
  //   if (guessEmissions < knownEmissions) {
  //       res.send('correct');
  //       score += 1;
  //   }
  //   else {
  //       res.send('incorrect');
  //   }
  // }
  // else {
  //   console.log("not higher or lower")
  // }

  // // make guess --> known; new guess
  // knownId = guessId;
  // guessId = Math.floor(Math.random() * numSites) + 1;
  // knownSite = guessSite;
  // guessSite = await getSite(guessId);
  // knownEmissions = guessEmissions;
  // guessEmissions = guessSite.carbon_per_visit;

// });

// app.get('/state', (req, res) => {
//   // Send the current state of the game (targetNumber, etc.)
//   // send score
//   res.send(score)
// });

  