const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./controllers/middleware.js');

const app = express();

const mainCtrl = require('./controllers/mainCtrl.js');

app.use(bodyParser.json());
app.use(middleware.addHeaders);

// GET shit

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getSpecificHobbies);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getFavoriteRestaurants);
app.get('/skillz', mainCtrl.getSkillz);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.receivedSecrets);

// PUT shit

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);

// POST shit 

app.post('/hobbies', mainCtrl.addHobbies);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/skillz', middleware.generateID, mainCtrl.addSkillz)


app.listen(3000, () =>{
    console.log("I'm listening....")
});