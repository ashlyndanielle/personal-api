var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');


module.exports = {
    getName: function(req, res, next){
        res.status(200).json({"name": user.name})
    },

    getLocation: (req, res) => {
        res.status(200).json({"location": user.location})
    },

    getOccupations: (req, res) => {
        if (req.query.order === 'asc'){
            res.status(200).json(user.occupations.sort().reverse());

        } else if (req.query.order === 'desc'){
            res.status(200).json(user.occupations.sort());
        } else {
        res.status(200).json({"occupations": user.occupations})
        }
    },

    getLatestOccupation: (req,res) => {
        res.status(200).json({"latest occupation": user.occupations[user.occupations.length-1]})
    },

    getHobbies: (req, res) => {
        res.status(200).json(user.hobbies)
    },

    getSpecificHobbies: (req, res) => {
        var match = user.hobbies.filter( (hobby) =>{
            return (req.params.type === hobby.type)
        })
        res.status(200).json(match)
    },

    getFamily: (req, res) => {
        if (req.query.relation){
            res.status(200).json(user.family.filter( (member) => {
                return (member.relation === req.query.relation)
            }))
        } 
        res.status(200).json(user.family);
    },

    getFamilyGender: (req, res) => {
        var match = user.family.filter( (family) =>{
            return (req.params.gender === family.gender)
        })
        console.log(match);
        res.status(200).json(match);
    },

    getRestaurants: function(req, res, next) {
        if(req.query.rating){
            res.status(200).send(
                user.restaurants.filter(
                    function(restaurant){
                        return(restaurant.rating >= 2)
                    }
                )
            )
        }else{
            res.status(200).send(user.restaurants);
        }
    },

    // getRestaurants: (req, res) => {

    //     if (req.query.rating){
    //         // var goodRest = user.restaurants.filter( (rating) => {
    //         //     return (restaurants.rating >= 2)
    //         // });
    //         res.status(200).json(user.restaurants.filter( (rating) => {
    //             return (restaurants.rating >= 2)
    //         }))
    //     } else {
    //         res.status(200).json(user.restaurants);
    //     }
    // }
    getFavoriteRestaurants: (req, res) => {
        var match = user.restaurants.filter( (restaurant) => {
            return (req.params.name === restaurant.name)
        })
        res.status(200).json(match)
    },


    // put shit here

    changeName: (req, res) => {
        user.name = req.body.name;
        res.status(200).json("Changed name to " + req.body.name);
    },

    changeLocation: (req, res) => {
        user.location = req.body.location;
        res.status(200).json("Changed location to " + req.body.location);
    },

    // post shit here

    addHobbies: (req, res) => {
        user.hobbies.push(req.body.hobbies);
        res.status(200).json("Added new hobby!");
    },

    addOccupation: (req, res) => {
        user.occupations.push(req.body.occupations);
        res.status(200).json("Added new occupation!");
    },

    addFamily: (req, res) => {
        user.family.push(req.body.family);
        res.status(200).json("Congratulations on the baby!!");
    },

    addRestaurants: (req, res) => {
        user.restaurants.push(req.body.restaurants);
        res.status(200).json("You have more options to choose from, yaaaaaay!")
    },

    // skillz shit here

    getSkillz: (req, res) => {
        if (req.query.experience){
            res.status(200).json(skillz.filter( (level) => {
                return (level.experience === req.query.experience);
            }))
        }
        res.status(200).json(skillz);
    },

    addSkillz: (req, res) => {
        skillz.push(req.body.skillz);
        res.status(200).json("Wow, you are so talented!")
    },

    receivedSecrets: (req, res) => {
        res.status(200).send(secrets);
    }

}
