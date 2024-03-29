module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `animals` ORDER BY name ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to Favorite Animal | View Animals"
                ,animals: result
            });
        });
    },
};
