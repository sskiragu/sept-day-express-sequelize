import db from "../models/index.js";

const User = db.User;

const login = async (req, res) => {
   res.json({"message": req.body});
}

const signup = async (req, res, next) => {
   const user = req.body;

   try {
      await User.create(user);
      res.json({"message": "Successfully registered."})
   } catch (error) {
      next(error);
   }
}

export { login, signup };
