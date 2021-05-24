const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
  register: async (req, res) => {
    try {
      const { role, name, email, password } = req.body;

      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "this user is already exists." });
      }
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "password is less than 6 character" });
      }

      //password encryption
      //const passwordhash = await bcrypt.hash(password, 10)
      const newUser = new User({
        role,
        name,
        email,
        password,
      });

      await newUser.save();

      //create jsonwebtoken for authentication
      const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/api/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });

      res.json({
        msg: "Register Success",
        accesstoken,
        role: user.role,
        user: {
          ...newUser._doc,
          password: " ",
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "user is not exist" });
      }
      //const isMatch = await bcrypt.compare(password, user.password)
      if (password != user.password) {
        return res.status(400).json({ msg: "Incorrect password" });
      }
      //if login suuccess then create access token and refresh token
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/api/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      });

      res.json({
        msg: "Login Success",
        accesstoken,
        role: user.role,
        user: {
          ...user._doc,
          password: " ",
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/api/refresh_token" });
      return res.json({ msg: "logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) {
        return res.status(400).json({ msg: "please login first" });
      }

      jwt.verify(
        rf_token,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, result) => {
          if (err) {
            return res.status(400).json({ msg: "please login first" });
          }

          if (!result) {
            return res.status(400).json({ msg: "user does not exist" });
          }

          const user = await User.findById(result.id)
          const access_token = createAccessToken({ id: user.id });
          res.json({
            access_token,
            role: user.role,
            user: {
              ...user._doc,
              password: " ",
            },
          });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(400).json({ msg: "user is not exist" });
      }
      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

module.exports = userController;
