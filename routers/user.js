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

// http PATCH :4000/user/1 email="Agnieszka" phone=111111 instagram_blog="blog.com"
router.patch("/updateUser/:id", async (request, response, next) => {
    const { id } = request.params;
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

module.exports = router;