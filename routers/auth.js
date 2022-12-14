const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Camping = require("../models/").camping;
const Review_camping = require("../models/").review_camping;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();


//login 
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    const camping = await Camping.findOne({ where: { userId: user.id } })
    // console.log("camping", camping)
    return res.status(200).send({ token, user: user.dataValues, camping: camping });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

//http POST :4000/signup email="agnieszka@gmail.com" password="111111"
//signup
router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    // console.log("im here email", email, password, name)
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,

    });

    // console.log("im here email", newUser.email)


    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });
    console.log("im here token", token)

    res.status(201).json({ token, user: newUser.dataValues });
  } catch (error) {
    console.log("error", error)
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  const camping = await Camping.findOne({ where: { userId: req.user.id } })
  res.status(200).send({ ...req.user.dataValues, camping: camping });
});

module.exports = router;