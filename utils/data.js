const users = [
  {
    username: "chgdave",
    email: "chgdave@gmail.com",
  },
  { username: "dpk", email: "chgdomi@gmail.com" },
];

const thoughts = [
  {
    thoughtText: "Today is a great day",
    username: "chgdave",
    // createdAt: Date.now(),
    reactions: {
      reactionBody: "I agree",
      username: "dpk",
      // createdAt: Date.now(),
    },
  },
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Export the functions for use in seed.js
module.exports = { users, thoughts };
