const fs = require('fs');

module.exports = {
    addAnimalPage: (req, res) => {
        res.render('add-animals.ejs', {
            title: "Welcome to Favorite Animals | Add a new animal"
            ,message: ''
        });
    },
    addAnimal: (req, res) => {

        let message = '';
        let name = req.body.name;
        let favorite_color = req.body.favorite_color;
        let type = req.body.type;

        let usernameQuery = "SELECT * FROM `animals` WHERE name = '" + name + "'";

        db.query(usernameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Name already exists';
                res.render('add-animals.ejs', {
                    message,
                    title: "Welcome to Favorite Animals | Add a new animal"
                });
            } else {
                        // send the animal's details to the database
                        let query = "INSERT INTO `animals` (name, favorite_color, type) VALUES ('" +
                            name + "', '" + favorite_color + "', '" + type + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
                   // }); 
	//	}
//                }
            }
        });
    },
    editAnimalPage: (req, res) => {
        let animalName = req.params.name;
        let query = "SELECT * FROM `animals` WHERE name = '" + animalName + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-animals.ejs', {
                title: "Edit  Animals"
                ,animal: result[0]
                ,message: ''
            });
        });
    },
    editAnimal: (req, res) => {
        let animalName = req.params.name;
        let favorite_color = req.body.favorite_color;
        let type = req.body.type;

        let query = "UPDATE `animals` SET `name` = '" + animalName + "', `favorite_color` = '" + favorite_color + "', `type` = '" + type + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteAnimal: (req, res) => {
        let animalName = req.params.name;
        let deleteUserQuery = 'DELETE FROM animals WHERE name = "' + animalName + '"';

        db.query(deleteUserQuery, (err, result) => {
      	     if (err) {
                return res.status(500).send(err);
             }
             res.redirect('/');
        });
    }
};
