const user = require("../user");
const skills = require("../skills");

const getName = (req, res, next) => {
	res.json({Name: user.name});
};

const getLocation = (req, res, next) => {
	res.json({Location: user.location});
};

const getOccupations = (req, res, next) => {
	if(req.query.order) {
		if(req.query.order=="desc") {
			res.json({Occupations: user.occupations.reverse()});
		} else if(req.query.order=="asc"){
			res.json({Occupations: user.occupations.sort()});
		}
	} else {
		res.json({Occupations: user.occupations});	
	}
};

const getLatestOccupation = (req, res, next) => {
	res.json({LatestOccupation: user.occupations.slice(-1).toString()});
};

const getHobbies = (req, res, next) => {
	res.json({Hobbies: user.hobbies});
};

const getHobbyType = (req, res, next) => {
	if(req.params.type) {
		res.json(user.hobbies.filter(hobby => hobby.type == req.params.type));
	} else {
		res.json(user.hobbies);
	}
};

const getFamily = (req, res, next) => {
	if(req.query.relation) {
		res.json(user.family.filter(member => member.relation == req.query.relation));
	} else {
		res.json({Family: user.family});
	}
};

const getFamilyByGender = (req, res, next) => {
	if(req.params.gender) {
		res.json(user.family.filter(member => member.gender == req.params.gender));
	} else {
		res.json(user.family);
	}
};

const getRestaurants = (req, res, next) => {
	if(req.query.rating) {
		res.json(user.restaurants.filter(restaurant => restaurant.rating >= req.query.rating));
	} else {
		res.json(user.restaurants);	
	}
};

const getRestaurantByName = (req, res, next) => {
	if(req.params.name) {
		res.json(user.restaurants.filter(restaurant => restaurant.name == req.params.name));
	} else {
		res.json(user.restaurants);
	}
};

const changeName = (req, res, next) => {
	user.name = (req.body.name);
	res.json(user);
};

const changeLocation = (req, res, next) => {
	user.location = (req.body.location);
	res.json(user);
};

const addHobbies = (req, res, next) => {
	if(!req.body) {
		res.status(418).json({err: "Please Enter Hobby"});
	} else {
		user.hobbies.push(req.body);
		res.json(user.hobbies);
	}
};

const addOccupations = (req, res, next) => {
	if(!req.body) {
		res.status(418).json({err: "Please Enter Occupation"})
	} else {
		user.occupations.push(req.body.banana);
		res.json(user.occupations);
	}
};

const addFamily = (req, res, next) => {
	if(!req.body) {
		res.status(418).json({err: "Please Enter Family"});
	} else {
		user.family.push(req.body);
		res.json(user.family);
	}
};

const addRestaurant = (req, res, next) => {
	if(!req.body) {
		res.status(418).json({err: "Please Enter Restaurant"});
	} else {
		user.restaurants.push(req.body);
		res.json(user.restaurants);
	}
};

const getSkills = (req, res, next) => {
	if(req.query.experience) {
		res.json(skills.filter(skill => skill.experience == req.query.experience));
	} else {
		res.json(skills);
	}
};

const addSkills = (req, res, next) => {
	if(!req.body) {
		res.status(418).json({err: "Please Enter Skills"});
	} else {
		let id = skills.length+1;
		req.body.id = id;
		skills.push(req.body);
		res.json(skills);
	}
};

module.exports = {
	getName,
	getLocation,
	getOccupations,
	getLatestOccupation,
	getHobbies,
	getHobbyType,
	getFamily,
	getFamilyByGender,
	getRestaurants,
	getRestaurantByName,
	changeName,
	changeLocation,
	addHobbies,
	addOccupations,
	addFamily,
	addRestaurant,

	getSkills,
	addSkills
}