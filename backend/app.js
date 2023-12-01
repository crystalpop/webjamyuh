import express from 'express'


// import { getSites, getSite } from './database.js'


const app = express();


// const all_sites = await getSites()
// console.log(all_sites)


const ogSites = [
 { id: 1, name: 'Reddit', url: 'reddit.com', carbon_per_visit: 13.05 },
 {
   id: 2,
   name: 'Pinterest',
   url: 'pinterest.com',
   carbon_per_visit: 12.43
 },
 {
   id: 3,
   name: 'Nintendo',
   url: 'nintendo.com',
   carbon_per_visit: 11.43
 },
 {
   id: 4,
   name: 'AccuWeather',
   url: 'accuweather.com',
   carbon_per_visit: 9.71
 },
 { id: 6, name: 'ESPN', url: 'espn.com', carbon_per_visit: 6.8 },
 {
   id: 7,
   name: "Victoria's Secret",
   url: 'victoriassecret.com',
   carbon_per_visit: 6.64
 },
 { id: 8, name: 'Uniqlo', url: 'uniqlo.com', carbon_per_visit: 5.22 },
 {
   id: 9,
   name: 'New York Times',
   url: 'nytimes.com',
   carbon_per_visit: 4.64
 },
 {
   id: 10,
   name: 'Alibaba',
   url: 'alibaba.com',
   carbon_per_visit: 4.43
 },
 { id: 11, name: 'Zoom', url: 'zoom.com', carbon_per_visit: 4.28 },
 { id: 12, name: 'Kohls', url: 'kohls.com', carbon_per_visit: 3.72 },
 { id: 13, name: 'Ikea', url: 'ikea.com', carbon_per_visit: 3.52 },
 { id: 14, name: 'Costco', url: 'costco.com', carbon_per_visit: 3.43 },
 { id: 15, name: 'Amazon', url: 'amazon.com', carbon_per_visit: 3.3 },
 {
   id: 16,
   name: 'Wayfair',
   url: 'wayfair.com',
   carbon_per_visit: 3.21
 },
 { id: 17, name: 'Twitch', url: 'twitch.tv', carbon_per_visit: 3.16 },
 {
   id: 18,
   name: 'The Weather Channel',
   url: 'weather.com',
   carbon_per_visit: 3.13
 },
 { id: 19, name: 'CNN', url: 'cn.com', carbon_per_visit: 3.07 },
 {
   id: 20,
   name: 'Home Depot',
   url: 'homedepot.com',
   carbon_per_visit: 3.01
 },
 { id: 21, name: 'BBC', url: 'bbc.co.uk', carbon_per_visit: 2.95 },
 { id: 22, name: 'Shein', url: 'shein.com', carbon_per_visit: 2.88 },
 {
   id: 23,
   name: 'STEAM',
   url: 'steampowered.com',
   carbon_per_visit: 2.72
 },
 {
   id: 24,
   name: 'Microsoft Office',
   url: 'office.com',
   carbon_per_visit: 2.26
 },
 { id: 25, name: 'Google', url: 'google.com', carbon_per_visit: 0.23 },
 {
   id: 26,
   name: 'Wikipedia',
   url: 'wikipedia.org',
   carbon_per_visit: 0.04
 },
 {
   id: 27,
   name: 'LinkedIn',
   url: 'linkedin.com',
   carbon_per_visit: 0.23
 },
 {
   id: 28,
   name: 'Facebook Messenger',
   url: 'messenger.com',
   carbon_per_visit: 0.29
 },
 { id: 29, name: 'H&M', url: 'hm.com', carbon_per_visit: 0.29 },
 { id: 30, name: 'Paypal', url: 'paypal.com', carbon_per_visit: 0.34 },
 {
   id: 31,
   name: 'Wordpress',
   url: 'wordpress.com',
   carbon_per_visit: 0.43
 },
 {
   id: 32,
   name: "Domino's",
   url: 'dominos.com',
   carbon_per_visit: 0.45
 },
 {
   id: 33,
   name: 'Coinbase',
   url: 'coinbase.com',
   carbon_per_visit: 0.49
 },
 { id: 34, name: 'Wish', url: 'wish.com', carbon_per_visit: 0.49 },
 {
   id: 35,
   name: 'Shopify',
   url: 'shopify.com',
   carbon_per_visit: 0.54
 },
 { id: 36, name: 'Indeed', url: 'indeed.com', carbon_per_visit: 0.58 },
 {
   id: 37,
   name: 'Spotify',
   url: 'spotify.com',
   carbon_per_visit: 0.58
 },
 {
   id: 38,
   name: 'Craigslist',
   url: 'craigslist.org',
   carbon_per_visit: 0.61
 },
 { id: 39, name: 'ASUS', url: 'asus.com', carbon_per_visit: 0.65 },
 {
   id: 40,
   name: 'Uber Eats',
   url: 'ubereats.com',
   carbon_per_visit: 0.66
 },
 { id: 41, name: 'Zara', url: 'zara.com', carbon_per_visit: 0.67 },
 { id: 42, name: 'FedEx', url: 'fedex.com', carbon_per_visit: 0.7 },
 {
   id: 43,
   name: 'Archive of Our Own',
   url: 'archiveofourown.org',
   carbon_per_visit: 0.73
 },
 { id: 44, name: 'Apple', url: 'apple.com', carbon_per_visit: 0.75 },
 { id: 45, name: 'Dell', url: 'dell.com', carbon_per_visit: 0.77 }
]


// handle http request to get all sites
// app.get("/sites", async (req, res) => {
//     const sites = await getSites()
//     res.send(sites)
// });


// // handle http request to get site by id
// app.get("/sites/:id", async (req, res) => {
//     const id = req.params.id
//     const site = await getSite(id)
//     res.send(site)
// });


app.listen(8000, () => {
   console.log('Server is running on port 8000')
});




function randSite(sites) {


 const random = Math.floor(Math.random() * (numSites));
 let result = sites[random];
 sites[random] = sites[numSites - 1];
 numSites -= 1;


 return result;
}










let guessSite;
let numSites;
let sites;
let knownSite;


app.get('/', async (req, res) => {


 sites = ogSites;
 numSites = sites.length;


 knownSite = randSite(sites);
 guessSite = randSite(sites);
  res.json({message: 'new game started', known: knownSite, unknown: guessSite});
 });


app.get('/game', (req, res) => {
 if (numSites > 1) {


   knownSite = guessSite;
   guessSite = randSite(sites);


   res.json({ message: 'playing', known: knownSite, unknown: guessSite});
  
 }
 else {
   res.json({message: "game over"})
 }
})
