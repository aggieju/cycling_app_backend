const auth = require("../auth/middleware");

const express = require("express");

const { Router } = express;

const router = new Router();

//Import required models
const User = require("../models").user;
const Users_story = require("../models").users_story;
const Country_budget = require("../models").country_budget;
const Camping = require("../models").camping;


// http :4000/users
router.get("/users", async (request, response, next) => {
    const users = await User.findAll({
        raw: true,
        //  include: { model: Users_story },
    });
    response.send(users);
});

// http PATCH :4000/updateUser email="Agnieszka" phone=111111 instagram_blog="blog.com"
router.patch("/updateUser", auth, async (request, response, next) => {
    const id = request.user.id;
    const { email } = request.body;
    const { phone } = request.body;
    const { instagram_blog } = request.body;
    const user = await User.findByPk(id);

    if (!user) {
        response.status(404).send("No user with that id");
    } else {
        const updatedUser = await user.update({ email, phone, instagram_blog });
        response.send(updatedUser);
    }
});

// http :4000/budgets
router.get("/budgets", async (request, response, next) => {
    const budgets = await Country_budget.findAll({
        raw: true,
        include: { model: User, attributes: ["name"] },
    });
    response.send(budgets);
});

// http :4000/users_campings
router.get("/users_campings", async (request, response, next) => {
    const users = await User.findAll({
        raw: true,
        include: { model: Camping, attributes: ["name"] },
    });
    response.send(users);
});

//post a camping
// POST a new camping with corresponding `id`
//http :4000/postCamping name=camping description=aaaa latitude=46 longitude=74 country=Chile
router.post("/postCamping", auth, async (req, res, next) => {

    try {
        const { name, description, wild_camping, pricePerNightPp, currency, latitude, longitude, country, photo1, photo2, photo3, userId } = req.body;
        const user = await User.findByPk(userId)
        if (user === null) {
            return res.status(404).send({ message: "this user does not exist" })
        }
        if (!name || name === " ") {
            res.status(400).send("Must provide a name of a camping");
        } else {
            // console.log("requested body", req.body);
            const newCamping = await Camping.create({
                name,
                description,
                wild_camping,
                pricePerNightPp,
                currency,
                latitude,
                longitude,
                country,
                photo1,
                photo2,
                photo3,
                userId

            });
            res.json(newCamping);
            res.status(200).send("successfully created");
        }
    } catch (e) {
        console.log(e.message);
    }
});


module.exports = router;