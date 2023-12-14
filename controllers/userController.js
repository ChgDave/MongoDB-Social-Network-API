const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

// Aggregate function to get the number of students overall
// const headCount = async () => {
//   const numberOfStudents = await Student.aggregate().count("studentCount");
//   return numberOfStudents;
// };

// Aggregate function for getting the overall grade using $avg
// const grade = async (studentId) =>
//   Student.aggregate([
//     // only include the given student by using $match
//     { $match: { _id: new ObjectId(studentId) } },
//     {
//       $unwind: "$assignments",
//     },
//     {
//       $group: {
//         _id: new ObjectId(studentId),
//         overallGrade: { $avg: "$assignments.score" },
//       },
//     },
//   ]);

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();

      res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({
        _id: req.params.userId,
      }).select("-__v");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update a new user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a user and all his thoughts and reactions
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({
        _id: req.params.userId,
      });

      if (!user) {
        return res.status(404).json({ message: "No such user exists" });
      }
      // delete thoughts that belong to the user
      await Thought.deleteMany({ _id: { $in: user.thoughts } });

      await User.updateMany(
        { friends: { $in: [user._id] } },
        { $pull: { friends: user._id } }
      );

      res.json({ message: "User successfully deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add friend to a user
  async createFriend(req, res) {
    console.log("You are creating a friend");
    console.log(req.body);

    try {
      // const friend = await User.findOne({ username: req.body.username });
      // console.log(friend);

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user found with that ID :(" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete friend to a user
  async deleteFriend(req, res) {
    console.log("You are deleting a friend");

    try {
      const friend = req.params.friendId;

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: friend } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user found with that ID :(" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
