const auth = require("../auth/middleware");

const express = require("express");

const { Router } = express;

const router = new Router();

//Import required models
const Camping = require("../models").camping;

// http :4000/campings
router.get("/campings", async (request, response, next) => {
    const campings = await Camping.findAll({
        raw: true,
        //  include: { model: Users_story },
    });
    response.send(campings);
});


module.exports = router;