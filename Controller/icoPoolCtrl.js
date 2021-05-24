const icoFactory = require("../Model/icoTokenFactoryModel");

const icoTokenFactoryCtrl = {
  createIcoToken: async (req, res) => {
    try {
      console.log("1");
      const {
        ico_name,
        total_supply,
        ico_symbol,
        token_price,
        start_date,
        end_date,
      } = req.body;

      console.log(ico_name);
      const icopool_token = await icoFactory.findOne({ ico_name });
      if (icopool_token) {
        return res.status(400).json({
          msg: "Sorry, choose another one, this token is already exist",
        });
      }
      const newToken = new icoFactory({
        ico_name,
        total_supply,
        ico_symbol,
        token_price,
        start_date,
        end_date,
      });
      await newToken.save();
      res.json("Token is created successfully!");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

//   createIcoToken: async (req, res) => {
//     try {
//       const new_owner_address = req.body.new_owner_address;

//       const icopool_token = await icoFactory.findOne({ ico_name });
//       if (icopool_token) {
//         return res.status(400).json({
//           msg: "Sorry, choose another one, this token is already exist",
//         });
//       }
//       const newToken = new icoFactory({
//         ico_name,
//         total_supply,
//         ico_symbol,
//         token_price,
//         start_date,
//         end_date,
//       });
//       await newToken.save();
//       res.json("Token is created successfully!");
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },

  getIcoToken: async (req, res) => {
    try {
      const ico_factory = await icoFactory.find();
      res.json({ icoFactory: ico_factory });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateIcoToken: async (req, res) => {
    try {
      const token_id = req.params._id;
      const updatedToken = await icoFactory.updateOne(
        { _id: token_id },
        {
          total_supply: req.body.total_supply,
          token_price: req.body.token_price,
          end_date: req.body.end_date,
        }
      );
      if (updatedToken) {
        return res.status(201).json({ msg: "Token is updated successfully!" });
      }
      res.json({ message: "Token is not updated yet" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteIcoToken: async (req, res) => {
    try {
      const token_id = req.params._id;
      const deleteToken = await icoFactory.findOneAndRemove({ _id: token_id });
      if (deleteToken) {
        return res.status(201).json({ msg: "Token is deleted successfully!" });
      }
      res.json({ message: "Token is not deleted yet" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = icoTokenFactoryCtrl;
