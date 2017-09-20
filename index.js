const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 4800;

const app = express();
app.use(bodyParser.json());
app.use(cors());

var main_ctrl = require("./controllers/main_ctrl.js")

app.get("/api/name", main_ctrl.getName);
app.get("/api/location", main_ctrl.getLocation);
app.get("/api/occupations", main_ctrl.getOccupations);
app.get("/api/latestOccupation", main_ctrl.getLatestOccupation);
app.get("/api/hobbies", main_ctrl.getHobbies);
app.get("/api/hobbies/:type", main_ctrl.getHobbyType);
app.get("/api/family", main_ctrl.getFamily);
app.get("/api/family/:gender", main_ctrl.getFamilyByGender);
app.get("/api/restaurants", main_ctrl.getRestaurants);
app.get("/api/restaurants/:name", main_ctrl.getRestaurantByName);

app.put("/api/name", main_ctrl.changeName);
app.put("/api/location", main_ctrl.changeLocation);

app.post("/api/hobbies", main_ctrl.addHobbies);
app.post("/api/occupations", main_ctrl.addOccupations);
app.post("/api/family", main_ctrl.addFamily);
app.post("/api/restaurants", main_ctrl.addRestaurant);

app.get("/api/skills", main_ctrl.getSkills);
app.post("/api/skills", main_ctrl.addSkills);

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});