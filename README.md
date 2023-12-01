# 18 NoSQL: Social Network API

## Description

This is week 18 challenge project for the Northwestern coding bootcamp.

The challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This project uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

No seed data is provided, so the user need to create your own data using Insomnia or Postman when using this API.

The application will be invoked by using the following command:

```bash
npm start
```

## Table of Contents

- [User Story](#user-story)

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Github Repo](#github-repo)

- [Video Link](#video-link)

- [Questions](#questions)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Installation

To install necessary dependencies, run the following command:

```
npm i
```

## Usage

```
WHEN the user enters the command to invoke the application
THEN the server is started and the Mongoose models are synced to the MongoDB database
WHEN the user opens API GET routes in Insomnia/Postman for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN the user tests API POST, PUT, and DELETE routes in Insomnia/Postman
THEN the user is able to successfully create, update, and delete users and thoughts in my database
WHEN the user tests API POST and DELETE routes in Insomnia/Postman
THEN the user is able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## License

This project is licensed under MIT License

## Github Repo

https://github.com/ChgDave/MongoDB-Social-Network-API

## Video Link

https://drive.google.com/file/d/1jw5hV5h04CWkggLXyZVgx_29VEPrOzqg/view

## Questions

If you have any qustions about the repo, open an issue or contact me directly at chgdave@gmail.com. You can also find more of my work at [chgdave](https://github.com/chgdave).

## Review

You are required to submit BOTH of the following for review:

- A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
